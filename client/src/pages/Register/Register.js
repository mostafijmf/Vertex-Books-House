import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin';
import Spinner from '../Shared/Spinner/Spinner';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const navigate = useNavigate();

      if(user){
          navigate('/');
      }

    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name});
        event.target.reset();
    };

    return (
        <div className='vc-container'>
            <div className="row m-0 pt-5">
                <div className="col-lg-3 col-md-2 col-sm-0"></div>
                <div className="col-lg-6 col-md-8 col-sm-12 restock text-center">
                    <h2 className='vc-text2 vc-h1 mb-4'>Register</h2>
                    <form onSubmit={handleRegister} className='restock-form'>
                        <input className='w-100' placeholder='Your Name' type="text" name="text" />
                        <input className='w-100' placeholder='Your email' type="email" name="email" />
                        <input className='w-100' placeholder='Password' type="password" name="password" />
                        {
                            error ? <p className='text-danger'>{error?.message}</p> : ''
                        }
                        {
                            loading ? <Spinner></Spinner> : ''
                        }
                        <div className="inventory-btn mt-5 mb-0">
                            <button type='submit'>Register</button>
                        </div>
                    </form>
                    <p className='text-muted my-2'>Already have an account? <Link className='text-primary text-decoration-none' to={"/login"}>Login</Link>
                    </p>
                    <SocialLogin></SocialLogin>
                </div>
                <div className="col-lg-3 col-sm-0 col-md-2"></div>
            </div>
        </div>
    );
};

export default Register;