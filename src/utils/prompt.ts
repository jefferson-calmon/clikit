import { CANCELLED } from 'constants/errors';

export async function prompt() {
	const prompt = await import('@clack/prompts');

	function error(message: string) {
		prompt.log.error(message);
		process.exit();
	}

	function cancel(message = CANCELLED) {
		prompt.cancel(message);
		process.exit(0);
	}

	return { ...prompt, error, cancel };
}
