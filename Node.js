// server.js (simple proxy in Node.js using Express)
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/proxy', async (req, res) => {
    const url = req.query.url;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
});

app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
