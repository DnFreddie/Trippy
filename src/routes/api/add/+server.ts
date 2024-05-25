import type { RequestHandler } from '@sveltejs/kit';

// Ensure the Chalange type is defined somewhere in your code
type Chalange = {
	id: number;
	quote: string;
	author: string;
};

export const POST: RequestHandler = async ({ request }) => {
	const sampleChallenge: Chalange = { id: 123, quote: 'shkdjsaj', author: 'xde' };

	const response = await fetch('http://127.0.0.1:1323/add', {
		method: 'POST',
		body: JSON.stringify(sampleChallenge),
		headers: {
			'Content-Type': 'application/json;'
		}
	});

	const responseData = await response.json();

	return new Response(JSON.stringify(responseData), {
		status: response.status,
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
