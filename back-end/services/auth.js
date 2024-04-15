import User from "../models/User.js";
import bcrypt from 'bcrypt'
const bcryptSalt = bcrypt.genSaltSync(10);
export default {
    async register(username, password) {
        const isUserExist = await User.findOne({ username });
        const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
        if (!isUserExist) {
            const user = new User({
                username,
                hashedPassword
            });
            return await user.save();
        } else {
            return null;
        }
    },
    async login(username, password) {
        const user = await User.findOne({ username });
        if (user) {
            let comparedPassword = bcrypt.compareSync(password, user.hashedPassword)
            if (comparedPassword) {
                return user;
            }
        } else {
            return null;
        }
    }
}

