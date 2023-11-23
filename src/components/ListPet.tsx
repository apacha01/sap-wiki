import type { Pet } from '@dtypes/pet';
import CardPet from './CardPet.tsx';
import { useState } from 'preact/hooks';

export default function ListPet({ pets }: { pets: Pet[] }) {
	const [filteredList, setFilteredList] = useState(pets);
	// filters from nanostores

	// useEffect(() => { setFilteredList(...) }, [filters])

	return (
		<section class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-16">
			{
				filteredList.map(pet => {
					return (
						<CardPet key={pet._id} petName={pet.name} petSprites={pet.sprites} petStats={pet.stats} />
					);
				})
			}
		</section>
	);
}
