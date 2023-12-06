import { useStore } from '@nanostores/preact';
import { SORT_ALPHA, SORT_TIER } from 'src/constants/sort';
import { filters } from 'src/stores/filtersStore';
import type { Token } from 'src/types';
import List from './List';
import CardToken from './CardToken';

export default function ListToken({ tokens }: { tokens: Token[] }) {
	const $filters = useStore(filters);

	const filteredList = $filters.applyFilters
		? tokens.filter(food => ($filters.tiers.includes(food.tier_info.tier)) && ($filters.name.localeCompare('') === 0 || food.name.includes($filters.name)))
		: tokens;

	const sortedList = $filters.applySorting
		? [...filteredList].sort((f1, f2) => {
			return (
				(
					// By Tier
					$filters.sortTier === SORT_TIER.ASC
						? f1.tier_info.tier - f2.tier_info.tier
						: f2.tier_info.tier - f1.tier_info.tier
				) || (
					// Alphabetically
					$filters.sortAlpha === SORT_ALPHA.ASC
						? f1.name.localeCompare(f2.name)
						: f2.name.localeCompare(f1.name)
				)
			);
		})
		: filteredList;

	return (
		<List list={sortedList} cardComponent={CardToken}></List>
	);
}
