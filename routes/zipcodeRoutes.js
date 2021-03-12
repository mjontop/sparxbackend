const express = require('express');
const Zipcode = require('../models/Zipcodemodel');
const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const zipcode = await Zipcode.findOne({ where: { zip: req.params.id }, raw:true });
    if (!zipcode) return res.send({ error: 'Invalid Zipcode' });
    for (var key in zipcode) {
      if (!zipcode[key]) {
        zipcode[key] = 'NA';
      }
    }
    return res.send(zipcode);
  } catch (ex) {
    return res.send({ sucess: false, error: ex });
  }
});

module.exports = router;
