import { useState } from 'preact/hooks';
import Toggle from './Toggle';
import CreatePetForm from './CreatePetForm';
import CreatePetJson from './CreatePetJson';

export default function CreatePet({ className, label }: { className?: string, label: string }) {
	const [condition, setCondition] = useState(true);

	const handleToggle = () => {
		setCondition(c => !c);
	};

	return (
		<article class={className}>
			<Toggle label={label} onToggle={handleToggle} toggled={condition} />
			{
				condition
					? <CreatePetJson></CreatePetJson>
					: <CreatePetForm></CreatePetForm>
			}
		</article>
	);
}
