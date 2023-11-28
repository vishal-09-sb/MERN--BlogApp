import mongoose, { Mongoose } from "mongoose";

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required:  true
    },
    username: {
        type: String,
        required:  true,
        usnique: true
    },
    password: {
        type: String,
        required:  true
    }
})

const user = mongoose.model('user', userSchema);

export default user;