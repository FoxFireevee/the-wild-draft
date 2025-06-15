const express = require('express');
const server = express();

server.use(express.json());
server.use((error, req, res) => {
    res.status(error.status || 500).json({ message: error.message });
});

server.use('*', (req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

module.exports = server;