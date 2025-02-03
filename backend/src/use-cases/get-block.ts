import { NodeProvider } from '@/providers/node-provider'

interface Input {
  blockHeight: number
}

export class GetBlockUseCase {
  constructor(private nodeProvider: NodeProvider) {}

  async execute({ blockHeight }: Input) {
    const block = await this.nodeProvider.getBlock(blockHeight)

    return {
      block,
    }
  }
}
