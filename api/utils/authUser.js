const { Users } = require("../models");

const authUser = async (email, password, done) => {
  const auth_user = await Users.findOne({ where: { email } });
  if (!auth_user) return done(null, false);
  const hashedPassword = await auth_user.hash(password, auth_user.salt);
  if (hashedPassword !== auth_user.password) return done(null, false);
  return done(null, auth_user);
};

module.exports = authUser;
