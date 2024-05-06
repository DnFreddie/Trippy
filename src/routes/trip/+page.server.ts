import { getChalanges } from '$lib';
import type { Chalange } from '$lib';
export const actions = {
	addRef: async ({ request }) => {
		const formData = await request.formData();
		const albumImage = formData.get('file')?.valueOf() as File;
		const userDesctription = formData.get('user_desc');
	},


	upPosition: async ({ request }) => {
		const formData = await request.formData();
        console.log(formData)
		const currPosition = formData.get('latitude')
        console.log(currPosition)
	}


};

export async function load({ params }) {
    let ch 

    const r = await fetch("http://127.0.0.1:1323/challenge")
    if (r.ok){
         ch = (await r.json()as {
            id:string,
            latitude:string,
            challenge:string
        })
    }



	return {
		 chalange_list:ch,
	};
}


