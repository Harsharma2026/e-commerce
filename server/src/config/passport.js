import { JWT_SECRET } from '@/config/config'
import { User } from '@/models/user.model'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import { Strategy as AnonymousStrategy } from 'passport-anonymous'
export const jwtStrategy = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET,
  },
  async (payload, done) => {
    try {
      const user = await User.findById(payload.id)
      if (!user) return done(null, false)
      done(null, user.toJSON())
    } catch (e) {
      return done(e)
    }
  },
)

export const anonymousStrategy = new AnonymousStrategy()