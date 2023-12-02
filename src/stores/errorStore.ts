import { atom } from 'nanostores';
import type { API } from 'src/types';

export const error = atom<API | null>(null);

export const setError = (err: API | null) => {
	error.set(err);
};