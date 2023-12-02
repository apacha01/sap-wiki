import type { Pet } from 'src/types';

export default function CardPet({ model }: { model: Pet }) {
	const name = model.name.replace(/_([a-z])/g, (_, match) => ` ${match.toUpperCase()}`).replace(/^[a-z]/, match => match.toUpperCase());

	const { standard } = model.sprites;

	const hpIndex = model.stats[0].name.localeCompare('hp') === 0 ? 0 : 1;
	const hp = model.stats[hpIndex].base_stat;
	const atk = model.stats[hpIndex === 0 ? 1 : 0].base_stat;

	return (
		<article class="relative group w-56 h-48 m-auto px-6 py-3 flex flex-col gap-4 bg-fun-green-700 rounded-lg shadow-lg shadow-black
			hover:z-[999] hover:scale-110 hover:shadow-2xl hover:shadow-black transition-[transform,shadow] ease-in-out"
		>
			<span class="absolute top-0 left-0 aspect-square w-8 -translate-x-1/4 -translate-y-1/4">
				<img class="aspect-square w-full" src={`/imgs/84px-Tier_${model.tier_info.tier}_Icon.png`} alt={`SAP Tier ${model.tier_info.tier} dice sprite`} />
			</span>
			<h2 class="w-full text-center text-3xl leading-7 font-sap font-bold py-1 border-b border-b-fun-green-900">
				{name}
			</h2>
			<div class="w-full flex justify-center items-center gap-4">
				<img class="h-[95px] object-contain" src={standard} alt={`SAP ${name} standard sprite`} title={name} />
				<section class="flex flex-col justify-around h-full font-sap">
					<span class="bg-atk bg-contain bg-no-repeat aspect-square w-10 leading-10 text-center text-xl">
						{atk}
					</span>
					<span class="bg-hp bg-contain bg-no-repeat aspect-square w-10 leading-10 text-center text-xl">
						{hp}
					</span>
				</section>
			</div>
		</article>
	);
}
