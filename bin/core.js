#!/usr/bin/env node

/*
 * This is the core file that initiate server and serves.
 */

// Module dependencies
const app = require('../app');
const debug = require('debug')('myapp:server');
// const http = require('http');

// Get Port
// const server = http.createServer(app);  // Needs to decide if we use this or not.
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Create Http Server.
app.listen(port);
app.on('error', showError);
app.on('listening', debugListening);

//Helper Functions
function normalizePort(value) {
    const port = parseInt(value, 10);

    if (isNaN(port)) {
        return value;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

function showError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.log(bind + ' requries elevated privilages');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.log(bind + ' port already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function debugListening() {
    const address = app.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : ' port ' + address.port;

    debug('Listening on:' + bind);
}
