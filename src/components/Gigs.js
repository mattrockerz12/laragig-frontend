import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadListing, deleteList } from "../redux/actions/listingActions";
import { Link, Navigate } from "react-router-dom";
import Pagination from "react-js-pagination";

const Gigs = () => {
  const dispatch = useDispatch();

  const listings = useSelector((state) => state.listings);

  const [redirect, setRedirect] = useState(false);

  const [filters, setFilters] = useState({
    page: 1,
  });

  useEffect(() => {
    dispatch(loadListing(filters));
  }, [dispatch, filters]);

  const handleDelete = (list) => {
    dispatch(deleteList(list));
  };

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
    return <Navigate to="/manage/gig" />;
  }

  return (
    <>
      <button className="btn btn-success btn-lg m-3" onClick={handleClick}>
        Create
      </button>
      <div className="table-responsive">
        <table className="table table-image">
          <thead>
            <tr>
              <th>Title</th>
              <th>Logo</th>
              <th>Tags</th>
              <th>Company</th>
              <th>Location</th>
              <th>Email</th>
              <th>Website</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.listings.map((list, index) => (
              <tr key={index}>
                <td>{list.title}</td>
                <td>
                  <div>
                    <img
                      className="bg-info rounded-circle img-fluid"
                      src={list.logo}
                    />
                  </div>
                </td>
                <td>{list.tags}</td>
                <td>{list.company}</td>
                <td>{list.location}</td>
                <td>{list.email}</td>
                <td>{list.website}</td>
                <td>{list.description}</td>
                <td>
                  <div className="btn-group">
                    <Link
                      to={`/manage/gig/${list.id}`}
                      className="btn btn-primary"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(list)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default Gigs;
