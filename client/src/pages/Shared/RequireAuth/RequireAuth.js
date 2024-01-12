import { Navigate, useLocation } from "react-router-dom";
import { useAuthState} from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import Spinner from "../Spinner/Spinner";
import { ToastContainer } from 'react-toastify';
import EmailVerify from "../EmailVerify/EmailVerify";

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <Spinner></Spinner>
    };

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    };

    if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
        return <div>
            <EmailVerify></EmailVerify>
            <ToastContainer></ToastContainer>
        </div>
    };

    return children;
};

export default RequireAuth;