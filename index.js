import chalk from 'chalk';
import * as p from '@clack/prompts';

async function main() {
	p.intro(chalk.bgBlue('CLI with nodejs.'));

	const name = await p.text({
		message: 'Whats your name?',
		placeholder: 'Your name:',
	});

    const age = await p.text({
        message: 'Entre you age:',
        placeholder: 'Your age:',
        validate: value => isNaN(value) 
    })

    const spinner = p.spinner();
    spinner.start();
    await setTimeout(() => {
        spinner.stop()
        p.outro(`Heh! you waited 2 Seconds ${name} aged ${age}`)
    }, 2000)

}

await main()