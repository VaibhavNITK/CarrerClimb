import React, { useEffect, useState, useContext } from "react";
import UserNavbar from "./userNavbar";
import axios from "axios";
import { Context } from "../index";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
function UserHomePage() {
  const [posts, setPosts] = useState([]);
  const { isAuthenticated, loading, user } = useContext(Context);
  const [applied, setApplied] = useState([]);

  const fetchPost = async () => {
    try {
      console.log(isAuthenticated)
      const response = await axios.get("http://localhost:4000/api/v1/company/all", {
        withCredentials: true,
      });
      setPosts(response.data.companies);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const clickHandler = async (event, id) => {
    event.stopPropagation();
    try {
      const {data} = await axios.put(`http://localhost:4000/api/v1/company/${id}`, {},{
        withCredentials: true,
      });
    //   console.log(response.data);
      toast.success(data.message);
      setApplied((prevState) => [...prevState, id]);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  if (!isAuthenticated) return <Navigate to={"/userLogin"} />;
  
  return (
    <>
      <UserNavbar />
      <div className="container">
        <h1>Welcome {user.name}</h1>
        <div className="card-container">
          {posts.map((company) => {
            if (company.active) {
              const alreadyApplied = applied.includes(company._id);
              const deadlineDate = new Date(company.timeline).toLocaleDateString();
              return (
                <div key={company._id} className="card">
                  <div className="card-body">
                    <h5 className="card-title">{company.name}</h5>
                    <p className="card-text">{company.description}</p>
                    <div className="card-text-row">
                      <p className="card-text">
                        <strong>Role:</strong> {company.role}
                      </p>
                      <p className="card-text">
                        <strong>Branch required:</strong> {company.branch}
                      </p>
                      <p className="card-text">
                        <strong>Deadline:</strong> {deadlineDate}
                      </p>
                    </div>
                    <button
                      className="btn btn-primary"
                      onClick={(event) => clickHandler(event, company._id)}
                      disabled={alreadyApplied}
                    >
                      {alreadyApplied ? "Applied" : "Apply"}
                    </button>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
}

export default UserHomePage;



