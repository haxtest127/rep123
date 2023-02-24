import { ObjectId } from "mongodb"
import mongoose, { Date, model, Model, Number, Schema } from "mongoose"

export interface IQuote extends Document {
    userid: ObjectId
    gallonsrequested: number
    deliveryaddress: string
    deliverydate: Date
    suggestedpricepergallon: number
    totalamountdue: number
}

const QuoteSchema = new Schema<IQuote>({
    userid: { type: ObjectId },
    gallonsrequested: { type: Number, required: true },
    deliveryaddress: { type: String, required: true },
    deliverydate: { type: Date, required: true },
    suggestedpricepergallon : { type: Number, required: true },
    totalamountdue: { type: Number, required: true }
})

export const Quote = (mongoose.models.Quote || model('Quote', QuoteSchema)) as Model<IQuote>