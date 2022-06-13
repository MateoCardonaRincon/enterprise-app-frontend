import { signInWithPopup, GithubAuthProvider, OAuthCredential } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../../firebaseConfig";
import { setLoggedUser, setLogIn } from "../../state/slice/loginSlice";

const githubAuthProvider = new GithubAuthProvider();

type Props = {}

const GitHubAuth: React.FC<Props> = (props) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const signInWithGithub = () => {

        signInWithPopup(auth, githubAuthProvider)
            .then((result) => {
                const credential: OAuthCredential | null = GithubAuthProvider.credentialFromResult(result);

                const token = credential!.accessToken;
                const user = result.user;

                dispatch(setLogIn())
                dispatch(setLoggedUser(user.email))
                localStorage.setItem('user', `${user.email}`)

                navigate('/welcome')
            }).catch((error) => {
                const credential = GithubAuthProvider.credentialFromError(error);
                console.log(error)
            });
    }


    return (
        <div className="d-flex justify-content-center">
            <button className="btn btn-primary" onClick={signInWithGithub}>Log In with Github</button>
        </div>
    );
};

export default GitHubAuth