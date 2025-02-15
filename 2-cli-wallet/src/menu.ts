import inquirer from 'inquirer'
import { CommandsEnum } from '@/commands/commands-enum'
import { handleCommand } from '@/commands/handle-command'
import { banner } from './banner'

interface Answers {
  command: CommandsEnum
}

export const runMenu = async () => {
  while (true) {
    const { command }: Answers = await inquirer.prompt([
      {
        type: 'rawlist',
        name: 'command',
        message: 'Choose a command:',
        choices: Object.values(CommandsEnum),
      },
    ])

    const shouldContinue = await handleCommand(command)
    if (!shouldContinue) break

    // Wait for the user to press Enter before clearing the screen
    await inquirer.prompt([
      {
        type: 'input',
        name: 'continue',
        message: 'Press Enter to continue...',
      },
    ])
    console.clear()
    banner()
  }
}
