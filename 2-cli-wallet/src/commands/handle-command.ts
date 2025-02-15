import inquirer from 'inquirer'
import { checkBalanceCommand } from './check-balance'
import { CommandsEnum } from './commands-enum'

export async function handleCommand(command: CommandsEnum): Promise<boolean> {
  switch (command) {
    case CommandsEnum.CREATE_KEYPAIR:
      console.log('create-keypair')
      break
    case CommandsEnum.CHECK_BALANCE:
      const { publicKey } = await inquirer.prompt([
        {
          type: 'input',
          name: 'publicKey',
          message: 'Enter the public key:',
        },
      ])
      checkBalanceCommand(publicKey)
      break
    case CommandsEnum.SEND_XML:
      const { sourceSecret, destination, amount } = await inquirer.prompt([
        {
          type: 'input',
          name: 'sourceSecret',
          message: 'Enter the source secret:',
        },
        {
          type: 'input',
          name: 'destination',
          message: 'Enter the destination address:',
        },
        {
          type: 'input',
          name: 'amount',
          message: 'Enter the amount to send:',
        },
      ])
      console.log('send-xml', sourceSecret, destination, amount)
      break
    case CommandsEnum.LIST_KEYPAIRS:
      console.log('list-keypairs')
      break
    case CommandsEnum.EXIT:
      return false
  }
  return true
}
