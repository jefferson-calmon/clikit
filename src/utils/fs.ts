/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import fsp from 'fs/promises';

export interface WriteFileResult {
	success: boolean;
	error: any;
}

export async function createFolderIfNotExists(folderPath: string) {
	if (!fs.existsSync(folderPath))
		await fsp.mkdir(folderPath, {
			recursive: true,
		});
}

export function checkIfFileExists(filePath: string) {
	return fs.existsSync(filePath);
}

export async function readFile(path: string) {
	try {
		const data = await fsp.readFile(path, {
			encoding: 'utf-8',
		});

		return { data, error: null };
	} catch (error: any) {
		const message =
			error.code === 'ENOENT'
				? 'Arquivo não encontrado. Verifique se o caminho para o arquivo está correto'
				: error.code === 'EACCES'
					? 'Permissão negada ao tentar ler o arquivo. Verifique as permissões do sistema.'
					: String(error?.message || error);

		return { data: '', error: message };
	}
}

export async function writeFile(path: string, content: string) {
	try {
		await fsp.writeFile(path, content, {
			encoding: 'utf-8',
			flush: true,
		});

		return { error: null };
	} catch (error: any) {
		const message = String(error?.message || error);

		return { error: message };
	}
}
