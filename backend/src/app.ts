import fastify from 'fastify'
import { ZodError } from 'zod'
import { routes } from './http/controllers/routes'

import { fastifyRateLimit } from '@fastify/rate-limit'

export const app = fastify()

app.register(fastifyRateLimit, {
  max: 100,
  timeWindow: '1 minute',
})

app.register(routes)

app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Validation error.',
      issues: error.format(),
    })
  }

  if (error.statusCode === 429) {
    reply.code(429)
    error.message = 'You hit the rate limit! Slow down please!'
  }

  console.error('🥶 Internal server error', error)

  return reply.status(500).send({ message: 'Internal server error.' })
})
