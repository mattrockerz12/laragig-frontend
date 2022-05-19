import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadListing, deleteList } from "../redux/actions/listingActions";
import { useNavigate, Link } from "react-router-dom";

const Gigs = () => {
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

    const handleDelete = (list) => {
        dispatch(deleteList(list))
    }

    if (redirect) {
        navigate('/manage/gig') 
    }

    return (
        <>
        <button className="btn btn-success btn-lg m-3" onClick={handleClick}>Create</button>
        <div className="table-response">
            <table className="table">
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
                    {listings.map(list => (
                        <tr key={list.id}>
                            <td>{list.title}</td>
                            <td><div><img style={{width: "70%", height: "100%" }} className="bg-info rounded-circle" src={list.logo} /></div></td>
                            <td>{list.tags}</td>
                            <td>{list.company}</td>
                            <td>{list.location}</td>
                            <td>{list.email}</td>
                            <td>{list.website}</td>
                            <td>{list.description}</td>
                            <td>
                                <div className="btn-group">
                                    <Link to={`/manage/gig/${list.id}`} className="btn btn-primary">Edit</Link>
                                    <button className="btn btn-danger" onClick={() => handleDelete(list)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default Gigs;