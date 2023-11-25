// Adapted from https://flowbite.com/docs/forms/toggle/
export default function Toggle(
	{ label = 'Your label Here', toggled = false, onToggle }:
		{ label: string, toggled: boolean, onToggle: (e: MouseEvent) => void }) {
	return (
		<div>
			<label class="relative inline-flex items-center cursor-pointer">
				<input class="sr-only peer invisible" type="checkbox" checked={toggled} onClick={onToggle} />
				<div class="w-11 h-6 bg-seagull-950 rounded-full after:absolute after:content-[''] after:aspect-square after:w-5 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:top-[2px] after:start-[2px] after:bg-seagull-50 after:rounded-full after:transition-transform peer-checked:bg-seagull-500"></div>
				<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
			</label>
		</div>
	);
}