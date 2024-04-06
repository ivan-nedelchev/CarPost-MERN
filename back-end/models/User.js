import { Schema, Types, model } from 'mongoose';
const { ObjectId } = Types;
// import { hashPassword, comparePassword }from '../utils/auth.js';
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    posts: {
        type: [ObjectId],
        ref: 'Car',
        default: []
    }
});
userSchema.index(
    { username: 1 },
    {
        unique: true,
        collation: {
            locale: 'en',
            strength: 2
        }
    }
);
// userSchema.pre('save', async function (next) {
//     if (this.isModified('hashedPassword')) {
//         const password = this.hashedPassword;
//         this.hashedPassword = await hashPassword(password);
//     }
//     next();
// });
userSchema.methods.comparePassword = async function (password) {
    const hashedPassword = this.hashedPassword;
    const comparedPasswords = await comparePassword(password, hashedPassword);
    return comparedPasswords;
}
const User = model('User', userSchema);
export default User;