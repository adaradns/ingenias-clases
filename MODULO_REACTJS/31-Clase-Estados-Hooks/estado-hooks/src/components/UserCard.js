import React from "react";

const UserCard = (props) => {
    return(
        <div className="user-card">
            <h1>{props.nombre}</h1>
            <p>{props.username}</p>
            <p>{props.web}</p>
        </div>
    );
}

export default UserCard;
