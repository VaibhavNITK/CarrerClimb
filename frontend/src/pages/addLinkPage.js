import React, { useState, useContext } from "react";
import UserNavbar from "./userNavbar";
import { toast } from "react-hot-toast";
import { Context } from "../index.js";
import axios from "axios";

function AddLinkPage() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const { user } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/link/new",
        {
          user: user._id,
          name: name,
          link: url,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setName("");
      setUrl("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <UserNavbar />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="url" className="form-label">
              URL
            </label>
            <input
              type="text"
              className="form-control"
              id="url"
              name="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddLinkPage;
