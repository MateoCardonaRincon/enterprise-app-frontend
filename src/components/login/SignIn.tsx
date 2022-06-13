import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../../firebaseConfig'
import { setLoggedUser, setLogIn, setSessionToken } from '../../state/slice/loginSlice'

type Props = {}

const SignIn: React.FC<Props> = (props) => {

    const dispatch = useDispatch()

    const formRef = useRef(null)
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [weakPassword, setWeakPassword] = useState(false)
    const [invalidEmail, setInvalidEmail] = useState(false)

    const onSignIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (password && user) {
            createUserWithEmailAndPassword(auth, user, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    const accessToken = user.accessToken
                    localStorage.setItem('token', accessToken)
                    dispatch(setSessionToken(accessToken))
                    dispatch(setLoggedUser(user.email))
                    dispatch(setLogIn())
                    setInvalidEmail(false)
                    setWeakPassword(false)
                    setPassword('')
                    setUser('')
                })
                .catch((error) => {
                    const errorCode = error.code;

                    if (errorCode === "auth/weak-password") {
                        setWeakPassword(true)
                        setInvalidEmail(false)
                    }
                    if (errorCode === "auth/invalid-email") {
                        setInvalidEmail(true)
                        setWeakPassword(false)
                    }
                });
        }
    }

    return (
        <form className="credentials-form" ref={formRef}>
            <div className="container">
                <div className="d-flex flex-row my-3 justify-content-center">
                    <h3>Sign In</h3>
                </div>
                <div className="row my-3 justify-content-center">
                    <input
                        onChange={(e) => setUser(e.target.value)}
                        type="text"
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
                        value={password}
                    />
                </div>
                <div className="row">
                    <button className="btn btn-primary mt-3" onClick={(e) => onSignIn(e)}>Confirm</button><br />
                </div>
                {weakPassword ? <div className="row  mt-1">
                    <span className="auth-alert">Weak password (at least 6 characters are required)</span>
                </div> : <></>}
                {invalidEmail ? <div className="row  mt-1">
                    <span className="auth-alert">Invalid email</span>
                </div> : <></>}
                {invalidEmail ? <div className="row  mt-1">
                    <span className="auth-alert">Invalid email</span>
                </div> : <></>}
            </div>
        </form>
    )
}

export default SignIn