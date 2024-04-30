<script lang="ts">
  import { MapLibre, Marker } from 'svelte-maplibre';
  import { DefaultMarker } from 'svelte-maplibre';
  import { Popup } from 'svelte-maplibre';
  //let boundPos = [-122.2993, 47.4464]; // Initial position
</script>

<MapLibre
  style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
  standardControls
  zoom={4}
  center={[-20, 0]}
    class="w-[1200px] h-[1220px]"


>
  <DefaultMarker
    lngLat={[19.490642387228547, 51.78179434298437]}
    draggable
    on:drag={(event) => {
      console.log("Current position:", event.detail.lngLat);
    }}
  >
    <span> Drag me ! </span>
<Popup offset={[0, -10]}>
        <div class="text-lg font-bold">"shflkjajfklafjk"</div>
      </Popup>


  </DefaultMarker>

 </MapLibre>


