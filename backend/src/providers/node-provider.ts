export interface NodeProvider {
  getBlock(blockHeight: number): Promise<unknown>
  getTransaction(transactionHash: string): Promise<unknown>
  getBalance(address: string): Promise<unknown>
}
