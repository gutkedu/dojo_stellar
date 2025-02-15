import { makeCheckBalanceUseCase } from '@/use-cases/factories/make-check-balance'
import { z } from 'zod'

export function checkBalanceCommand(pubKey: string) {
  console.log(pubKey)

  const useCase = makeCheckBalanceUseCase()

  const stellarAddressRegex = /^G[A-Z0-9]{55}$/

  const schema = z.object({
    publicKey: z.coerce
      .string()
      .refine((address) => stellarAddressRegex.test(address), {
        message: 'Invalid Stellar address',
      }),
  })

  try {
    const { publicKey } = schema.parse({ pubKey })

    console.log(`Checking balance for address: ${publicKey}`)

    return useCase.execute()
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Validation error:', error.errors)
    } else {
      console.error('Unexpected error:', error)
    }
  }
}
