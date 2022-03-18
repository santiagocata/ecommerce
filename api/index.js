const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");

const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;

const db = require("./config/db");
const { Users } = require("./models");
const authUser = require("./utils/authUser");

const routes = require("./routes");

const app = express();

const GOOGLE_CLIENT_ID =
  "538504340778-cgsb8ame44vrec263dna98jrbegd9536.apps.googleusercontent.com";

const GOOGLE_CLIENT_SECRET = "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";

const FACEBOOK_APP_ID = "1171125987036152";
const FACEBOOK_APP_SECRET = "8237afbe685484be70bed073f82db05d";

const GITHUB_CLIENT_ID = "Iv1.a83a0ea30be6ae75";
const GITHUB_CLIENT_SECRET = "30bd12dad30fb79ee5cb453a7ccfd35b18409d3d";

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
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/login/google/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      const user = await Users.findOne({
        where: { email: profile.emails[0].value },
      });
      if (user) {
        return done(null, user);
      }
      if (!user) {
        const newUser = await Users.create({
          email: profile.emails[0].value,
          name: profile.name.givenName,
          lastName: profile.name.familyName,
          password: profile.id,
          address: "",
        });
        return done(null, newUser);
      }
      return done(null, false);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:3001/login/facebook/callback",
      profileFields: [
        "id",
        "displayName",
        "email",
        "first_name",
        "middle_name",
        "last_name",
      ],
    },
    async function (accessToken, refreshToken, profile, done) {
      const user = await Users.findOne({
        where: { email: profile.emails[0].value },
      });
      if (user) {
        return done(null, user);
      }
      if (!user) {
        const newUser = await Users.create({
          email: profile.emails[0].value,
          name: profile.name.givenName,
          lastName: profile.name.familyName,
          password: profile.id,
          address: "",
        });
        return done(null, newUser);
      }
      return done(null, false);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/login/github/callback",
      profileFields: ["email"],
    },
    async function (request, accessToken, refreshToken, profile, done) {
      console.log(profile);
      const user = await Users.findOne({
        where: { email: profile.emails[0].value },
      });
      if (user) {
        return done(null, user);
      }
      if (!user) {
        const newUser = await Users.create({
          email: profile.emails[0].value,
          name: profile.name.givenName,
          lastName: profile.name.familyName,
          password: profile.id,
          address: "",
        });
        return done(null, newUser);
      }
      return done(null, false);
    }
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
