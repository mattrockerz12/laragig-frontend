import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import Gigs from "./components/Gigs";
import GigCreateForm from "./components/GigCreateForm";
import GigEditForm from "./components/GigEditForm";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/laragig/user"
        );

        setUser(data.data);
      } catch (e) {
        setUser(null);
        navigate("/login");
      }
    })();
  }, [login, navigate]);

  return (
    <>
      <Nav user={user} setLogin={() => setLogin(false)} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/manage/gig/:id" element={<GigEditForm />} />
          <Route path="/manage/gig" element={<GigCreateForm />} />
          <Route
            path="login"
            element={<Login setLogin={() => setLogin(true)} />}
          />
          <Route path="register" element={<Register user={user} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
