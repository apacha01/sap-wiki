import type { SORT_ALPHA, SORT_TIER } from 'src/constants/sort';

export type Filters = {
	applyFilters: boolean,
	applySorting: boolean,
	tier: TierFilter;
	name: string | null;
	sortAlpha: OrderByAlphaFilter;
	sortTier: OrderByTierFilter;
}

export type TierFilter = 0 | 1 | 2 | 3 | 4 | 5 | 6;

// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
export type OrderByAlphaFilter = typeof SORT_ALPHA[keyof typeof SORT_ALPHA];

export type OrderByTierFilter = typeof SORT_TIER[keyof typeof SORT_TIER];