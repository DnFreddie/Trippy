<script lang="ts">
	import ChalengFiled from '$lib/components/chalengFiled.svelte';

    export let data
    let chalange_fileds = data.chalange_list 


</script>
<div class="flex min-h-screen bg-[#292401]">

	<ChalengFiled currPossiton={[19.613789287429256, 52.63097006320834]} chalange_list={chalange_fileds}/>
</div>
