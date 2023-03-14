const app = require('./app');

app.get('/', (req, res) => res.status(200).json({ message: 'request recebido' }));
