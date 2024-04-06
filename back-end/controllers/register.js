import auth from '../services/auth.js'
import bcrypt from 'bcrypt';

export async function registerController(req, res) {
    const { username, password } = req.body;
    const bcryptSalt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
    try {
        const user = await auth.register(username, hashedPassword);
        if (user == null) {
            throw new Error('Username already exists');
        } 
        req.session.user = JSON.stringify({ username });
        res.json({ username });
    } catch (err) {
        console.log('Error registering user:', err);
    }
}

