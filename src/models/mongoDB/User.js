import {mongoose} from "mongoose"
const UserSchema = new mongoose.Schema(
    {
        fullName: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true}
    },
    { timestamps: true }
)

UserSchema.set("toJSON", {
    transform(doc, ret) {
        delete ret.password
    }
})

const User = mongoose.model('User', UserSchema)
export default User