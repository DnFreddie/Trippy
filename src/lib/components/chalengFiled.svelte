<script lang="ts">
	export let description: string;
    import CustomMap from "./customMap.svelte";
	import ChalangeForm from "./chalangeForm.svelte";
    import  type { LngLatLike } from "svelte-maplibre";
    import { storeFE } from "$lib/stores/store";
    export let objAttributes = {};


function removeComponent() {
		$storeFE = $storeFE.filter(function(value, index, arr){ 
			if (value.id != objAttributes.id) return value;
		});
	}

export let currPossiton:LngLatLike

    function toggleMap() {
        showMap = !showMap
    }




let showMap = false

</script>

<div class="   px-4 py-8 bg-blue-50 rounded-lg shadow-md"id={objAttributes.id}>
    	<button on:click={removeComponent}>x</button>

<div>
            <div class="flex justify-end ">
<button 
    on:mouseover={toggleMap} 
    on:mouseout={toggleMap} 
    on:focus={toggleMap} 
    on:blur={toggleMap}
  >
    <img src="/map_Icon.jpg" alt="map icon">
  </button>
            </div>
        <div class=" {showMap ? 'flex' : 'hidden'}">

<CustomMap currPossiton={currPossiton}/>
        </div>
        </div>

    <div class="  {showMap ? 'hidden' : 'flex'}">
        <ChalangeForm  description={description}/>
    </div>
</div>
