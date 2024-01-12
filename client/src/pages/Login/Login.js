import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner/Spinner';
import SocialLogin from './SocialLogin';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    const navigate = useNavigate();
    const emailRef = useRef('');


    if (user) {
        navigate('/')
    };

    const handleLogin = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password);
    };

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent mail')
    };

    return (
        <div className='vc-container'>
            <div className="row m-0 pt-5">
                <div className="col-lg-3 col-md-2 col-sm-0"></div>
                <div className="col-lg-6 col-md-8 col-sm-12 restock text-center">
                    <h2 className='vc-text2 vc-h1 mb-4'>Login</h2>
                    <form onSubmit={handleLogin} className='restock-form'>
                        <input ref={emailRef} className='w-100' placeholder='Your email' type="email" name="email" />
                        <input className='w-100' placeholder='Password' type="password" name="password" />
                        {
                            error ? <p className='text-danger'>{error?.message}</p> : ''
                        }
                        {
                            loading ? <Spinner></Spinner> : ''
                        }
                        <div className="inventory-btn mt-5 mb-0">
                            <button type='submit'>Login</button>
                        </div>
                    </form>
                    <a onClick={resetPassword} className='btn btn-link'>Forget password?</a>
                    <p className='text-muted my-2'>Haven't an account? <Link className='text-primary text-decoration-none' to={"/register"}>Register</Link>
                    </p>
                    <SocialLogin></SocialLogin>
                    <ToastContainer></ToastContainer>
                </div>
                <div className="col-lg-3 col-sm-0 col-md-2"></div>
            </div>
        </div>
    );
};

export default Login;