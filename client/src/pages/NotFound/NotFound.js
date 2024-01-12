import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='vc-container'>
            <div className='bg-white py-5 my-5 shadow text-center'>
                <div class="number">404</div>
                <div class="text">
                    <span>Ooops...</span>
                    <br />page not found
                </div>
            </div>
        </div>
    );
};

export default NotFound;