const express = require("express");
const router = express.Router();
const passport = require("passport");

const { Users } = require("../models");

router.post("/signin", async (req, res, next) => {
  const { email, password, name, lastName, address } = req.body;
  try {
    const controlWasRegistered = await Users.findAll({ where: { email } });
    if (controlWasRegistered[0]) {
      res.status(400).send("email already in use");
    } else {
      const newUser = await Users.create({
        email,
        password,
        name,
        lastName,
        address,
      });
      res.status(201).send(newUser);
    }
  } catch (error) {
    console.error(error);
  }
});

router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res, next) => {
    try {
      res.status(200).send(req.user);
    } catch (error) {
      console.error(error);
    }
  }
);

router.post(
  "/login/facebook",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  (req, res, next) => {
    try {
      res.status(200).send(req.user);
    } catch (error) {
      console.error(error);
    }
  }
);

router.post(
  "/login/google",
  passport.authenticate("google", {
    failureRedirect: "/login",
    failureMessage: true,
  }),
  (req, res, next) => {
    try {
      res.status(200).send(req.user);
    } catch (error) {
      console.error(error);
    }
  }
);

router.post(
  "/login/github",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req, res, next) => {
    try {
      res.status(200).send(req.user);
    } catch (error) {
      console.error(error);
    }
  }
);

router.post("/logout", (req, res, next) => {
  try {
    req.logOut();
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
});

///Check if the user is login
router.get("/wasLogged", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.send(req.user);
});

module.exports = router;
