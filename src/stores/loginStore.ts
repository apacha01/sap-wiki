import { atom } from 'nanostores';

export const authToken = atom<string | null>(null);

export const setToken = (token: string | null) => {
	authToken.set(token);
};