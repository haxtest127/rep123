import { IUser, User } from "@/lib/Models/User";
import { connectToDatabase } from "@/lib/mongodb";
import { createHash } from "crypto";
import Validate from "next-api-validation";


connectToDatabase()


const userHandler = Validate({
    async get(req, res){
        try{
            
            const unhashedPwd: string = req.body.unhashedPwd;
            const username: string = req.body.username;

            const hashedPwd = createHash('sha1').update(unhashedPwd).digest('hex')

            const user = await User.findOne({ username: username, password: hashedPwd })
            
            if(user == null){
                res.status(404).send("Username or Password Incorrect")
                return
            }
            
            res.json(user);
        } catch (err) {
            console.error(err)
            res.status(500).send(err)
        }
    },
    async post(req, res) {
        try{
            
            const body: IUser = req.body;

            body.password = createHash('sha1').update(body.password).digest('hex')

            let user = await User.findOneAndUpdate({ username: body.username, password: body.password }, body)
            
            if(user == null){
                user = new User(body)
                user = await user.save()
            }
            
            res.json(user)

        } catch (err) {
            console.error(err)
            res.status(500).send(err)
        }
    },
    async delete(req, res) {
        const { id } = req.query;

        try {
            const deletedUser = await User.findByIdAndDelete(id)
            res.send(deletedUser)
        } catch (err) {
            res.status(500).send(err)
        }
    }
})

export default userHandler