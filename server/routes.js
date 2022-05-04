const router = require('express').Router();

router.get('/', (req, res) => {
  console.log("Hitting");
  res.sendStatus(200)
})


module.exports = router;