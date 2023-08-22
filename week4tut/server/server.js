const express = require('express');
const app = express();
const PORT = 3000;
const storedUser = JSON.parse(sessionStorage.getItem('user'));


app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


class User {
    constructor(username, birthdate, age, email, password, valid) {
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.password = password;
        this.valid = valid;
    }
}

const users = [
    new User('user1', '01/01/2000', 23, 'user1@example.com', 'password1', false),
    new User('user2', '02/02/2001', 22, 'user2@example.com', 'password2', false),
    new User('user3', '03/03/2002', 21, 'user3@example.com', 'password3', false)
];

app.post('/api/auth', express.json(), (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        user.valid = true;
        res.json({
            username: user.username,
            birthdate: user.birthdate,
            age: user.age,
            email: user.email,
            valid: user.valid
        });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// ... the rest of the code ...
