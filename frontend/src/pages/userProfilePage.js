import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import UserNavbar from "./userNavbar";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function UserProfilePage() {
  const { user } = useContext(Context);
  const [skills, setSkills] = useState([]);
  const [links, setLinks] = useState([]);
  const navigate = useNavigate();

  const fetchSkills = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/skills/all", {
        withCredentials: true,
      });
      console.log(response.data);
      setSkills(response.data.skills);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchLinks = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/link/all", {
        withCredentials: true,
      });
      console.log(response.data);
      setLinks(response.data.links);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSkills();
    fetchLinks();
  }, []);

  const handleAddSkill = (e) => {
    e.stopPropagation();
    navigate("/userSkill");
  };

  const handleDeleteSkill = async (skillId) => {
    try {
      const { data } = await axios.delete(`http://localhost:4000/api/v1/skills/delete/${skillId}`, {
        withCredentials: true,
      });
      toast.success(data.message);
      fetchSkills();
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const handleAddLink = () => {
    navigate("/userLink");
  };

  const handleDeleteLink = async (linkId) => {
    try {
      const { data } = await axios.delete(`http://localhost:4000/api/v1/link/delete/${linkId}`, {
        withCredentials: true,
      });
      toast.success(data.message);
      fetchLinks();
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <>
      <UserNavbar />
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Name:</h1>
          <p className="card-text">{user.name}</p>

          <h1 className="card-title">Email:</h1>
          <p className="card-text">{user.email}</p>

          <h1 className="card-title">Branch:</h1>
          <p className="card-text">{user.branch}</p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h1>Skills:</h1>
          {skills.map((skill) => {
            if (skill.user === user._id) {
              return (
                <div className="card" key={skill._id}>
                  <div className="card-body">
                    <h5 className="card-title">{skill.name}</h5>
                    <p className="card-text">{skill.description}</p>
                    <p className="card-text">Proficiency: {skill.levelOfProficiency}</p>
                    <p className="card-text">Experience: {skill.yearsOfExperience} years</p>
                    <button className="btn btn-danger float-end" onClick={() => handleDeleteSkill(skill._id)}>
                      Delete Skill
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
          <button className="btn btn-primary" onClick={handleAddSkill}>
            Add Skill
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h1>Links:</h1>
          {links.map((link) => {
            if (link.user === user._id) {
              return (
                <div className="card" key={link._id}>
                  <div className="card-body">
                    <h5 className="card-title">{link.name}</h5>
                    <a href={link.link} className="card-link" target="_blank" rel="noopener noreferrer">
                      {link.link}
                    </a>
                    <button className="btn btn-danger float-end" onClick={() => handleDeleteLink(link._id)}>
                      Delete Link
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
          <button className="btn btn-primary" onClick={handleAddLink}>
            Add Link
          </button>
        </div>
      </div>
    </>
  );
}

export default UserProfilePage;




