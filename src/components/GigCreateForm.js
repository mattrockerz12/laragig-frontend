import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { saveList } from "../redux/actions/listingActions";

const GigCreateForm = () => {
    const dispatch = useDispatch()    
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [logo, setLogo] = useState('')
    const [tags, setTags] = useState('')
    const [company, setCompany] = useState('')
    const [location, setLocation] = useState('')
    const [email, setEmail] = useState('')
    const [website, setWebsite] = useState('')
    const [description, setDescription] = useState('')
    const [redirect, setRedirect] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        /*console.log({
            title,
            logo,
            tags,
            company,
            location,
            email,
            website,
            description
        });*/

        dispatch(saveList({
            title,
            logo,
            tags,
            company,
            location,
            email,
            website,
            description
        }))

        setRedirect(true)
    }

    const upload = async (files) => {
        if (files == null) {
            return
        }

        const formData = new FormData()

        formData.append('logo', files[0])

        const { data } = await axios.post('http://localhost:8000/api/laragig/upload', formData)

        setLogo(data.url)
    }

    const handleBack = () => {
        setRedirect(true)
    }

    if (redirect) {
        return navigate('/gigs')
    }

    return (
        <>
        <button className="btn btn-info btn-lg m-4" onClick={handleBack}>Back</button>
        <section className="position-relative py-4 py-xl-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-8 col-lg-6 col-xl-5">
                    <div className="card mb-5">
                        <div className="card-body p-sm-5">
                            <h2 className="text-center mb-4">Create Gig</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input className="form-control" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Logo</label>
                                    <input className="form-control" type="file" name="logo"  onChange={(e) => upload(e.target.files)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Tags</label>
                                    <input className="form-control" type="text" name="tags" value={tags} onChange={(e) => setTags(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Company</label>
                                    <input className="form-control" type="text" name="company" value={company} onChange={(e) => setCompany(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Location</label>
                                    <input className="form-control" type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input className="form-control" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Website Link</label>
                                    <input className="form-control" type="text" name="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea className="form-control" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-success d-block w-100" type="submit">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default GigCreateForm;