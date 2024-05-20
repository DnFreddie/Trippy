//import { getChalanges } from '$lib';
//import type { Chalange } from '$lib';
import { json } from '@sveltejs/kit';

export const actions = {
    addRef: async ({ request }: { request: Request }) => {
        const formData = await request.formData();
        console.log('Form Data:', formData);
        
        const albumImage = formData.getAll('test') as File[];
        console.log('Album Image:', albumImage);
        
        const userDescription = formData.getAll('user_desc') as string[];
        console.log('User Description:', userDescription);

        // Handle the data as needed, for example, save to a database or cloud storage

    },


    upPosition: async ({ request }: { request: Request }) => {
		const formData = await request.formData();
        console.log('Form Data:', formData);
		const latitude = formData.get('latitude');
        const longitude = formData.get('longitude');
        console.log('Current Position:', { latitude, longitude });

        // Handle the data as needed

        return json({ success: true });
	}
};


export async function load() {
    let ch 

    const r = await fetch("http://127.0.0.1:1323/challenge")
    if (r.ok){
         ch = (await r.json()as {
            id:string,
            latitude:string,
            challenge:string
        })
    }

//TODO!  make it so it returens smth ecen if undefined 

	return {
		 chalange_list:ch,

	};
}


