import React from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import './EmailVerify.css';

const EmailVerify = () => {
    const [sendEmailVerification] = useSendEmailVerification(auth);

    return (
        <div className='vc-container'>
            <div className="email-verify text-center">
                <div>
                    <h3 className='vc-text1'>Verify your email</h3>
                    <p>Didn't recieve email</p>
                    <div className="inventory-btn mt-5 mb-0">
                        <button className='btn btn-info' onClick={async () => {
                            await sendEmailVerification();
                            toast('Sent Email')
                        }}>Send Email Again
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailVerify;