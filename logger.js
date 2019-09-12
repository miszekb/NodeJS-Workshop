const EventEmitter = require('events');
const emitter = new EventEmitter();

let url = 'http://mylogger.io/log';

class Logger extends EventEmitter {

    log(message) {
        //Send an HTTP request
        console.log(message);
        this.emit('LOGGER MESSAGE', { id: 1, url: 'http://'});
    }

}

module.exports = Logger;
