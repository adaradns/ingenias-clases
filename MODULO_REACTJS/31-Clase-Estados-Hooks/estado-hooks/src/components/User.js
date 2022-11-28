import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const User = () => {

    const [users, setUsers] = useState(null);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((response) => setUsers(response));
    }, [])


    return(
        <>
        {users !== null ? 
        
            users.map((user) => {
                return  <UserCard
                            key = {user.id} 
                            nombre = {user.nombre}
                            username = {user.username}
                            web = {user.web}
                        />
            })
            :
            <p>No se encontro ningun usuario.</p>
        }
        </>
    );
}

export default User;