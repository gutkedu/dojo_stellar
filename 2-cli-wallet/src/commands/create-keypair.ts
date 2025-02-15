import { makeCreateKeyPairUseCase } from '@/use-cases/factories/make-create-keypair'

export function createKeyPairCommand() {
  const useCase = makeCreateKeyPairUseCase()
}
