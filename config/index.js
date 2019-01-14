if (process.env.ENVIRONMENT === 'prod') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}