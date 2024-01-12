import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='vc-bg2'>
            <div className='vc-container text-center'>
                <p className='p-3 m-0 mt-5 vc-text1'><small className='text-light'>&copy; Copyright {new Date().getFullYear()} </small> Vertext Books House</p>
            </div>
        </footer>
    );
};

export default Footer;