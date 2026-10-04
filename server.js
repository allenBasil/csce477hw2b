const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Server-side validation
    if (!email || !password) {
        return res.status(400).send("Server Error: Missing fields.");
    }
    if (!email.includes('@')) {
        return res.status(400).send("Server Error: Invalid email format.");
    }
    if (password.length < 8) {
        return res.status(400).send("Server Error: Password too short.");
    }

    res.send("Server Validation Passed: Login successful!");
});

app.listen(3000, () => console.log('Server running on port 3000'));