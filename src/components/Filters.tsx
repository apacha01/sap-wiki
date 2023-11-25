import type { PossibleTiers } from 'src/types';
import type { ChangeEvent } from 'preact/compat';
import { SORT_ALPHA, SORT_TIER } from 'src/constants/sort';
import { setAlphaSortFilter, setApplyFilters, setApplySorting, setNameFilter, setTierSortFilter, toggleTierFromFilter } from 'src/stores/filtersStore';
import Toggle from './Toggle';

export default function Filters({ name = true, sortAlpha = true, tier = true, sortTier = true }:
	{ name: boolean, sortAlpha: boolean, tier: boolean, sortTier: boolean }) {

	const handleNameType = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.currentTarget.value.toLowerCase();
		setNameFilter(name);
	};

	const handleTierType = (e: MouseEvent) => {
		const { id } = e.currentTarget as HTMLButtonElement;
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

	const handleFiltersToggle = (e: MouseEvent) => {
		const checked = (e.currentTarget as HTMLInputElement).checked;
		setApplyFilters(checked);
	};

	const handleSortingToggle = (e: MouseEvent) => {
		const checked = (e.currentTarget as HTMLInputElement).checked;
		setApplySorting(checked);
	};

	return (
		<section
			class="w-full min-h-[5rem] flex flex-col gap-6 items-end mt-10 px-8 py-4 rounded-3xl text-xl bg-seagull-800/80"
		>
			<div className="w-full flex justify-around items-start flex-col md:flex-row md:items-center gap-2">
				{
					name
						? (
							<div class="flex flex-col justify-around max-w-full">
								<label htmlFor="name-filter">Name: </label>
								<input
									class="px-2 rounded-lg"
									type="text"
									name="name-filter"
									id="name-filter"
									onInput={handleNameType}
								/>
							</div>
						)
						: null
				}
				{
					tier
						? (
							<div class="flex flex-col justify-around max-w-full">
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
							<div class="flex flex-col justify-around max-w-full">
								<label htmlFor="sortAlpha-filter">Sort alphabetically</label>
								<select
									class="px-2 rounded-lg"
									name="sortAlpha-filter"
									id="sortAlpha-filter"
									onChange={handleAlphaSortingOrderSelect}
								>
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
							<div class="flex flex-col justify-around max-w-full">
								<label htmlFor="sortTier-filter">Sort by tier</label>
								<select
									class="px-2 rounded-lg"
									name="sortTier-filter"
									id="sortTier-filter"
								>
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
			</div>
			<div class="flex gap-8">
				<Toggle label='Filters' onToggle={handleFiltersToggle} toggled={true} />
				<Toggle label='Sorting' onToggle={handleSortingToggle} toggled={false} />
			</div>
		</section>
	);
}
