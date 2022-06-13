import { signInWithPopup, GoogleAuthProvider, OAuthCredential } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../../firebaseConfig";
import { setLoggedUser, setLogIn, setSessionToken } from "../../state/slice/loginSlice";

const providerGoogleAuth = new GoogleAuthProvider();

type Props = {}

const GoogleAuth: React.FC<Props> = (props) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const signInWithGoogleButton = () => {

        signInWithPopup(auth, providerGoogleAuth)
            .then((result) => {
                const credential: OAuthCredential | null = GoogleAuthProvider.credentialFromResult(result);

                const token = credential!.accessToken;

                const user = result.user;

                dispatch(setLogIn())
                dispatch(setLoggedUser(user.email))
                localStorage.setItem('token', `${token}`)
                dispatch(setSessionToken(token))

                navigate('/welcome')
            }).catch((error) => {
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }


    return (
        <div className="d-flex justify-content-center">
            <button className="d-flex btn btn-primary" onClick={signInWithGoogleButton}>Log In with Google</button>
        </div>
    );
};

export default GoogleAuth