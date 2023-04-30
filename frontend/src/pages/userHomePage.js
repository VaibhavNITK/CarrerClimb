import React, { useEffect, useState } from "react";
import UserNavbar from "./userNavbar";
import axios from "axios";

function UserHomePage(){
    const [posts, setPosts] = useState([]);
    const url="http://localhost:4000/api/v1/company/all"

    const fetchPost = async () => {
        try {
            const response = await axios.get(url, {
                withCredentials: true
            });
            setPosts(response.data.companies);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <>
            <UserNavbar />
            <h1>Welcome User</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Industry</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((company, index) => (
                        <tr key={index}>
                            <td>{company.name}</td>
                            <td>{company.description}</td>
                            <td>{company.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default UserHomePage;
