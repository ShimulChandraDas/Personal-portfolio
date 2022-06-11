import React from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../Utilities/pic//Shimul.png'

const Navbar = () => {
    return (
        <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-900 text-gray-100 hover:text-gray-400 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <button className=" navbar-toggler text-gray-100 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                    </svg>
                </button>
                <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                    <NavLink className="flex font-bold text-2xl items-center justify-center text-gray-300 hover:text-gray-100 focus:text-gray-200 mt-2 uppercase lg:mt-0 mr-1" to="#">Shimul</NavLink>
                    {/* <!-- Left NavLinks --> */}
                    <ul className="navbar-nav flex flex-col pl-0 list-style-none mx-auto">
                        <li className="nav-item p-2">
                            <NavLink className="nav-NavLink text-gray-300 hover:text-gray-100 focus:text-gray-200 p-0" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-NavLink text-gray-300 hover:text-gray-100 focus:text-gray-200 p-0" href='#about'>About</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-NavLink text-gray-300 hover:text-gray-100 focus:text-gray-200 p-0" href='#skills'>Skills</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-NavLink text-gray-300 hover:text-gray-100 focus:text-gray-200 p-0" href='#project'>Projects</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-NavLink text-gray-300 hover:text-gray-100 focus:text-gray-200 p-0" href='#service'>Service</a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="nav-NavLink text-gray-300 hover:text-gray-100 focus:text-gray-200 p-0" href='#contact'>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-center relative">
                    {/* <!-- Icon --> */}
                    <div className="dropdown relative">
                        <NavLink className="dropdown-toggle flex items-center hidden-arrow" to="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={profile} className="rounded-full" style={{ height: '40px', width: "37px" }} alt="" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;