import { makeGetTransactionUseCase } from '@/use-cases/factories/make-get-transaction'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function getTransactionController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const useCase = makeGetTransactionUseCase()

  // 64 characters, hexadecimal
  const transactionHashRegex = /^[a-zA-Z0-9]{64}$/

  const schema = z.object({
    transactionHash: z
      .string()
      .refine((hash) => transactionHashRegex.test(hash)),
  })

  const { transactionHash } = schema.parse(request.params)

  const { transaction } = await useCase.execute({
    transactionHash,
  })

  reply.status(200).send({ transaction })
}
