import { join } from 'path';

import { chalk } from 'utils/chalk';
import { writeFile } from 'utils/fs';
import { prompt } from 'utils/prompt';

export interface File {
	name: string;
	dir: string;
	content: string;
}

export async function createFile(file: File) {
	const loading = (await prompt()).spinner();
	const color = await chalk();

	const [name, dir, path] = [
		color.cyan(file.name),
		color.magenta(file.dir),
		join(file.dir, file.name),
	];

	loading.start(`Criando arquivo ${name} em ${dir}`);

	const { error } = await writeFile(path, file.content.trim());

	const message = !error ? 'foi criado com sucesso' : 'falhou ao ser criado';

	loading.stop(`O arquivo ${name} ${message} em ${dir}`);

	return {
		error,
	};
}
