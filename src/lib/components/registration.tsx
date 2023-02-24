"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import globalUser from "../hooks/globaluser";
import { Register } from "../hooks/registration";
import { IUser } from "../Models/User";


export const Registration = () => {
    
    const [values, setValues] = useState<any>()

    const router = useRouter()


    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {

        const user: IUser = {...values, [event.target.name] : event.target.value}

        setValues(user);
    }

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()

        globalUser.user = await Register(values);

        console.log(globalUser.user)

        if(globalUser.user == null){
            alert("Failed to Create or Update User!")
        } else {
            router.push("/quote")
        }
    };
    
    return (
        <div>
            <form onSubmit={onSubmit} className="flex flex-col w-1/3">
            <input 
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="username"
                type="text"
                placeholder="Username"/>
            <input
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="text"
                placeholder="Password"/>
            <input
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="fullname"
                name="fullname"
                type="text"
                placeholder="Full Name"/>
            <input
            onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="address1"
                name="address1"
                type="text"
                placeholder="First Address"/>
            <input 
            onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="address2"
                name="address2"
                type="text"
                placeholder="Second Address"/>
            <input 
            onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                name="city"
                type="text"
                placeholder="City"/>
            <input 
            onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="state"
                name="state"
                type="text"
                placeholder="State"/>
            <input 
            onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="zipcode"
                name="zipcode"
                type="text"
                placeholder="Zipcode"/>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}