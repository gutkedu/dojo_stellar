import { z } from 'zod'
import 'dotenv/config'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  STELLAR_NODE_SERVER: z
    .string()
    .default('https://horizon-testnet.stellar.org'),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('🥶 Invalid environment variables', _env.error.format())
  throw new Error('Invalid environment variables')
}

export const env = _env.data
