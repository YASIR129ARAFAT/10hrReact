import React from "react";
import { useParams } from "react-router-dom";

function UserData(){
    const {username} = useParams();
    return(
        <h1 className="text-center text-3xl text-orange-800">username: {username}</h1>
    )
}

export default UserData;