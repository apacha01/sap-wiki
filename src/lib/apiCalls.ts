import {
	ALL_FOODS_ENDPOINT, ALL_PACKS_ENDPOINT, ALL_PETS_ENDPOINT, ALL_TOKENS_ENDPOINT, ALL_TOYS_ENDPOINT,
	CUSTOM_FOOD_ENDPOINT, CUSTOM_PACK_ENDPOINT, CUSTOM_PET_ENDPOINT, CUSTOM_TOKEN_ENDPOINT, CUSTOM_TOY_ENDPOINT, LOGIN_ENDPOINT
} from 'src/constants/api';
import type { API, Food, Pack, Pet, Token, Toy } from 'src/types';

export const getAllFoods = async () => {
	return await fetch(ALL_FOODS_ENDPOINT).then(res => res.json()).then((res: API) => res.code === 200 ? res.content as Food[] : res as API);
};

export const getAllPacks = async () => {
	return await fetch(ALL_PACKS_ENDPOINT).then(res => res.json()).then((res: API) => res.code === 200 ? res.content as Pack[] : res as API);
};

export const getAllPets = async () => {
	return await fetch(ALL_PETS_ENDPOINT).then(res => res.json()).then((res: API) => res.code === 200 ? res.content as Pet[] : res as API);
};

export const getAllTokens = async () => {
	return await fetch(ALL_TOKENS_ENDPOINT).then(res => res.json()).then((res: API) => res.code === 200 ? res.content as Token[] : res as API);
};

export const getAllToys = async () => {
	return await fetch(ALL_TOYS_ENDPOINT).then(res => res.json()).then((res: API) => res.code === 200 ? res.content as Toy[] : res as API);
};

export const getFood = async (nameOrId: string) => {
	return await fetch(CUSTOM_FOOD_ENDPOINT(nameOrId)).then(res => res.json()).then((res: API) => res.code === 200 ? res.content as Food : res as API);
};

export const getPack = async (nameOrId: string) => {
	return await fetch(CUSTOM_PACK_ENDPOINT(nameOrId)).then(res => res.json()).then((res: API) => res.code === 200 ? res.content as Pack : res as API);
};

export const getPet = async (nameOrId: string) => {
	return await fetch(CUSTOM_PET_ENDPOINT(nameOrId)).then(res => res.json()).then((res: API) => res.code === 200 ? res.content as Pet : res as API);
};

export const getToken = async (nameOrId: string) => {
	return await fetch(CUSTOM_TOKEN_ENDPOINT(nameOrId)).then(res => res.json()).then((res: API) => res.code === 200 ? res.content as Token : res as API);
};

export const getToy = async (nameOrId: string) => {
	return await fetch(CUSTOM_TOY_ENDPOINT(nameOrId)).then(res => res.json()).then((res: API) => res.code === 200 ? res.content as Toy : res as API);
};

export const login = async (user: { name: string, password: string }) => {
	return await fetch(LOGIN_ENDPOINT, {
		headers: { 'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify(user)
	}).then(res => res.json()).then((res: API) => res.code === 200 ? {token: res.content.token, error: ''} : {token: '', error: res.description});
};

export const createPet = async (pet: Pet) => {
	return await fetch(ALL_PETS_ENDPOINT, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', 'x-auth-token': localStorage.getItem('token') ?? '' },
		body: JSON.stringify({ pet }) }
	)
		.then(res => res.json())
		.then((res: API) => res.code === 201 ? res.content : res as API);
};

export const updatePet = async (pet: Pet, petId: string) => {
	return await fetch(CUSTOM_PET_ENDPOINT(petId), {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json', 'x-auth-token': localStorage.getItem('token') ?? '' },
		body: JSON.stringify({ pet }) }
	)
		.then(res => res.json())
		.then((res: API) => res.code === 200 ? res.content : res as API);
};

export const deletePet = async (petId: string) => {
	return await fetch(CUSTOM_PET_ENDPOINT(petId), {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json', 'x-auth-token': localStorage.getItem('token') ?? '' }
	})
		.then(res => res.json())
		.then((res: API) => res.code === 200 ? res.content : res as API);
};