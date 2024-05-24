import type { RequestHandler } from '@sveltejs/kit';
import { GMAPS_API } from "$env/static/private";
export const GET: RequestHandler = async ({ url }) => {



     let   latitude =url.searchParams.get('lat');
    let longitude = url.searchParams.get('lng');
    latitude = '37.4219999';
    longitude = '-122.0840575';


    const maps = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GMAPS_API}`;
    console.log(maps)
  // const response = await fetch(test, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json;"
  //   }
  // });

  //const responseData = await response.json();

  return new Response(JSON.stringify("US test descripiton"), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

