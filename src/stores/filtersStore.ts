import type { Filters, OrderByAlphaFilter, OrderByTierFilter, PossibleTiers } from 'src/types';
import { atom } from 'nanostores';
import { SORT_ALPHA, SORT_TIER } from 'src/constants/sort';

// FILTER OBJECT
export const filters = atom<Filters>(
	{
		applyFilters: true,
		applySorting: false,
		tiers: [1, 2, 3, 4, 5, 6],
		name: '',
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

export const addTierToFilter = (tier: PossibleTiers) => {
	const newTiers = filters.get().tiers;
	newTiers.push(tier);
	filters.set({ ...filters.get(), tiers: newTiers });
};

export const removeTierFromFilter = (tier: PossibleTiers) => {
	const newTiers = filters.get().tiers.filter((t) => t !== tier);
	filters.set({ ...filters.get(), tiers: newTiers });
};

export const toggleTierFromFilter = (tier: PossibleTiers) => {
	const newTiers = filters.get().tiers;

	const index = newTiers.findIndex((t) => t === tier);
	if (index === -1) newTiers.push(tier);
	else newTiers.splice(index, 1);

	filters.set({ ...filters.get(), tiers: newTiers });
};

export const setNameFilter = (name: string) => {
	filters.set({ ...filters.get(), name });
};

export const setAlphaSortFilter = (sortAlpha: OrderByAlphaFilter) => {
	filters.set({ ...filters.get(), sortAlpha });
};

export const setTierSortFilter = (sortTier: OrderByTierFilter) => {
	filters.set({ ...filters.get(), sortTier });
};