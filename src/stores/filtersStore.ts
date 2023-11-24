import type { Filters, OrderByAlphaFilter, OrderByTierFilter, TierFilter } from '@dtypes/filters';
import { atom } from 'nanostores';
import { SORT_ALPHA, SORT_TIER } from 'src/constants/sort';

// FILTER OBJECT
export const filters = atom<Filters>(
	{
		applyFilters: true,
		applySorting: true,
		tier: 0,
		name: null,
		sortAlpha: SORT_ALPHA.ASC,
		sortTier: SORT_TIER.ASC
	}
);

// SETTERS
export const setApplyFilters = (applyFilters: boolean) => {
	filters.set({ ...filters.get(), applyFilters });
};

export const setApplySorting = (applySorting: boolean) => {
	filters.set({ ...filters.get(), applySorting });
};

export const setTierFilter = (tier: TierFilter) => {
	filters.set({ ...filters.get(), tier });
};

export const setNameFilter = (name: string | null) => {
	filters.set({ ...filters.get(), name });
};

export const setAlphaSortFilter = (sortAlpha: OrderByAlphaFilter) => {
	filters.set({ ...filters.get(), sortAlpha });
};

export const setTierSortFilter = (sortTier: OrderByTierFilter) => {
	filters.set({ ...filters.get(), sortTier });
};