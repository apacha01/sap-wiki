import type { Pack } from 'src/types';

export default function CardPack({ model }: { model: Pack }) {
	const name = model.name.replace(/_([a-z])/g, (_, match) => ` ${match.toUpperCase()}`).replace(/^[a-z]/, match => match.toUpperCase());

	const standard = model.sprite;

	return (
		<article class="relative w-56 h-48 m-auto flex flex-col gap-4 rounded-lg drop-shadow-xl font-sap bg-pack bg-center bg-no-repeat bg-contain
			hover:z-[999] hover:scale-110 hover:drop-shadow-2xl transition-[transform,shadow] ease-in-out"
		>
			<img class="h-[95px] object-contain mt-4" src={standard} alt={`SAP ${name} standard sprite`} title={name} />
			<h2 class="w-full text-center text-3xl leading-7 font-sap font-bold text-cedar-wood-finish py-1">
				{name} Pack
			</h2>
		</article>
	);
}
