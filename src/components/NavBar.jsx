import React from "react";
import { FiLogOut, FiUpload } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
    return  (
        <nav className="navbar navbar-light p-2 px-4 fixed-top">
            <a href="/" className="nav-link text-primary fs-3 fw-bold lead ps-5">
                Blog Page
            </a>
            <div className="w-50 d-flex justify-content-end">
                <a href="/create" className="btn btn-primary shadow shadow-lg mx-2"><FiUpload className="me-2" />Upload</a>
                <a href="/profile" className="btn btn-primary shadow shadow-lg mx-2"><CgProfile className="me-2" /> Profile</a>
                <a href="/logout" className="btn btn-primary shadow shadow-lg mx-2"><FiLogOut className="me-2" /> LogOut</a>
            </div>
        </nav>
    )
}

export default NavBar;