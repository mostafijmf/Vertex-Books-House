import React from 'react';
import './Header.css';
import logo from './../../../images/logo.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogout = () =>{
        signOut(auth)
    };

    return (
        <header className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="vc-nav-container">
                    <a className="navbar-brand d-flex align-items-center vc-navbar-brand" href="/">
                        <img width={30} src={logo} alt="" />
                        <span className='fs-2 vc-text2 vc-bold500'>Vertex Books House</span>
                    </a>
                    <button className="navbar-toggler vc-nav-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto text-center mb-2 mb-lg-0">
                            <li className="nav-item me-2">
                                <Link className='nav-link vc-nav-link' to='/'>Home</Link>
                            </li>
                            <li className="nav-item me-2">
                                <Link className='nav-link vc-nav-link' to='/blogs'>Blogs</Link>
                            </li>
                            {
                                user ? 
                                <>
                                    <li className="nav-item me-2">
                                        <Link className='nav-link vc-nav-link' to='/manageInventory'>Manage</Link>
                                    </li>
                                    <li className="nav-item me-2">
                                        <Link className='nav-link vc-nav-link' to='/addItem'>Add</Link>
                                    </li>
                                    <li className="nav-item me-2">
                                        <Link className='nav-link vc-nav-link' to='/myItems'>My items</Link>
                                    </li>
                                    <li className="nav-item me-2">
                                        <button className='btn w-100 nav-link vc-nav-link' onClick={handleLogout}>Log Out</button>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item me-2">
                                        <Link className='nav-link vc-nav-link' to='/login'>Login</Link>
                                    </li>
                                    <li className="nav-item me-2">
                                        <Link className='nav-link vc-nav-link' to='/register'>Register</Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;