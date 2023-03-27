import React from "react";
import { FiLogOut, FiUpload } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
    const admin = window.location.toString().split("/")[window.location.toString().split("/").length - 1] == "admin";
    return  (
        <nav className="navbar navbar-light p-2 px-4 fixed-top">
            <a href="/" className={"nav-link " + (admin ? "text-dark" : "text-primary") +" fs-3 fw-bold lead ps-5"}>
                Blog Page
            </a>
            <div className="w-50 d-flex justify-content-end">
                <a href="/create" className={"btn btn-primary shadow shadow-lg mx-2 " + (admin ? "d-none" : "")}><FiUpload className="me-2" />Upload</a>
                <a href="/profile" className={"btn btn-primary shadow shadow-lg mx-2 " + (admin ? "d-none" : "")}><CgProfile className="me-2" /> Profile</a>
                <a href="/logout" className={ "btn " + (admin ? "btn-dark" : "btn-primary") + " shadow shadow-lg mx-2" }><FiLogOut className="me-2" /> Log Out</a>
            </div>
        </nav>
    )
}

export default NavBar;