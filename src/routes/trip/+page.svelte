<script lang="ts">
import uuid4 from "uuid4";

    import ChalengFiled from '$lib/components/chalengFiled.svelte';
    export let data;

     let someObjects = [];

  const addObject = (obj) => {
    someObjects = [...someObjects, obj];
  }

const removeObject = (id:string) => {
    someObjects = someObjects.filter((todo) => todo.id !== id)
   someObjects = [...someObjects];
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

        <button on:click={() => addObject({ id:uuid4() })}>Add an item</button>

           {#each someObjects as obj (obj.id)}
  <ChalengFiled description={"im done"} currPossiton={[19.613789287429256,52.63097006320834]} object={obj.id} removeComponent={removeObject} />
{/each}



</div>


{/if}
