import { SORT_ALPHA, SORT_TIER } from 'src/constants/sort';
import { setNameFilter } from 'src/stores/filtersStore';

export default function Filters({ name = true, sortAlpha = true, tier = true, sortTier = true }:
	{ name: boolean, sortAlpha: boolean, tier: boolean, sortTier: boolean }) {

	const handleNameType = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = e.currentTarget.value.localeCompare('') === 0 ? null : e.currentTarget.value.toLowerCase();
		setNameFilter(name);
	};

	return (
		<section
			class="w-full min-h-[5rem] mt-10 flex justify-around items-start flex-col md:flex-row md:items-center gap-2
				px-8 py-4 rounded-3xl text-xl bg-seagull-800/90"
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
							<input class="px-2 rounded-lg" type="number" name="tier-filter" id="tier-filter" />
						</div>
					)
					: null
			}
			{
				sortAlpha
					? (
						<div class="flex flex-col justify-around">
							<label htmlFor="sortAlpha-filter">Sort alphabetically</label>
							<select class="px-2 rounded-lg" name="sortAlpha-filter" id="sortAlpha-filter">
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
