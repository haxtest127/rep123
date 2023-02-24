"use client"

import { useEffect } from "react";
import globalUser from "../hooks/globaluser"
import { IUser } from "../Models/User";



export const UserDisplay = () => {
    
    const user: IUser | null = globalUser.user;

    useEffect(() => {
        if(user == null){
            window.location.replace("/")
        }
    }, [])

    if(user == null){
        return <h1>Not logged in</h1>
    }

    return(
        <div className="flex flex-col">
            <div>{user._id}</div>
            <div>{user.username}</div>
            <div>{user.password}</div>
            <div>{user.address1}</div>
            {user.address2 ? <div>{user.address2}</div> : <></>}
            <div>{user.city}</div>
            <div>{user.state}</div>
            <div>{user.zipcode}</div>
        </div>
    )
}