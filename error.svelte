<script>
	import { page } from '$app/stores';
</script>

{#if $page.status == 404}
	<img src="/error_404.png" alt="404 error" />
{:else}
	<img src="/error_503.jpg " alt="404 error" />
{/if}
