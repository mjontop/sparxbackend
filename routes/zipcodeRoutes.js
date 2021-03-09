const express = require('express');
const Zipcode = require('../models/Zipcodemodel');
const router = express.Router();

router.get('/:id', async (req, res) => {
  const zipcode = await Zipcode.findOne({ where: { zip: req.params.id } }, { raw: true });
  return res.send(zipcode);
});

module.exports = router;
