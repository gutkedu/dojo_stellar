import { FastifyInstance } from 'fastify'
import { getBlockController } from './get-block'
import { getTransactionController } from './get-transaction'
import { getBalanceController } from './get-balance'

export async function routes(app: FastifyInstance) {
  app.get('/block/:blockHeight', getBlockController)
  app.get('/transaction/:transactionHash', getTransactionController)
  app.get('/balance/:address', getBalanceController)
  app.get('/health', async () => {
    return { status: 'ok' }
  })
}
