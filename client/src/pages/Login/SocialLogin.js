import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner/Spinner';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if(user){
        navigate('/')
    };

    return (
        <div>
            <div className='d-flex align-items-center my-3'>
                <div className='w-100 bg-secondary' style={{ height: '1px' }}></div>
                <div className='mx-2 w-25 text-muted'><span>or</span></div>
                <div className='w-100 bg-secondary' style={{ height: '1px' }}></div>
            </div>
            <div>
                {
                    loading ? <Spinner></Spinner> : ''
                }
                <p className='text-danger'>{error?.message}</p>
            </div>
            <div className="inventory-btn mt-5 mb-0">
                <button onClick={() => signInWithGoogle()} className='w-100 my-2'>Continue with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;