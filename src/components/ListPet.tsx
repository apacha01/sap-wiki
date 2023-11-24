import type { Pet } from '@dtypes/pet';
import CardPet from './CardPet.tsx';
import { useStore } from '@nanostores/preact';
import { filters } from 'src/stores/filtersStore.ts';
import { SORT_ALPHA, SORT_TIER } from 'src/constants/sort.ts';

export default function ListPet({ pets }: { pets: Pet[] }) {
	const $filters = useStore(filters);

	const filteredList = $filters.applyFilters
		? pets.filter(pet => ($filters.tier === 0 || pet.tier_info.tier === $filters.tier) && ($filters.name === null || pet.name.includes($filters.name)))
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
		<section class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-16">
			{
				sortedList.map(pet => {
					return (
						<CardPet key={pet._id} petName={pet.name} petSprites={pet.sprites} petStats={pet.stats} />
					);
				})
			}
		</section>
	);
}
