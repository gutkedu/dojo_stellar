import { StellarNodeProvider } from '@/providers/stellar-node-provider'
import { CheckBalanceUseCase } from '../check-balance'

export function makeCheckBalanceUseCase() {
  const node = new StellarNodeProvider()
  return new CheckBalanceUseCase(node)
}
