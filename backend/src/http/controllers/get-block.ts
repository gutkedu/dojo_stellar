import { makeGetBlockUseCase } from '@/use-cases/factories/make-get-block'
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export async function getBlockController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const useCase = makeGetBlockUseCase()

  const getBlockSchema = z.object({
    blockHeight: z.coerce.number().int(),
  })

  const { blockHeight } = getBlockSchema.parse(request.params)

  const { block } = await useCase.execute({
    blockHeight,
  })

  reply.status(200).send({ block })
}
