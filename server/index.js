const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;

const countries = [
    {
        name: 'India',
        code: 'IN'
    },
    {
        name: 'USA',
        code: 'US'
    },
    {
        name: 'China',
        code: 'CN'
    },
    {
        name: 'Japan',
        code: 'JP'
    },
    {
        name: 'Korea',
        code: 'KR'
    },
    {
        name: 'Russia',
        code: 'RU'
    },
    {
        name: 'Germany',
        code: 'DE'
    },
    {
        name: 'France',
        code: 'FR'
    },
    {
        name: 'Brazil',
        code: 'BR'
    },
    {
        name: 'Italy',
        code: 'IT'
    },
    {
        name: 'Spain',
        code: 'ES'
    },
]

const users = [
    {
        name: 'Johndoe',
        username: 'jondoeeeee',
        email: 'doe@gmail.com',
        password: 'hjemssk',
        gender: 'male',
        country: 'Yankee'
        
    },
    {
        name: 'Whitney',
        username: 'whitneyyyy5',
        email: 'whit@gmail.com',
        password: 'hjrkefdcj',
        gender: 'female',
        country: 'USA'
    },
    {
        name: 'Joel',
        username: 'joejoe',
        email: 'joe@gmail.com',
        password: 'hjsedwsxfdcj',
        gender: 'male',
        country: 'Senegal'
    }
]
    
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());
app.get('/countries', (req, res) => {   
    res.send(countries); 
});

app.post('/login', (req, res) => {
    console.log('i got here');
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.send(user);
    } else {
        res.status(401).send({message: 'Invalid username or password' });
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});