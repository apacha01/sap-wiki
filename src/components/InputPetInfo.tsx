import { useState } from 'preact/hooks';
import Toggle from './Toggle';
import FormPet from './FormPet';
import JsonPet from './JsonPet';
import type { Pet } from 'src/types';

export default function InputPetInfo({ pet, className, label, create }: { pet?: Pet, className?: string, label: string, create: boolean }) {
	const [condition, setCondition] = useState(true);

	const handleToggle = () => {
		setCondition(c => !c);
	};

	return (
		<article class={className}>
			<Toggle label={label} onToggle={handleToggle} toggled={condition} />
			{
				condition
					? <JsonPet pet={pet} create={create} ></JsonPet>
					: <FormPet pet={pet} create={create} ></FormPet>
			}
		</article>
	);
}
