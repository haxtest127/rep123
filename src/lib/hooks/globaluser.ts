import { IUser } from "../Models/User";

interface GlobalUser {
    user: IUser | null,
    quotes: number
}

const globalUser: GlobalUser = { user: null, quotes: 0 }

export default globalUser