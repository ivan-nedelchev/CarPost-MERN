import User from "../models/User.js";

export default {
    async register(username, hashedPassword) {
        const isUserExist = await User.findOne({ username });
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
            const comparedPassword = await user.comparePassword(password);
            if (comparedPassword) {
                return user;
            }
        } else {
            return null;
        }
    }
}

