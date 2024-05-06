<script lang="ts">
    import ChalengFiled from '$lib/components/chalengFiled.svelte';
    export let data;
</script>

<div class="grid grid-cols-1 grid-rows-1 md:grid-rows-2 md:grid-cols-2">
    {#each data.chalange_list as item, index }
        {#if index === 0} <!-- Check if index is 0, meaning it's the first iteration -->
            <div class="flex-row flex">
                <ChalengFiled description={item.description} currPossiton={[17.613789287429256,52.63097006320834]} />
                <div class="flex justify-center py-10 w-[300px] h-[100px]">
                </div>
            </div>
        {/if}
    {/each}
</div>

