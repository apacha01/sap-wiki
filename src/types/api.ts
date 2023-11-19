import type { Pet } from './pet.ts';
import type { Food } from './food.ts';
import type { Token } from './token.ts';
import type { Toy } from './toy.ts';
import type { Pack } from './pack.ts';

export type API = {
    code:             number;
    message:			string;
    content:			Food | Food[] | Pack | Pack[] | Pet | Pet[] | Token | Token[] | Toy | Toy[];
    description:      string;
    documentationURL: string;
}