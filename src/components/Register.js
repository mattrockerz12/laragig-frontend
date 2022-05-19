import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUser } from "../redux/actions/registerAction";

const Register = () => {
    const [register, setRegister] = useState({
        name: "",
        email: "",
        password: "",
        password_confirm: ""
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(saveUser(register));
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setRegister(prevRegister => ({
            ...prevRegister,
            [name]: value
        }));
    }

    return (
        <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
                <h2>Register</h2>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-5">
                        <div className="card-body d-flex flex-column align-items-center">
                            <form className="text-center" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input className="form-control" type="text" name="name" value={register.name} placeholder="Name" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <input className="form-control" type="email" name="email" value={register.email} placeholder="Email" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <input className="form-control" type="password" name="password" value={register.password} placeholder="Password" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <input className="form-control" type="password" name="password_confirm" value={register.password_confirm} placeholder="Confirm Password" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary d-block w-100">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;