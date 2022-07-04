import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const navbarItems = <>
        <li className='mx-auto lg:mr-4'>
            <a href='/#services'>Services</a>
        </li>
        <li className='mx-auto lg:mr-4'>
            <a href='/#portfolio'>Projects</a>
        </li>
        <li>
            <a
                href='https://drive.google.com/file/d/1HjygocBdppINjJQ9laEe88QnDGac4Jz8/view?usp=sharing'
                target='_blank'
                rel="noreferrer"
                className="btn btn-primary"
            >Download Resume</a>
        </li>
    </>
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="navbar bg-base-100 mb-32 p-5"
        >
            <div className="navbar-start">
                <Link
                    to='/'
                    className="normal-case text-xl"
                >Labib Amir Salimi</Link>
            </div>
            <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden ml-auto">
                <svg className="w-6 h-6" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navbarItems}
                </ul>
            </div>
        </motion.div >
    );
};

export default NavBar;