import mongoose, { Model, model, Schema } from "mongoose"

export interface IUser extends Document {
    username: string
    password: string
    fullname: string
    address1: string
    address2?: string
    city: string
    state: string
    zipcode: string
    _id?: string
    __v?: number
}


const UserSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        maxlength: 50
    },
    fullname: {
        type: String,
        required: true,
        maxlength: 50
    },
    address1: {
        type: String,
        required: true,
        maxlength: 100
    },
    address2: {
        type: String,
        required: false,
        maxlength: 100
    },
    city: {
        type: String,
        required: true,
        maxlength: 100
    },
    state: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 2
    },
    zipcode: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 9
    }
})

export const User = (mongoose.models.User || model('User', UserSchema)) as Model<IUser>