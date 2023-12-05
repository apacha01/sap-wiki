import type { Model } from 'src/types';

interface ListProps<T> {
	list: T[];
	cardComponent: ({ model }: { model: T }) => JSX.Element;
}

export default function List<T extends Model>({ list, cardComponent: Card }: ListProps<T>) {

	return (
		<section class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-16">
			{
				list.map(model => {
					return (
						<a href={model._id}>
							<Card model={model}></Card>
						</a>
					);
				})
			}
		</section >
	);
}
