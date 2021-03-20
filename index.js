const app = require('./app')

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.end(`Server STARTED ${PORT}`));

app.listen(PORT, () => console.log('Server started'));