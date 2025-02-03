import { StellarNodeProvider } from '@/providers/stellar-node-provider'
import { GetBlockUseCase } from '../get-block'

export function makeGetBlockUseCase() {
  const nodeProvider = new StellarNodeProvider()
  return new GetBlockUseCase(nodeProvider)
}
