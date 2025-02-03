import { NodeProvider } from './node-provider'
import { Horizon } from '@stellar/stellar-sdk'

export class StellarNodeProvider implements NodeProvider {
  private server: Horizon.Server

  constructor() {
    this.server = new Horizon.Server('https://horizon-testnet.stellar.org', {
      allowHttp: true,
    })
  }

  async getTransaction(transactionHash: string) {
    try {
      const transaction = await this.server
        .transactions()
        .transaction(transactionHash)
        .call()
      return transaction
    } catch (error) {
      console.error(`Error fetching transaction: ${error}`)
      throw new Error(`Error fetching transaction: ${error}`)
    }
  }

  async getBalance(address: string) {
    try {
      const account = await this.server.accounts().accountId(address).call()
      return account
    } catch (error) {
      console.error(`Error fetching balance: ${error}`)
      throw new Error(`Error fetching balance: ${error}`)
    }
  }

  async getBlock(blockHeight: number) {
    try {
      const block = await this.server.ledgers().ledger(blockHeight).call()
      return block
    } catch (error) {
      console.error(`Error fetching block: ${error}`)
      throw new Error(`Error fetching block: ${error}`)
    }
  }
}
