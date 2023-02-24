"use client"

import { IQuote } from "../Models/Quote";
import { QuoteDisplay } from "./quoteDisplay";

export function QuotesDisplay(quotes: IQuote[]) {

    
    return (
        <div>
            {quotes.map((quote, idx) => QuoteDisplay(quote, idx))}
        </div>    
    )
}