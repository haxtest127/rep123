import { IQuote } from "../Models/Quote";

export const SubmitQuote = async (quote: IQuote) => {
    
    const res = await fetch("/api/quote",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(quote)
    })

    return res.ok
}