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

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.get('/countries', (req, res) => {   
    res.send(countries); 
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});