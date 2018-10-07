const {Request, validate} = require('../models/request'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const request = new Request({ 
    contactName: req.body.contactName,
    detail: req.body.detail,
    phone: req.body.phone,
    status: req.body.status,
    time: req.body.time,
    title: req.body.title,
    userId: req.body.userId
  });
  await request.save();
  
  res.send(request);
});


router.get('/:id', async (req, res) => {
  const request = await Request.findById(req.params.id);

  if (!request) return res.status(404).send('The request with the given ID was not found.');

  res.send(request);
});

module.exports = router; 