import { IQuote } from "../Models/Quote";

export function QuoteDisplay(quote: IQuote, idx: number)
{
    return( 
    <div key={idx}>
        <div>{quote.gallonsrequested}</div>
        <div>{quote.deliveryaddress}</div>
        <div>{JSON.stringify(quote.deliverydate)}</div>
        <div>{quote.suggestedpricepergallon}</div>
        <div>{quote.totalamountdue}</div>
    </div>
    )
}