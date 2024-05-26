import type { RequestHandler } from '@sveltejs/kit';
import type { ChalngeField } from '$lib';
export const GET: RequestHandler = async () => {
    let ch: ChalngeField[] = [];

    try {
        const r = await fetch('http://127.0.0.1:1323/challenge');
        if (r.ok) {
            ch = await r.json();
            ch.forEach(item => {
                console.log(item.id);
            });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    return new Response(JSON.stringify(ch), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};


