const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('🔌 Client connected');
  ws.send('👋 Hello from server!');

  ws.on('message', (message) => {
    console.log(`📨 Received: ${message}`);
    ws.send(`🪞 Echo: ${message}`);
  });

  ws.on('close', () => {
    console.log('❌ Client disconnected');
  });
});

app.get('/', (req, res) => {
  res.send('✅ WebSocket server is running');
});

server.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
