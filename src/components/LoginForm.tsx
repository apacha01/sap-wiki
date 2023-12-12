import { useState } from 'preact/hooks';
import { login } from 'src/lib/apiCalls';

export default function LoginForm() {
	const [user, setUser] = useState<{ username: string, password: string }>({ username: '', password: '' });
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const onUsernameInput = (event) => {
		setError('');
		setUser(u => ({ ...u, username: event.target.value }));
	};

	const onPasswordInput = (event) => {
		setError('');
		setUser(u => ({ ...u, password: event.target.value }));
	};

	const onSubmit = async (event: Event) => {
		event.preventDefault();
		setLoading(true);

		const formData = new FormData(event.target as HTMLFormElement);
		const username = String(formData.get('username'));
		const password = String(formData.get('pwd'));

		const hashedPassword = await encryptInfo(username, password) ?? '';

		if (hashedPassword)
			await login({ name: String(formData.get('username')), password: hashedPassword })
				.then(res => {
					if (res.error) {
						setError(res.error);
						return;
					}

					localStorage.setItem('token', res.token);
					const base64Url = res.token.split('.')[1];
					const base64 = base64Url.replace('-', '+').replace('_', '/');
					const decodedPayload = JSON.parse(atob(base64));

					if (decodedPayload.role.localeCompare('admin') === 0)
						window.location.href = window.location.origin + '/menu-admin';
					else window.location.href = window.location.origin + '/';
				})
				.catch(console.error)
				.finally(() => setLoading(false));
		else {
			setError('Error encrypting password');
		}
	};

	const encryptInfo = async (username: string, password: string) => {
		// Derive key from password
		// https://github.com/diafygi/webcrypto-examples#pbkdf2---generatekey
		const hashedPassword = await window.crypto.subtle.importKey(
			'raw', // only "raw" is allowed
			new Uint8Array(new TextEncoder().encode(password)), // your password
			{
				name: 'PBKDF2',
			},
			false, // whether the key is extractable (i.e., can be used in exportKey)
			['deriveKey'] // can be any combination of "deriveKey" and "deriveBits"
		)
			.then(async importedKey => {
				const derivedKey = await crypto.subtle.deriveKey(
					{
						name: 'PBKDF2',
						salt: new Uint8Array(new TextEncoder().encode(username)),
						iterations: 600001,
						hash: 'SHA-256',
					},
					importedKey,
					{ name: 'AES-CBC', length: 256 },
					true, // so i can send it later
					['encrypt', 'decrypt']
				);

				// Export the derived key material
				const exportedKeyMaterial = await crypto.subtle.exportKey('raw', derivedKey);

				return Array.from(new Uint8Array(exportedKeyMaterial), (byte) => byte.toString(16).padStart(2, '0')).join('');
			})
			.catch((err) => {
				document.getElementById('err')?.classList.remove('hidden');
				console.error(err);
			});

		// Now 'hashedPassword' contains a string with a hex number, to avoid sending the password itself.
		return hashedPassword;
	};

	return (
		<form id="form" class="relative flex flex-col justify-between w-full sm:w-96 h-96 bg-white border-[3px] border-black rounded-lg mx-auto p-10" onSubmit={onSubmit}>
			<label for="username" class="text-black text-xl font-sap tracking-wider">
				Username
				<input class="bg-[#ccc] text-black w-full h-12 pl-3 rounded-md text-2xl font-libsans font-bold"
					type="text"
					name="username"
					id="username"
					value={user.username}
					placeholder="Enter username..."
					pattern="^[\w\-$@!]{2,}$"
					title="Enter your username of at least 2 characters. Only letters and the following special characters are allowed: -, $, @, or !.'"
					required
					onInput={onUsernameInput}
				/>
			</label>
			<label for="pwd" class="text-black text-xl font-sap tracking-wider">
				Password
				<input class="bg-[#ccc] text-black w-full h-12 pl-3 rounded-md text-2xl font-libsans font-bold"
					type="password"
					name="pwd"
					id="pwd"
					value={user.password}
					placeholder="Enter password..."
					pattern="^[\w@$!%*?&]{4,}$"
					title="Enter a password of at least 4 characters. Only letters and the following special characters are allowed: @, $, !, %, *, ? or &."
					required
					onInput={onPasswordInput}
				/>
			</label>
			{
				loading
					? (
						<button disabled class="bg-sap-button shadow-[inset_0px_-10px_0px] shadow-sap-button-shadow py-3 rounded-lg border-[3px] border-black text-2xl font-sap text-sap-button-text">
							<span class="block bg-loader bg-cover aspect-square w-10 max-h-full mx-auto animate-[spin_2s_linear_infinite]"></span>
						</button>
					)
					: (
						<button class="bg-sap-button shadow-[inset_0px_-10px_0px] shadow-sap-button-shadow py-3 rounded-lg border-[3px] border-black text-2xl font-sap text-sap-button-text active:shadow-none active:translate-y-2 active:scale-y-95">
							Log In
						</button>
					)
			}
			{
				error
					? <p class="absolute bottom-1 text-red-700 font-sap">{error}</p>
					: null
			}
		</form>
	);
}
