import { StellarNodeProvider } from '@/providers/stellar-node-provider'
import { GetBalanceUseCase } from '../get-balance'

export function makeGetBalanceUseCase() {
  const nodeProvider = new StellarNodeProvider()
  return new GetBalanceUseCase(nodeProvider)
}
