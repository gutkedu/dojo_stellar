import { NodeProvider } from '@/providers/node-provider'

interface Input {
  address: string
}

export class GetBalanceUseCase {
  constructor(private nodeProvider: NodeProvider) {}

  async execute({ address }: Input) {
    const balance = await this.nodeProvider.getBalance(address)

    return {
      balance,
    }
  }
}
