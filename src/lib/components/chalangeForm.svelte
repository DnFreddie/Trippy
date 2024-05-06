<script lang="ts">
    let uploadedImage: string;
    export let description: string;

    function handleImageUpload(e: Event) {
        const image = (e.target as HTMLInputElement)?.files?.[0];
        if (!image) return;
        uploadedImage = URL.createObjectURL(image);
    }
</script>

<form method="post" enctype="multipart/form-data">
    <input
        type="text"
        name="user_desc"
        class="hidden mb-4 border border-gray-300 rounded-md py-2 px-3 bg-white"
        bind:value={description}
    />

    <p>Test desc {description}</p>
    <!--  Upload photo section -->
    <div>
        <h2 class="text-3xl font-semibold font-vfont mb-6">Place for the Photo</h2>

        {#if uploadedImage}
            <div class="mt-4">
                <img src={uploadedImage} class="max-w-50ch" alt="" />
            </div>
        {/if}

        <input
            type="file"
            name="file"
            accept="image/*"
            class="block mb-4 border border-gray-300 rounded-md py-2 px-3 bg-white"
            on:change={handleImageUpload}
        />

        <div class="mt-6">
            <button
                class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
                type="submit"
                formaction="?/addRef"
                disabled={!uploadedImage ?? null}
            >
                Upload Image
            </button>
        </div>
    </div>
</form>

