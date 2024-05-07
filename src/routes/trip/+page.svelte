<script lang="ts">
    import ChalengFiled from '$lib/components/chalengFiled.svelte';
    export let data;

    import { storeFE,idIncrement } from '$lib/stores/store.js';
$storeFE = [
];
idIncrement.set(0);	
function addItem(){
		var l = $storeFE.length;	// get our current items list count
		$storeFE[l] = { id:$idIncrement, name: 'Another option', otherattrib: "additional note" };
		$idIncrement++;	
}



</script>

{#if data.error }
    <p>there was an erroor</p>
    

    {:else}
<div class="grid grid-cols-1 grid-rows-1 md:grid-rows-2 md:grid-cols-2">
    {#each data.chalange_list as item, index }
        {#if index === 0} 
            <div class="flex-row flex">
                <ChalengFiled description={item.description} currPossiton={[19.613789287429256,52.63097006320834]} />
                <div class="flex justify-center py-10 w-[300px] h-[100px]">
                </div>
            </div>
        {/if}
    {/each}

<button on:click={addItem}>Add an item</button>
	{#each $storeFE as item}
                <ChalengFiled description={"im done "} currPossiton={[19.613789287429256,52.63097006320834]}  objAttributes={item}/>
	{/each}


</div>


{/if}
