import { chalk } from 'utils/chalk';
import { prompt } from 'utils/prompt';

(async () => {
	const prompts = await prompt();

	const loading = prompts.spinner();
	const color = await chalk();

	const [name, dir] = [color.cyan('test.ts'), color.yellow('src/test')];

	loading.start(`Criando arquivo ${name} em ${dir}`);

	await new Promise((resolve) => setTimeout(resolve, 1000));

	loading.stop(`O arquivo ${name} falhou ao ser criado em ${dir}`);
	// prompts.log.message(color.red('Unable to create this file here'));
	prompts.outro(color.red('Unable to create this file here'));

	loading.start(`Criando arquivo ${name} em ${dir}`);
	loading.stop(`O arquivo ${name} falhou ao ser criado em ${dir}`);

	loading.start(`Criando arquivo ${name} em ${dir}`);
	loading.stop(`O arquivo ${name} falhou ao ser criado em ${dir}`);
})();
