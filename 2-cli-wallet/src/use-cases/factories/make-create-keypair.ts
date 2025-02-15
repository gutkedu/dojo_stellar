import { StellarNodeProvider } from '@/providers/stellar-node-provider'
import { CreateKeyPairUseCase } from '../create-keypair'

export function makeCreateKeyPairUseCase() {
  const node = new StellarNodeProvider()
  return new CreateKeyPairUseCase(node)
}
