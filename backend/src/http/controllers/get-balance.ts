import { makeGetBalanceUseCase } from '@/use-cases/factories/make-get-balance'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function getBalanceController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const useCase = makeGetBalanceUseCase()

  // 56 characters, starts with 'G', followed by uppercase letters and digits
  const stellarAddressRegex = /^G[A-Z0-9]{55}$/

  const schema = z.object({
    address: z.string().refine((address) => stellarAddressRegex.test(address)),
  })

  const { address } = schema.parse(request.params)

  const { balance } = await useCase.execute({
    address,
  })

  reply.status(200).send({ balance })
}
