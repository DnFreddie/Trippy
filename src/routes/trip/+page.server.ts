import { getChalanges } from '$lib';
import type { Chalange } from '$lib';
export const actions = {
	addRef: async ({ request }) => {
		const formData = await request.formData();
		const albumImage = formData.get('file')?.valueOf() as File;
		const userDesctription = formData.get('user_desc');
	}
};

export async function load({ params }) {
	let  chalange_list: Chalange[] =   await getChalanges(1)
	return {
		 chalange_list:chalange_list
	};
}
