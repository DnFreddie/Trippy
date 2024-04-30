<script lang="ts">
	import ChalengFiled from '$lib/components/chalengFiled.svelte';
	export let data;
    import CustomMap from '$lib/components/customMap.svelte';

</script>


<div class="grid grid-cols-1 grid-rows-1 md:grid-rows-2 md:grid-cols-2">
{#each data.chalange_list as item }

	<ChalengFiled description={item.quote} />

{/each}






</div>
<div class="flex justify-center py-10">

<CustomMap/>
</div>
