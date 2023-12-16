import Ajv from 'ajv';
import addFormat from 'ajv-formats';
import { useState } from 'preact/hooks';
import { createPet, updatePet } from 'src/lib/apiCalls';
import type { Pet } from 'src/types';

export default function CreatePetJson({ pet, create }: { pet?: Pet, create: boolean }) {
	const [json, setJson] = useState('');
	const [err, setErr] = useState('');
	const [msg, setMsg] = useState('');
	const [loading, setLoading] = useState(false);

	const onInput = (event) => {
		setJson(event.target.value);
		setErr('');
		setMsg('');
	};

	const handleClick = async (event) => {
		if (await checkIfValidJson(json)) {
			setLoading(true);

			if (create) {
				const res = await createPet(JSON.parse(json)).finally(() => setLoading(false));
				if ('documentationURL' in res) {
					console.error(res);
					setErr(res.description);
				}
				else {
					setMsg('CREATED!');
				}
			}
			else if (!create && pet) {
				console.log('in');
				const res = await updatePet(JSON.parse(json), pet._id).finally(() => setLoading(false));
				if ('documentationURL' in res) {
					console.error(res);
					setErr(res.description);
				}
				else {
					setMsg('UPDATED!');
				}
			}
			else {
				setMsg('Not doing anything since no pet provided');
			}
		}
		else {
			console.error('invalid pet');
		}
	};

	const checkIfValidJson = async (json: string) => {
		const ajv = new Ajv();
		addFormat(ajv, ['uri']);

		const schema = await fetch('https://raw.githubusercontent.com/apacha01/sapi/master/src/schemas/pets-schema.json').then(res => res.json());
		const validate = ajv.compile(schema);
		const isValid = validate(JSON.parse(json));

		if (!isValid) {
			setErr(
				validate.errors.map(e => {
					const errorString = `\n\tERROR: ${e.message}`;
					return errorString;
				}).join('')
			);
			return false;
		}
		else {
			return true;
		}
	};

	return (
		<section class="w-full flex flex-col items-center">
			<textarea class="max-w-full w-full h-[600px] bg-[#ccc] text-black text-xl p-3 rounded-lg border-4 border-black" name="json" id="json" placeholder="Your JSON here..." value={json} onInput={onInput}>
				{pet ? JSON.stringify(pet, null, '\t') : null}
			</textarea>
			<pre class={`${!err ? 'hidden' : ''} text-red-400 font-libsans text-2xl font-bold mt-5`}>{err}</pre>
			<pre class={`${!msg ? 'hidden' : ''} text-green-400 font-libsans text-2xl font-bold mt-5`}>{msg}</pre>
			{
				loading
					? (
						<button disabled class="bg-sap-button shadow-[inset_0px_-10px_0px] shadow-sap-button-shadow py-3 rounded-lg border-[3px] border-black text-2xl font-sap text-sap-button-text w-48">
							<span class="block bg-loader bg-cover aspect-square w-10 max-h-full mx-auto animate-[spin_2s_linear_infinite]"></span>
						</button>
					)
					: (
						<button onClick={handleClick} class="bg-sap-button shadow-[inset_0px_-10px_0px] shadow-sap-button-shadow py-3 px-3 rounded-lg border-[3px] border-black text-3xl font-sap text-sap-button-text active:shadow-none active:translate-y-1 active:scale-y-95 mt-6 w-48">
							{create ? 'Create' : 'Edit'}
						</button>
					)
			}
		</section>
	);
}
