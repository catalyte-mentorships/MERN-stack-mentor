const express = require('express');
const app = express();

// my modules
const { SERVER_PORT } = require('./config/server_config');
const routes = require('./routes/api/routes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('./client/public'));
app.use('/api/routes', routes);

const server = app.listen(SERVER_PORT, () => {
	console.log(`App listening on ${SERVER_PORT}`);
});

module.exports = server;
