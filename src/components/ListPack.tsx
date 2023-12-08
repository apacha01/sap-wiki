import { useStore } from '@nanostores/preact';
import { SORT_ALPHA } from 'src/constants/sort';
import { filters } from 'src/stores/filtersStore';
import type { Pack } from 'src/types';
import List from './List';
import CardPack from './CardPack';

export default function ListToken({ packs }: { packs: Pack[] }) {
	const $filters = useStore(filters);

	const filteredList = $filters.applyFilters
		? packs.filter(food => ($filters.name.localeCompare('') === 0 || food.name.includes($filters.name)))
		: packs;

	const sortedList = $filters.applySorting
		? [...filteredList].sort((f1, f2) => {
			return (
				// Alphabetically
				$filters.sortAlpha === SORT_ALPHA.ASC
					? f1.name.localeCompare(f2.name)
					: f2.name.localeCompare(f1.name)
			);
		})
		: filteredList;

	return (
		<List list={sortedList} cardComponent={CardPack}></List>
	);
}
