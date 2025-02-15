import { IntegrationError } from '@/shared/errors/integration-error'
import { NodeProvider } from './node-provider'
import { Horizon, Keypair } from '@stellar/stellar-sdk'
import { KeyPairOutput } from './node-provider-dtos'

export class StellarNodeProvider implements NodeProvider {
  private server: Horizon.Server

  constructor() {
    this.server = new Horizon.Server('https://horizon-testnet.stellar.org', {
      allowHttp: true,
    })
  }
  generateKeyPair(): KeyPairOutput {
    try {
      const pair = Keypair.random()
      return {
        publicKey: pair.publicKey(),
        secret: pair.secret(),
      }
    } catch (error) {
      console.error(error)
      throw new IntegrationError('Stellar Node Provider: generateKeyPair')
    }
  }
  fetchBalance(publicKey: string): Promise<number> {
    throw new Error('Method not implemented.')
  }
  sendXlm(): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
