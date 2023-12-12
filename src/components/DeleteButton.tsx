import { useState } from 'preact/hooks';
import { deletePet } from 'src/lib/apiCalls';

export default function DeleteButton({ id }: { id: string }) {
	const [showModal, setShowModal] = useState(false);
	const [msg, setMsg] = useState('');

	const handleClick = () => {
		setShowModal(true);
	};

	const handleDelete = async () => {
		const res = await deletePet(id);
		if ('documentationURL' in res) {
			console.error(res);
		}
		else {
			setMsg('DELETED!');
		}
		setShowModal(false);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<>
			<button onClick={handleClick} class="bg-sap-button shadow-[inset_0px_-10px_0px] shadow-sap-button-shadow py-3 px-3 rounded-lg border-[3px] border-black text-xl font-sap text-sap-button-text active:shadow-none active:translate-y-1 active:scale-y-95 mr-4">
				Delete
			</button>
			<div class={`fixed w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-evenly bg-slate-950 text-seagull-100 ${showModal ? '' : 'hidden'}`}>
				<div class="p-4 rounded shadow-md z-10">
					<h2 class="text-xl font-bold mb-4">Delete Confirmation</h2>
					<p>Are you sure you want to delete this item?</p>
					<div class="flex justify-end mt-4">
						<button
							class="px-4 py-2 mr-2 text-white bg-red-500 rounded hover:bg-red-600"
							onClick={closeModal}
						>
							Cancel
						</button>
						<button onClick={handleDelete} class="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">Delete</button>
					</div>
				</div>
			</div>
			<div class={`fixed w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-evenly bg-slate-950 text-seagull-100 ${msg ? '' : 'hidden'}`}>
				<p className="text-red-400 text-3xl text-center">{msg}</p>
				<button
					class="px-4 py-2 mr-2 text-white bg-red-500 rounded hover:bg-red-600"
					onClick={() => setMsg('')}
				>
					Close
				</button>
			</div >
		</>
	);
}
