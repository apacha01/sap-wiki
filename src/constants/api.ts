export const API_ENDPOINT = 'https://sapi-kkff.onrender.com/api/v1/';

export const ALL_FOODS_ENDPOINT = API_ENDPOINT + 'foods';
export const ALL_PETS_ENDPOINT = API_ENDPOINT + 'pets';
export const ALL_PACKS_ENDPOINT = API_ENDPOINT + 'packs';
export const ALL_TOKENS_ENDPOINT = API_ENDPOINT + 'tokens';
export const ALL_TOYS_ENDPOINT = API_ENDPOINT + 'toys';
export const LOGIN_ENDPOINT = API_ENDPOINT + 'login';

export const CUSTOM_FOOD_ENDPOINT = (name: string) => `${ALL_FOODS_ENDPOINT}/${name}`;
export const CUSTOM_PET_ENDPOINT = (name: string) => `${ALL_PETS_ENDPOINT}/${name}`;
export const CUSTOM_PACK_ENDPOINT = (name: string) => `${ALL_PACKS_ENDPOINT}/${name}`;
export const CUSTOM_TOKEN_ENDPOINT = (name: string) => `${ALL_TOKENS_ENDPOINT}/${name}`;
export const CUSTOM_TOY_ENDPOINT = (name: string) => `${ALL_TOYS_ENDPOINT}/${name}`;