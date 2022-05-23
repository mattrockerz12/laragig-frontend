import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/actions/loginActions";

const Login = ({ setLogin }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [loggedIn, setLoggedIn] = useState({
    email: "",
    password: "",
  });

  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoggedIn((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //console.log(login);

    dispatch(loginUser(loggedIn));

    setRedirect(true);

    setLogin();
  };

  if (redirect) {
    return navigate("/");
  }

  return (
    <div className="row mb-5">
      <div className="col-md-8 col-xl-6 text-center mx-auto">
        <h2>Login</h2>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 col-xl-4">
          <div className="card mb-5">
            <div className="card-body d-flex flex-column align-items-center">
              <form className="text-center" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={loggedIn.email}
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={loggedIn.password}
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <button className="btn btn-primary d-block w-100">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
