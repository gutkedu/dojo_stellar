import { StellarNodeProvider } from '@/providers/stellar-node-provider'
import { SendXmlUseCase } from '../send-xml'

export function makeSendXmlUseCase() {
  const node = new StellarNodeProvider()
  return new SendXmlUseCase(node)
}
