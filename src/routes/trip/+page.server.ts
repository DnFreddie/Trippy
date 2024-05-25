import uuid4 from "uuid4";
import { createReadableStream } from "@sveltejs/kit/node";

interface ChalngeField {
    id: string;
    description: string;
    img: Uint8Array;
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

let chalangeArray: ChalngeField[] = [];

imageArray.forEach(async (img: File, index: number) => {
    const id = uuid4();
    const desc = description[index]; 
    const c  = cords[index]

    const buffer = await img.arrayBuffer(); 
    const uint8Array = new Uint8Array(buffer);

    const newChallenge: ChalngeField = {
        id:id,
        description:desc,
        img: uint8Array,
        cordinace:c
   };

    chalangeArray.push(newChallenge);
});
    const body =  JSON.stringify(chalangeArray)
  const response = await fetch("http://127.0.0.1:1323/add", {
    method: "POST",
    body:body, 
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  });
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


