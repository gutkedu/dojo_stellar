import { NodeProvider } from '@/providers/node-provider'

interface Input {
  transactionHash: string
}

export class GetTransactionUseCase {
  constructor(private nodeProvider: NodeProvider) {}

  async execute({ transactionHash }: Input) {
    const transaction = await this.nodeProvider.getTransaction(transactionHash)

    return {
      transaction,
    }
  }
}
