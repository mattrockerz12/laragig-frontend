import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadListing } from "../redux/actions/listingActions";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()

    const [redirect, setRedirect] = useState(false)

    const listings = useSelector(state => state.listings);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadListing());
    }, [])

    const handleClick = () => {
        setRedirect(true)
    }

    if (redirect) {
        return navigate('/gigs')
    }

    return (
        <>
            <section className="py-4 py-xl-5">
                <div className="row">
                    <div 
                        className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto"
                    >
                        <div>
                            <h2 className="text-uppercase">LaraGigs</h2>
                            <p className="mb-4">Find or post Laravel jobs and project</p>
                            <button className="btn btn-danger fs-5 py-2 px-4" onClick={handleClick}>To List a Gig</button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="row">
                {listings.map(list => (
                    <div className="col-xs-12 col-md-6 col-lg-4" key={list.id}>
                        <div className="card">
                            <img className="img-top" src={list.logo} />
                            <div className="card-body">
                                <h4 className="card-title"><Link to={`/manage/gig/${list.id}`}>{list.title}</Link></h4>
                                <p className="card-text">{list.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;