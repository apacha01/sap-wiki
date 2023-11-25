import type { PossibleTiers } from 'src/types';
import type { ChangeEvent } from 'preact/compat';
import { SORT_ALPHA, SORT_TIER } from 'src/constants/sort';
import { setAlphaSortFilter, setNameFilter, toggleTierFromFilter } from 'src/stores/filtersStore';

export default function Filters({ name = true, sortAlpha = true, tier = true, sortTier = true }:
	{ name: boolean, sortAlpha: boolean, tier: boolean, sortTier: boolean }) {

	const handleNameType = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.currentTarget.value.localeCompare('') === 0 ? null : e.currentTarget.value.toLowerCase();
		setNameFilter(name);
	};

	const handleTierType = (e: MouseEvent) => {
		const { id } = e.currentTarget as Element;
		const tier = parseInt(id.charAt(id.indexOf('-') + 1)) as PossibleTiers;
		document.getElementById(id)?.classList.toggle('opacity-50');
		toggleTierFromFilter(tier);
	};

	const handleAlphaSortingOrderSelect = (e: ChangeEvent<HTMLSelectElement>) => {
		const value =
			e.currentTarget.value.localeCompare(SORT_ALPHA.DESC) === 0
				? SORT_ALPHA.DESC
				: SORT_ALPHA.ASC;
		setAlphaSortFilter(value);
	};

	return (
		<section
			class="w-full min-h-[5rem] mt-10 flex justify-around items-start flex-col md:flex-row md:items-center gap-2
				px-8 py-4 rounded-3xl text-xl bg-seagull-800/80"
		>

			{
				name
					? (
						<div class="flex flex-col justify-around">
							<label htmlFor="name-filter">Name: </label>
							<input class="px-2 rounded-lg" type="text" name="name-filter" id="name-filter" onInput={handleNameType} />
						</div>
					)
					: null
			}
			{
				tier
					? (
						<div class="flex flex-col justify-around">
							<label htmlFor="tier-filter">Tier: </label>
							<div class="flex gap-1">
								{
									[1, 2, 3, 4, 5, 6].map(n => (
										<>
											<button onClick={handleTierType} id={`tier-${n}-btn`}>
												<img class="aspect-square w-7" src={`/imgs/25px-Tier_${n}_Icon.webp`} alt={`SAP Tier ${n} dice sprite`} />
											</button>
										</>
									))
								}
							</div>
						</div>
					)
					: null
			}
			{
				sortAlpha
					? (
						<div class="flex flex-col justify-around">
							<label htmlFor="sortAlpha-filter">Sort alphabetically</label>
							<select class="px-2 rounded-lg" name="sortAlpha-filter" id="sortAlpha-filter" onChange={handleAlphaSortingOrderSelect} >
								{Object.keys(SORT_ALPHA).map(k =>
									<option key={k} value={SORT_ALPHA[k as keyof typeof SORT_ALPHA]}>
										{SORT_ALPHA[k as keyof typeof SORT_ALPHA]}
									</option>
								)}
							</select>
						</div>
					)
					: null
			}
			{
				sortTier
					? (
						<div class="flex flex-col justify-around">
							<label htmlFor="sortTier-filter">Sort by tier</label>
							<select class="px-2 rounded-lg" name="sortTier-filter" id="sortTier-filter">
								{Object.keys(SORT_TIER).map(k =>
									<option key={k} value={SORT_TIER[k as keyof typeof SORT_TIER]}>
										{SORT_TIER[k as keyof typeof SORT_TIER]}
									</option>
								)}
							</select>
						</div>
					)
					: null
			}
		</section>
	);
}