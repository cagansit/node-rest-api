// Models will be here
const User = require('../models/User');

exports.handleData = (req, res) => {
    res.send('Handle data');
};

exports.sayHi = (req, res) => {
    res.send('Hi');
}