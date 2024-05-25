import uuid4 from 'uuid4';

interface ChalngeField {
	id: string;
	description: string;
	img: string;
	cordinace?: string;
}

import { json } from '@sveltejs/kit';
export const actions = {
		addRef: async ({ request }: { request: Request }) => {
		const formData = await request.formData();
		const imageArray = formData.getAll('test') as File[];
		const description = formData.getAll('user_desc') as string[];
		const cords = formData.getAll('latitude') as string[];

		let chalangeArray: ChalngeField[] = [];
		if (imageArray.length !== description.length || imageArray.length !== cords.length) {
			return;
		}


		for (let index = 0; index < imageArray.length; index++) {
			const img = imageArray[index];
			const id = uuid4();
			const desc = description[index];
			const c = cords[index];

			const buffer = await img.arrayBuffer();
			const uint8Array = new Uint8Array(buffer);
            const base64String = btoa(String.fromCharCode(...uint8Array));


			const newChallenge: ChalngeField = {
				id: id,
				description: desc,
				img: base64String,
				cordinace: c
			};

			chalangeArray.push(newChallenge);
		}

        if (chalangeArray.length == 0){
        return console.log("This lentg is 0 for some reson :",chalangeArray.length)
        }
        console.log(chalangeArray.length)

		const body = JSON.stringify(chalangeArray);
		const response = await fetch('http://127.0.0.1:1323/add', {
			method: 'POST',
			body: body,
			headers: {
				'Content-Type': 'application/json; charset=UTF-8'
			}
		});
		const responseData = await response.text();
		console.log(responseData);
	},

	upPosition: async ({ request }: { request: Request }) => {
		const formData = await request.formData();
		console.log('Form Data:', formData);
		const latitude = formData.get('latitude');
		const longitude = formData.get('longitude');
		console.log('Current Position:', { latitude, longitude });

		return json({ success: true });
	}
};

export async function load() {
	let ch;

	const r = await fetch('http://127.0.0.1:1323/challenge');
	if (r.ok) {
		ch = (await r.json()) as {
			id: string;
			latitude: string;
			challenge: string;
		};
	}

	//TODO!  make it so it returens smth ecen if undefined

	return {
		chalange_list: ch
	};
}
