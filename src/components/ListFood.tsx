import { useStore } from '@nanostores/preact';
import { filters } from 'src/stores/filtersStore.ts';
import { SORT_ALPHA, SORT_TIER } from 'src/constants/sort.ts';
import List from './List.tsx';
import type { Food } from 'src/types';
import CardFood from './CardFood.tsx';

export default function ListFood({ foods }: { foods: Food[] }) {
	const $filters = useStore(filters);

	const filteredList = $filters.applyFilters
		? foods.filter(food => ($filters.tiers.includes(food.shop_tier.tier)) && ($filters.name.localeCompare('') === 0 || food.name.includes($filters.name)))
		: foods;

	const sortedList = $filters.applySorting
		? [...filteredList].sort((f1, f2) => {
			return (
				(
					// By Tier
					$filters.sortTier === SORT_TIER.ASC
						? f1.shop_tier.tier - f2.shop_tier.tier
						: f2.shop_tier.tier - f1.shop_tier.tier
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
		<List list={sortedList} cardComponent={CardFood}></List>
	);
}