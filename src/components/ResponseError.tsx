import { error } from 'src/stores/errorStore';
import { useStore } from '@nanostores/preact';

export default function ResponseError() {
	const $error = useStore(error);

	return (
		<article class="flex flex-col">
			<h1 class="text-7xl font-bold font-sap text-seagull-100 mb-28 mx-auto">There's been an ERROR</h1>
			<div className="flex justify-center items-center gap-12 mb-12">
				<span class="font-sap text-6xl text-sap-yellow-500">{$error?.code}</span>
				<h2 class="font-sap text-6xl text-sap-yellow-500">{$error?.message}</h2>
			</div>
			<section class="my-10">
				<h3 class="font-libsans text-3xl text-seagull-50">Description:</h3>
				<p class="text-2xl ml-3">{$error?.description}</p>
			</section>
			<section class="my-10">
				<h3 class="font-libsans text-3xl text-seagull-50">API Documentation:</h3>
				<p class="text-2xl ml-3">
					You can check the documentation	<a class="text-seagull-300 hover:underline underline-offset-2" href={$error?.documentationURL}>here</a> for troubleshooting
				</p>
			</section>
		</article>
	);
}
