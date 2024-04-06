export async function logoutController(req, res) {
    req.session.destroy(err => {
        console.log('destroying session');
        if (err) {
            console.error('Error destroying session:', err);
            res.sendStatus(500); // Server error
        } else {
            console.log('clearing cookie');
            res
                .clearCookie('connect.sid', { path: '/', domain: 'localhost' })
                .send()
        }
    });
}


