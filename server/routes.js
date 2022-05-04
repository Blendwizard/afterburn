const database = require('./database/index.js');

const router = require('express').Router();

router.get('/', (req, res) => {
  database.test();
  res.sendStatus(200)
})


module.exports = router;