import type { Pet } from 'src/types';
import CardPet from './CardPet.tsx';
import { useStore } from '@nanostores/preact';
import { filters } from 'src/stores/filtersStore.ts';
import { SORT_ALPHA, SORT_TIER } from 'src/constants/sort.ts';
import List from './List.tsx';

export default function ListPet({ pets }: { pets: Pet[] }) {
	const $filters = useStore(filters);

	const filteredList = $filters.applyFilters
		? pets.filter(pet => ($filters.tiers.includes(pet.tier_info.tier)) && ($filters.name.localeCompare('') === 0 || pet.name.includes($filters.name)))
		: pets;

	const sortedList = $filters.applySorting
		? [...filteredList].sort((p1, p2) => {
			return (
				(
					// By Tier
					$filters.sortTier === SORT_TIER.ASC
						? p1.tier_info.tier - p2.tier_info.tier
						: p2.tier_info.tier - p1.tier_info.tier
				) || (
					// Alphabetically
					$filters.sortAlpha === SORT_ALPHA.ASC
						? p1.name.localeCompare(p2.name)
						: p2.name.localeCompare(p1.name)
				)
			);
		})
		: filteredList;

	return (
		<List list={sortedList} cardComponent={CardPet}></List>
	);
}
