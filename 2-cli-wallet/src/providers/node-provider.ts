import { KeyPairOutput } from './node-provider-dtos'

export interface NodeProvider {
  generateKeyPair(): KeyPairOutput
  fetchBalance(publicKey: string): Promise<number>
  sendXlm(): Promise<void>
}
