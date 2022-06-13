import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../firebaseConfig";
import { setLoggedUser, setLogIn, setLogOut, setSessionToken } from "../../state/slice/loginSlice";
import { useNavigate } from "react-router-dom";

type Props = {}

const LogIn: React.FC<Props> = (props) => {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [userNotFound, setUserNotFound] = useState(false)
    const [invalidEmail, setInvalidEmail] = useState(false)

    const onLogIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        if (user && password) {
            signInWithEmailAndPassword(auth, user, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    const accessToken = user.accessToken
                    localStorage.setItem('token', accessToken)
                    dispatch(setSessionToken(accessToken))
                    dispatch(setLoggedUser(user.email))
                    dispatch(setLogIn())
                    setUserNotFound(false)
                    setInvalidEmail(false)
                    navigate('/welcome')
                })
                .catch((error) => {
                    const errorCode = error.code;

                    if (errorCode === "auth/user-not-found") {
                        setUserNotFound(true)
                        setInvalidEmail(false)
                    }
                    if (errorCode === "auth/invalid-email") {
                        setInvalidEmail(true)
                        setUserNotFound(false)
                    }
                });
            setPassword('')
            setUser('')
        }
    }

    return (
        <form className="credentials-form">
            <div className="container">
                <div className="d-flex flex-row my-3 justify-content-center">
                    <h3>Log In</h3>
                </div>
                <div className="row my-3 justify-content-center">
                    <input
                        onChange={(e) => setUser(e.target.value)}
                        type="email"
                        name="user"
                        placeholder="User name"
                        value={user}
                    />
                </div>
                <div className="row">
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                </div>
                <div className="row">
                    <button className="btn btn-primary mt-3" onClick={(e) => onLogIn(e)}>Confirm</button><br />
                </div>
                {userNotFound ? <div className="row">
                    <span className="auth-alert mt-1">User not found</span>
                </div> : <></>}
                {invalidEmail ? <div className="row">
                    <span className="auth-alert mt-1">Invalid email</span>
                </div> : <></>}
            </div>
        </form>
    )
}

export default LogIn