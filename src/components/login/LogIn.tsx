import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebaseConfig";

type Props = {}

const LogIn: React.FC<Props> = (props) => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const onLogIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        if (user && password) {
            signInWithEmailAndPassword(auth, user, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log('**** user credentials ****');
                    console.log(userCredential);
                    console.log('**** user ***');
                    console.log(user)
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log('*** Log in error ***');
                    console.log(errorMessage);
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
                    />
                </div>
                <div className="row">
                    <button className="btn btn-primary my-3" onClick={(e) => onLogIn(e)}>Log In</button><br />
                </div>
            </div>
        </form>
    )
}

export default LogIn