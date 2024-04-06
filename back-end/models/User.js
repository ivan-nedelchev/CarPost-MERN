import { Schema, Types, model } from 'mongoose';
const { ObjectId } = Types;
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
const User = model('User', userSchema);
export default User;