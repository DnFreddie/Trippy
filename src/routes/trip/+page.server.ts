import uuid4 from "uuid4";

interface Chalange {
    id: string;
    description: string;
    img: File;
    cordinace?: string;
}

import { json } from '@sveltejs/kit';

export const actions = {
    addRef: async ({ request }: { request: Request }) => {

const formData = await request.formData();
const imageArray = formData.getAll('test') as File[];
const description = formData.getAll('user_desc') as string[];
const cords = formData.getAll('latitude') as string[];


if (imageArray.length !== description.length) {
    return; 
}

let chalangeArray: Chalange[] = [];

imageArray.forEach((img: File, index: number) => {
    let  id = uuid4();
    let newChalange: Chalange = {
        id, 
        description: description[index],
        img,
        cordinace:cords[index]
    };
    chalangeArray.push(newChalange);
});
    const body =  JSON.stringify(chalangeArray)
  const response = await fetch("http://127.0.0.1:1323/add", {
    method: "POST",
    body:body, 
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  });
console.log(response.text)
  const responseData = await response.text()
    console.log(responseData)



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


