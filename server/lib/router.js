const express = require('express');
const exampleController = require('./controllers/example.controller');

const router = express.Router();

// Example routes
router.get('/example', exampleController.get);

// Ping
router.get('/ping', (_req, res) => {
  res.sendStatus(200)
})

module.exports = router;
