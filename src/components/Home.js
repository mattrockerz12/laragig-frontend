import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadListing } from "../redux/actions/listingActions";
import { Link, Navigate } from "react-router-dom";

const Home = ({ user }) => {
  const dispatch = useDispatch();

  const listings = useSelector((state) => state.listings);

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    dispatch(loadListing(1));
  }, [dispatch]);

  //return <>Home page rendered</>;

  const handleClick = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/register" />;
  }

  return (
    <>
      <section className="py-4 py-xl-5">
        <div className="row">
          <div className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto">
            <div>
              <h2 className="text-uppercase">LaraGigs</h2>
              <p className="mb-4">Find or post Laravel jobs and project</p>
              <button
                className="btn btn-danger fs-5 py-2 px-4"
                onClick={handleClick}
              >
                {user ? "Click to list a gigs" : "Signup to list a gigs"}
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="row">
        {listings.listings.map((list, index) => (
          <div className="col-xs-12 col-md-6 col-lg-4" key={index}>
            <div className="card">
              <img className="img-top" src={list.logo} alt={list.title} />
              <div className="card-body">
                <h4 className="card-title">
                  <Link to={`/manage/gig/${list.id}`}>{list.title}</Link>
                </h4>
                <p className="card-text">{list.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
