import { useStore } from '@nanostores/preact';
import { filters } from 'src/stores/filtersStore.ts';
import { SORT_ALPHA, SORT_TIER } from 'src/constants/sort.ts';
import List from './List.tsx';
import type { Toy } from 'src/types';
import CardToy from './CardToy';

export default function ListToy({ toys }: { toys: Toy[] }) {
	const $filters = useStore(filters);

	const filteredList = $filters.applyFilters
		? toys.filter(toy => ($filters.tiers.includes(toy.tier_info.tier)) && ($filters.name.localeCompare('') === 0 || toy.name.includes($filters.name)))
		: toys;

	const sortedList = $filters.applySorting
		? [...filteredList].sort((t1, t2) => {
			return (
				(
					// By Tier
					$filters.sortTier === SORT_TIER.ASC
						? t1.tier_info.tier - t2.tier_info.tier
						: t2.tier_info.tier - t1.tier_info.tier
				) || (
					// Alphabetically
					$filters.sortAlpha === SORT_ALPHA.ASC
						? t1.name.localeCompare(t2.name)
						: t2.name.localeCompare(t1.name)
				)
			);
		})
		: filteredList;

	return (
		<List list={sortedList} cardComponent={CardToy}></List>
	);
}