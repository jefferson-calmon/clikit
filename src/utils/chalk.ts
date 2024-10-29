export async function chalk() {
	const { default: chalk } = await import('chalk');

	return chalk;
}
