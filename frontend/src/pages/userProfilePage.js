import React, { useContext } from "react";
import { Context } from "../index";
import UserNavbar from "./userNavbar";
function UserProfilePage(){
const {user}=useContext(Context)
    return(<>
    <UserNavbar />
    <div className="card">
        <h1>
        {user.name}
        </h1>
        <p>{user.email}</p>
        <p>{user.branch}</p>
        </div>
    </>)

}

export default UserProfilePage

