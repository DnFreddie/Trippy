<script lang="ts">
  import { MapLibre} from 'svelte-maplibre';
  import { DefaultMarker } from 'svelte-maplibre';
  import { Popup } from 'svelte-maplibre';
  import type { LngLatLike } from 'svelte-maplibre';
  
  //let boundPos
      //[-122.2993, 47.4464]; // Initial position
export let currPossiton:LngLatLike

  function updateCurrPosition(event) {
    currPossiton = event.detail.lngLat;
  }
</script>

<div>

<MapLibre
  style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
  standardControls
  zoom={4}
  center={[-20, 0]}
    class="w-[300px] h-[300px]"


>
  <DefaultMarker
    lngLat={currPossiton}
    draggable
        on:drag={updateCurrPosition}
  >
    <span> Drag me ! </span>
<Popup offset={[0, -10]}>
        <div class="text-lg font-bold">"shflkjajfklafjk"</div>
      </Popup>


  </DefaultMarker>

 </MapLibre>


  <input type="hidden" name="latitude" bind:value={currPossiton} />

</div>
