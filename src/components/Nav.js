import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Nav = ({ user, setLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await axios.post('http://localhost:8000/api/laragig/logout')

        setLoggedIn()

        //navigate("/login");
    }

    const handleLogin = () => {
        navigate("/login"); 
    }
    
    const handleRegister = () => {
        navigate("/register");
    }

    let links;

    if (user) {
        links = (
            <>
                <div className="d-md-none my-2">
                    <button className="btn btn-warning" onClick={handleLogout}>Logout</button>
                </div>
                <div className="d-none d-md-block">
                    <button className="btn btn-warning" onClick={handleLogout}>Logout</button>
                </div>
            </>
        )
    } else {
        links = (
            <>
                <div className="d-md-none my-2">
                    <button className="btn btn-light me-2" onClick={handleLogin}>Login</button>
                    <button className="btn btn-primary" onClick={handleRegister}>Register</button>
                </div>
                <div className="d-none d-md-block">
                    <button className="btn btn-light me-2" onClick={handleLogin}>Login</button>
                    <button className="btn btn-primary" onClick={handleRegister}>Register</button>
                </div>
            </>
        )
    }

    return (
        <nav className="navbar navbar-dark navbar-expand-md bg-dark py-3">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/"><span>Logo</span></Link>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-6">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navcol-6" className="collapse navbar-collapse flex-grow-0">
                    {links}
                </div>
            </div>
        </nav>
    );
}

export default Nav;