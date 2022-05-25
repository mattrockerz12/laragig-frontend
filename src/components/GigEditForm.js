import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { editList } from "../redux/actions/listingActions";

const GigEditForm = ({ user }) => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [logo, setLogo] = useState("");
  const [tags, setTags] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/laragig/listings/${id}`
      );

      setTitle(data.title);
      setLogo(data.logo);
      setTags(data.tags);
      setCompany(data.company);
      setLocation(data.location);
      setEmail(data.email);
      setWebsite(data.website);
      setDescription(data.description);
    })();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      editList(
        {
          title,
          logo,
          tags,
          company,
          location,
          email,
          website,
          description,
        },
        id
      )
    );

    setRedirect(true);
  };

  const upload = async (files) => {
    if (files == null) {
      return;
    }

    const formData = new FormData();

    formData.append("logo", files[0]);

    const { data } = await axios.post(
      "http://localhost:8000/api/laragig/upload",
      formData
    );

    setLogo(data.url);
  };

  const handleBack = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/gigs" />;
  }

  return (
    <>
      {user ? (
        <>
          <button className="btn btn-info btn-lg m-4" onClick={handleBack}>
            Back
          </button>
          <section className="position-relative py-4 py-xl-5">
            <div className="row d-flex justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card mb-5">
                  <div className="card-body p-sm-5">
                    <h2 className="text-center mb-4">Edit Gig</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                          className="form-control"
                          type="text"
                          name="title"
                          defaultValue={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Logo</label>
                        <input
                          className="form-control"
                          type="file"
                          name="logo"
                          onChange={(e) => upload(e.target.files)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Tags</label>
                        <input
                          className="form-control"
                          type="text"
                          name="tags"
                          defaultValue={tags}
                          onChange={(e) => setTags(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Company</label>
                        <input
                          className="form-control"
                          type="text"
                          name="company"
                          defaultValue={company}
                          onChange={(e) => setCompany(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Location</label>
                        <input
                          className="form-control"
                          type="text"
                          name="location"
                          defaultValue={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          defaultValue={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Website Link</label>
                        <input
                          className="form-control"
                          type="text"
                          name="website"
                          defaultValue={website}
                          onChange={(e) => setWebsite(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                          className="form-control"
                          name="description"
                          defaultValue={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <button
                          className="btn btn-success d-block w-100"
                          type="submit"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default GigEditForm;
