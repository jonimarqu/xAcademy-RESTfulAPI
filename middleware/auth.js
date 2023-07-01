const SERVER_SECRET = "secretPhrase";

const passport = require("passport");
const passportJwt = require("passport-jwt");
const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: SERVER_SECRET,
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    }
  )
);

const jwtValidMdw = passport.authenticate("jwt", { session: false }); 

const userIsAdminMdw = (req, res, next) => {
  return passport.authenticate("jwt", { session: false }, (err, user) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (user.name === "admin") {
      req.user = user;
      return next();
    }
    res.status(401).json({ error: "User not Admin." });
  })(req, res);
};

module.exports = { SERVER_SECRET, jwtValidMdw, userIsAdminMdw };
