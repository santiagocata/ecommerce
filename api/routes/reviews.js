const express = require("express");
const router = express.Router();

const  Reviews  = require("../models/Reviews");
const Users = require("../models/Users")

router.post("/", (req, res, next) => {
  Reviews.create(req.body)
    .then((newReview) => {
      res.status(201).send(newReview);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
    Reviews.findAll({where:{productId: req.params.id}, include: [{model: Users, as: 'user'}] } )
      .then((reviews) => res.status(200).send(reviews))
      .catch(next);
  });

 


router.get("/", (req, res, next) => {
    Reviews.findAll({include: [{model: Users, as: 'user'}]})
      .then((reviews) => res.status(200).send(reviews))
      .catch(next);
  });

module.exports = router;