import auth from '../../services/auth.js'

export async function loginController(req, res) {
    const { username, password } = req.body;
    try {
        const user = await auth.login(username, password);
        if (user == null) {
            throw new Error('Incorrect username or password');
        }
        req.session.user = JSON.stringify({ 
            username, 
            id: user._id 
        });
        res.json({ 
            username, 
            id: user._id 
        });
    } catch (err) {
        console.log('Error user login:', err);
    }
}
