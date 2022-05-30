import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import Gigs from "./components/Gigs";
import GigCreateForm from "./components/GigCreateForm";
import GigEditForm from "./components/GigEditForm";
import axios from "axios";
import New from "./components/New";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/actions/setUserActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/laragig/user"
        );
        dispatch(setUser(data.data));
      } catch (e) {
        dispatch(setUser(null));
      }
    })();
  }, [dispatch]);

  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/manage/gig/:id" element={<GigEditForm />} />
          <Route path="/manage/gig" element={<GigCreateForm />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="new" element={<New />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
