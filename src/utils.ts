export const snakeCaseToNormalText = (text: string) => {
	return text.replace(/_([a-z])/g, (_, match) => ` ${match.toUpperCase()}`).replace(/^[a-z]/, match => match.toUpperCase());
};