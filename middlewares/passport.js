import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import Users from "../models/User.js";

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET
    },
    async (jwt_payload, done) => {
      try {
        
        let user = await Users.findOne({ email: jwt_payload.email });

        if (user) {
          return done(null, user);
        } else {
          return done(null, false); n
        }
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

export default passport;
