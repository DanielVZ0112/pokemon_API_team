const express = require('express');

const router = express();

router.get('/usuarios', (req, res) => {
  // Get complete list of users
  const usersList = [];

  // Send the usersList as a response to the client
  res.send("pokemon guardado");
});

module.exports = router;