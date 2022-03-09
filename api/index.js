const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");

const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth").Strategy;
const GithubStrategy = require("passport-github2").Strategy;

const db = require("./config/db");
const { Users } = require("./models");
const authUser = require("./utils/authUser");

const routes = require("./routes");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

//Initialize Middleware
app.use(
  session({
    secret: "reactsport",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

///Authentification Strategies
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    authUser
  )
);
///Serialize and de-serialize auth user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await Users.findByPk(id);
  done(null, user);
});

//// APProutes and DB.SYNC
app.use("/", routes);

const PORT = process.env.PORT || 3001;

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening ON ${PORT}`));
});
