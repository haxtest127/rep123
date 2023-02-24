"use client"

import { FormEvent, useEffect, useState } from "react";
import globalUser from "../hooks/globaluser";
import { PricePerGallon, TotalPrice } from "../hooks/pricing";
import { SubmitQuote } from "../hooks/quoteSubmit";
import { IQuote } from "../Models/Quote";


export const QuoteForm = (getQuotes: () => Promise<void>) => {
    
    const [values, setValues] = useState<any>()

    const handleChange = (event? : React.ChangeEvent<HTMLInputElement>) => {
        const quote: IQuote = event ? {...values, [event.target.name] : event.target.value} : values

        const { user, quotes } = globalUser

        if(user == null) return

        quote.suggestedpricepergallon = PricePerGallon(user, quotes, quote.gallonsrequested)
        quote.totalamountdue = TotalPrice(user, quotes, quote.gallonsrequested)

        setValues(quote);
    }


    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const ok = await SubmitQuote(values);

        if(!ok){
            alert("Failed to Create Quote!")
        } else {
            alert("Quote submitted successfully!")
            await getQuotes()
            handleChange()
        }
    };

    useEffect(() => {
        const { user } = globalUser;

        if(user == null) return
        

        setValues({ userid: user._id, deliveryaddress: user.address1 })
    }, [])
    
    return (
        <div>
            <form onSubmit={onSubmit} className="flex flex-col w-1/3">
            <input 
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="gallonsrequested"
                name="gallonsrequested"
                type="number"
                placeholder="gallonsrequested"/>
            <div>{values?.deliveryaddress}</div>
            <input
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="deliverydate"
                name="deliverydate"
                type="date"
                placeholder="deliverydate"/>
            
            <div>{values?.suggestedpricepergallon}</div>
            <div>{values?.totalamountdue}</div>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}