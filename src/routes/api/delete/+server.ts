import type { RequestHandler } from '@sveltejs/kit';
export const POST: RequestHandler = async ({url}) =>{
    const chId = url.searchParams.get('id');
    const response = await fetch(`http://127.0.0.1:1323/del`, {
	  method: "POST",
      body:JSON.stringify(chId),
	  headers: {
	    "Content-Type": "application/json;"
	  }});
	
	const responseData = await response.text() 
    console.log(responseData)
	return new Response(JSON.stringify(responseData), {
		status: response.status,
		})
	}
