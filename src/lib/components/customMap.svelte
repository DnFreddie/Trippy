<script lang="ts">
	import { MapLibre } from 'svelte-maplibre';
	import { Marker } from 'svelte-maplibre';
	import { Popup } from 'svelte-maplibre';
	import type { LngLatLike } from 'svelte-maplibre';

	//let boundPos
	//[-122.2993, 47.4464]; // Initial position
	export let currPossiton: LngLatLike;
	let message = 'test';

	const updateCurrPosition = (event) => {
		currPossiton = event.detail.lngLat;
		message = currPossiton.toString();
	};

	const getTheLocation = (event) => {
		const cArray: string[] = currPossiton.toString().split(',');

		if (cArray.length == 2) {
			const lng = cArray[0];
			const lat = cArray[1];
			fetch(`/api/cords?lng=${lng}&lat=${lat}`)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					message = data;
				})
				.catch((error) => {
					console.error('Error fetching data:', error);
				});
		}
	};
</script>

<div>
	<MapLibre
		style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
		standardControls
		zoom={4}
		center={[-20, 0]}
		class="w-[300px] h-[300px]"
	>
		<Marker
			lngLat={currPossiton}
			draggable
			on:drag={updateCurrPosition}
			on:dragend={getTheLocation}
		>
			<span
				class="grid h-16 w-16 place-items-center rounded-full border border-gray-200 bg-red-300 text-black shadow-2xl focus:outline-2 focus:outline-blac"
			>
				{message}
			</span>
			<Popup offset={[0, -10]}>
				<div class="text-lg font-bold">{message}</div>
			</Popup>
		</Marker>
	</MapLibre>

	<input type="hidden" name="latitude" bind:value={currPossiton} />
</div>
