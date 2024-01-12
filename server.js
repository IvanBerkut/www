const express = require('express');
const cors = require('cors');

const app = express();
const config = require('./config');
const products = require('./data/products');

app.use(cors(config.cors));

app.get('/api/products', (req, res) => {
    const randomized = products.data.slice(0).sort(() => (0.5 - Math.random()));
    res.json({
        meta: products.meta,
        data: randomized.slice(0, 5),
    });
});

app.listen(config.port, () => {
    console.log('Server started!');
    console.log('Access URL:');
    console.log('\n-----------------------------------');
    console.log(`http://localhost:${config.port}`);
    console.log('-----------------------------------');
    console.log('\nPress CTRL-C to stop');
});