import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadListing } from "../redux/actions/listingActions";
import { Navigate } from "react-router-dom";
import Pagination from "react-js-pagination";

const Home = ({ user }) => {
  const dispatch = useDispatch();

  const listings = useSelector((state) => state.listings);

  const [redirect, setRedirect] = useState(false);

  const [filters, setFilters] = useState({
    page: 1,
  });

  useEffect(() => {
    dispatch(loadListing(filters));
  }, [dispatch, filters]);

  const handleClick = () => {
    setRedirect(true);
  };

  const handlePageChange = (pageNumber) => {
    setFilters({
      ...filters,
      page: pageNumber,
    });
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
                <h4 className="card-title">{list.title}</h4>
                <h6 className="card-subtitle mb-2">{list.company}</h6>
                <p className="card-text">{list.description}</p>
                <div className="btn-group mb-3">
                  <button className="btn btn-info btn-sm mr-3">Laravel</button>
                  <button className="btn btn-dark btn-sm">API</button>
                  <button className="btn btn-success btn-sm">Backend</button>
                  <button className="btn btn-warning btn-sm">ReactJs</button>
                </div>
                <p>{list.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <Pagination
          activePage={listings.meta.current_page}
          totalItemsCount={parseInt(listings.meta.total, 10)}
          itemsCountPerPage={listings.meta.per_page}
          onChange={(pageNumber) => handlePageChange(pageNumber)}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    </>
  );
};

export default Home;
