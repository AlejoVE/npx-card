#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

// Text + chalk definitions
const data = {
	name: chalk.white('             Luis ALejandro Montilla'),
	work: chalk.white('Junior Web Developer at BeCode.org'),
	twitter: chalk.gray('https://twitter.com/') + chalk.cyan('AleMontilla_dev'),
	npm: chalk.gray('https://npmjs.com/') + chalk.red('~alejove'),
	github: chalk.gray('https://github.com/') + chalk.green('AlejoVE'),
	linkedin:
		chalk.gray('https://linkedin.com/in/') + chalk.blue('alejandro-montilla'),
	web: chalk.cyan('https://alemontilla.netlify.app/'),
	labelWork: chalk.white.bold('       Work:'),
	labelTwitter: chalk.white.bold('    Twitter:'),
	labelNpm: chalk.white.bold('        npm:'),
	labelGitHub: chalk.white.bold('     GitHub:'),
	labelLinkedIn: chalk.white.bold('   LinkedIn:'),
	labelWeb: chalk.white.bold('        Web:'),
    message: chalk.magentaBright(`           Hasta la vista, baby ;)`)
};

const NEWLINE = '\n';
const EMPTYLINE = '';

console.log(
	chalk.magentaBright(
		boxen(
			[
				`${data.name}`,
				EMPTYLINE,
				`        ${data.work}`,
				EMPTYLINE,
				`${data.labelTwitter} ${data.twitter}`,
				`${data.labelNpm} ${data.npm}`,
				`${data.labelGitHub} ${data.github}`,
				`${data.labelLinkedIn} ${data.linkedin}`,
				`${data.labelWeb} ${data.web}`,
				EMPTYLINE,
                `${data.message}`
			].join(NEWLINE),
			{
				padding: 1,
				margin: 1,
				borderStyle: 'round',
			}
		)
	)
);