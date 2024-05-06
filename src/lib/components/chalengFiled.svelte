<script lang="ts">
	export let description: string;
    import CustomMap from "./customMap.svelte";
	import ChalangeForm from "./chalangeForm.svelte";
    import  type { LngLatLike } from "svelte-maplibre";


export let currPossiton:LngLatLike

    function toggleMap() {
        showMap = !showMap
    }

let showMap = false

</script>

<div class="px-4 py-8 bg-blue-50 rounded-lg shadow-md">
    {#if showMap}
<div>
            <div class="flex justify-end">
<button 
    on:mouseover={toggleMap} 
    on:mouseout={toggleMap} 
    on:focus={toggleMap} 
    on:blur={toggleMap}
  >
    <img src="/map_Icon.jpg" alt="map icon">
  </button>

            </div>
<CustomMap currPossiton={currPossiton}/>
        </div>

    {:else}

    <div class="justify-end flex items-end mb-4"><button 
    on:mouseover={toggleMap} 
    on:mouseout={toggleMap} 
    on:focus={toggleMap} 
    on:blur={toggleMap}>
    <img src="/map_Icon.jpg" alt="map icon">
  </button>
    </div>
        <ChalangeForm description={description}/>
    {/if}
</div>
