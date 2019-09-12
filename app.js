const log = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');
const http = require('http');

const EventEmitter = require('events');
const emitter = new EventEmitter();
const Logger = require('./logger');
const logger = new Logger();

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});
server.on('connection', (socket) => {
    console.log('New connection...')
});
server.listen(3000);

console.log('Listening on port 3000...')

//Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called: ', arg);
})

//Raise an event
logger.emit('messageLogged', {id: 1, url: 'http://' });

//Raise: logging (data: message)

let pathObj = path.parse(__filename);

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

//const files = fs.readdirSync('./');

fs.readdir('./', (err, files) => {
    if (err) console.log('Error ', err);
    else console.log('Result ', files);
})

//Template script (ES6 / ES2015)

// log(`Total Memory: ${totalMemory}`);
// log(`Free Memory: ${freeMemory}`);
// log('message')