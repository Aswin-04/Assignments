import { Hono } from 'hono'
import { z } from 'zod'
import { decode, sign, verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { JWTPayload } from 'hono/utils/jwt/types'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'



const app = new Hono<{
  Bindings: {
    DATABASE_URL:string,
    JWT_SECRET:string
  },

  Variables: {
    userId: JWTPayload[string]
  }

}>()


app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);





export default app
