var express = require('express');
var router = express.Router();
// Controllers
const TestController = require('../controllers/ExampleController');

/* GET home page. */
router.get('/', (req, res) => {
  res.send('Root');
});

router.get('/test', TestController.handleData);
router.get('/hi', TestController.sayHi);

module.exports = router;
