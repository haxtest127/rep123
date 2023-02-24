import { IQuote, Quote } from "@/lib/Models/Quote";
import { User } from "@/lib/Models/User";
import { connectToDatabase } from "@/lib/mongodb";
import Validate from "next-api-validation";

connectToDatabase()

const quoteHandler = Validate({
    async put(req, res){
        try{
            const quotes = await Quote.find({ userid: req.body })
            res.json(quotes);
        } catch (err) {
            console.error(err)
            res.status(500).send(err)
        }
    },
    async post(req, res) {
        try{
            const body: IQuote = req.body;

            const newQuote = new Quote(body)
            const saved = await newQuote.save()
            
            res.json(saved)
        } catch (err) {
            console.error(err)
            res.status(500).send(err)
        }
    },
    async delete(req, res) {
        const { id } = req.query;

        try {
            const deletedUser = await Quote.findByIdAndDelete(id)
            res.send(deletedUser)
        } catch (err) {
            res.status(500).send(err)
        }
    }
})

export default quoteHandler