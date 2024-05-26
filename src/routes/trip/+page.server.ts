import uuid4 from 'uuid4';
import type  { ChalngeField } from '$lib';

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
			//const img = imageArray[index];
			const id = uuid4();
			const desc = description[index];
			const c = cords[index];
			const newChallenge: ChalngeField = {
				id: id,
				description: desc,
				//img: new Blob([img]),
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

};

export async function load() {
    let ch = []; 

    try {
        const r = await fetch('http://127.0.0.1:1323/challenge');
        if (r.ok) {
            ch = await r.json();
            ch.forEach(item => {
                console.log(item.id);
            });
        }
    } catch (error) {


    }

    return {
        chalange_list: ch || []
    };
}

