const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 4000 });

wss.on('connection', (ws) => {
  console.log('Новый клиент подключился.');

  ws.on('message', (message) => {
    console.log('Получено сообщение:', message);
    // Отправляем сообщение всем подключённым клиентам, кроме отправителя
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.send('Добро пожаловать в чат поддержки!');
});

console.log('WebSocket сервер запущен на ws://localhost:4000');
