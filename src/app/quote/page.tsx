"use client"

import { QuoteForm } from "@/lib/components/quoteForm";
import { QuotesDisplay } from "@/lib/components/quotesDisplay";
import { UserDisplay } from "@/lib/components/userDisplay";
import { GetQuotes } from "@/lib/hooks/getQuotes";
import globalUser from "@/lib/hooks/globaluser";
import { IQuote } from "@/lib/Models/Quote";
import { useEffect, useState } from "react";


export default function QuotePage() {
    
    const [quotes, setQuotes] = useState<IQuote[]>([])

    const getQuotes = async () => {
        const newquotes = await GetQuotes()
        globalUser.quotes = newquotes.length

        setQuotes(newquotes)
    }

    useEffect(() => {
        getQuotes()
    }, [])

    return (
      <div>
            <UserDisplay/>
            {QuoteForm(getQuotes)}
            {QuotesDisplay(quotes)}
      </div>
    )
}