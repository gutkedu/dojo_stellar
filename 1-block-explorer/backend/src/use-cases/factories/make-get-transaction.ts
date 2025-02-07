import { StellarNodeProvider } from '@/providers/stellar-node-provider'
import { GetTransactionUseCase } from '../get-transaction'

export function makeGetTransactionUseCase() {
  const nodeProvider = new StellarNodeProvider()
  return new GetTransactionUseCase(nodeProvider)
}
