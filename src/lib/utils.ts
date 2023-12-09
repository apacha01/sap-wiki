import { API_ENDPOINT } from 'src/constants/api';

export const snakeCaseToNormalText = (text: string) => {
	return text.replace(/_([a-z])/g, (_, match) => ` ${match.toUpperCase()}`).replace(/^[a-z]/, match => match.toUpperCase());
};

export const snakeCaseToUpperSnakeCase = (text: string) => {
	return text.replace(/_([a-z])/g, (_, match) => `_${match.toUpperCase()}`).replace(/^[a-z]/, match => match.toUpperCase());
};

export const getEndpointModel = (url: string) => {
	return url.substring(0, url.lastIndexOf('/')).replace(API_ENDPOINT, '');
};

export const getStandardSpriteUrl = (model:string, name: string) => {
	return `https://raw.githubusercontent.com/apacha01/assets/sap/super-auto-pets/${model}/standard/${name}.png`;
};

export const getStandardImageUrlFromApiURL = (url: string, name: string) => {
	const model = getEndpointModel(url);
	return getStandardSpriteUrl(model, snakeCaseToUpperSnakeCase(name));
};

export const getWikiUriFromApiURL = (url: string) => {
	const model = getEndpointModel(url);
	const id = url.slice(url.lastIndexOf('/'));
	return `/${model}/${id}`;
};