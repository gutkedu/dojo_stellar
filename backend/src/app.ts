import fastify from 'fastify'
import { ZodError } from 'zod'
import { routes } from './http/controllers/routes'

import { fastifyRateLimit } from '@fastify/rate-limit'
import { IntegrationError } from './use-cases/errors/integration-error'

export const app = fastify()

app.register(fastifyRateLimit, {
  max: 100,
  timeWindow: '1 minute',
})

app.register(routes)

app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    console.log('Validation error', error)
    return reply.status(400).send({
      message: 'Validation error.',
      issues: error.format(),
    })
  }

  if (error.statusCode === 429) {
    return reply.status(429).send({ message: 'Too many requests.' })
  }

  if (error instanceof IntegrationError) {
    console.log('Integration error', error)
    return reply.status(400).send({ message: error.message })
  }

  console.error('🥶 Internal server error', error)

  return reply.status(500).send({ message: 'Internal server error.' })
})
