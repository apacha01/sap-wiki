import type { Food } from 'src/types';

export default function CardFood({ model }: { model: Food }) {
	const name = model.name.replace(/_([a-z])/g, (_, match) => ` ${match.toUpperCase()}`).replace(/^[a-z]/, match => match.toUpperCase());

	const { standard } = model.sprites;

	return (
		<article class="relative group w-56 h-48 m-auto px-6 py-3 flex flex-col gap-4 bg-fun-green-700 rounded-lg shadow-lg shadow-black font-sap
			hover:z-[999] hover:scale-110 hover:shadow-2xl hover:shadow-black transition-[transform,shadow] ease-in-out"
		>
			<span class="absolute top-0 left-0 aspect-square w-8 -translate-x-1/4 -translate-y-1/4">
				<img class="aspect-square w-full" src={`/imgs/84px-Tier_${model.shop_tier.tier}_Icon.png`} alt={`SAP Tier ${model.shop_tier.tier} dice sprite`} />
			</span>
			<h2 class="w-full text-center text-3xl leading-7 font-sap font-bold py-1 border-b border-b-fun-green-900">
				{name}
			</h2>
			<div class="w-full flex justify-center items-end gap-4">
				<img class="h-[95px] object-contain" src={standard} alt={`SAP ${name} standard sprite`} title={name} />
				<span class="bg-coin bg-contain bg-no-repeat aspect-square w-12 leading-[3rem] text-black text-center text-xl">{model.price}</span>
			</div>
		</article>
	);
}
