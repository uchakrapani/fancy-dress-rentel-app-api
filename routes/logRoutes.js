const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/view-errors', (req, res) => {
    fs.readFile('logs/error.log', 'utf8', (err, data) => {
        if (err) return res.status(500).send('Could not read log file');
        res.send(`<pre>${data}</pre>`);
    });
});

module.exports = router;
