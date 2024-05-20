<script lang="ts">
    import CustomMap from "./customMap.svelte";
    import type { LngLatLike } from "svelte-maplibre";
    import uuid4 from "uuid4";

    interface ChallengeItem {
        id: string;
        uploadedImage: string;
        description: string;
        showMap: boolean; 
    }

    let chalange_list: ChallengeItem[] = [];

    export let currPossiton: LngLatLike;

    const addObject = () => {
        chalange_list = [...chalange_list, { id: uuid4(), uploadedImage: '', description: '', showMap: false }];
    };

    const removeObject = (id: string) => {
        chalange_list = chalange_list.filter(ch_field => ch_field.id !== id);
    };

    function toggleMap(id: string) {
        chalange_list = chalange_list.map(item =>
            item.id === id ? { ...item, showMap: !item.showMap } : item
        );
    }

    function handleImageUpload(e: Event, id: string) {
        const image = (e.target as HTMLInputElement)?.files?.[0];
        if (!image) return;
        const objectUrl = URL.createObjectURL(image);
        chalange_list = chalange_list.map(item =>
            item.id === id ? { ...item, uploadedImage: objectUrl } : item
        );
    }
</script>
<form method="post" id="s-filed" enctype="multipart/form-data" class="space-y-6 t p-8 rounded-lg shadow-md justify-center w-full">
    <div class="grid grid-cols-1 grid-rows-1 md:grid-rows-2 xl:grid-cols-3 gap-4">
        {#each chalange_list as item (item.id)}
            <div class="p-6 bg-[#1F232B] rounded-lg shadow-md relative">
                <button 
                    type="button" 
                    on:click={() => removeObject(item.id)}
                    class="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
                >
                </button>
                <div>
                    <h2 class="text-3xl font-semibold text-[#E29F5D] mb-6">Share your Tropical Moment</h2>
                    <div class="flex justify-end mb-4">
                        <button 
                            type="button"
                            on:click={() => toggleMap(item.id)}
                            class="bg-gray-200 hover:bg-gray-300 rounded-full p-2"
                        >
                            <img src="/map_Icon.jpg" alt="map icon" class="w-6 h-6">
                        </button>
                    </div>
                    <div class={item.showMap ? 'block' : 'hidden'}>
                        <CustomMap {currPossiton} />
                    </div>
                    <div class={!item.showMap ? 'block' : 'hidden'}>
                        <input
                            type="text"
                            name="user_desc"
                            class="mb-4 bg-[#121212] text-center border border-gray-300 rounded-md py-2 w-[300px] placeholder-gray-500 text-gray-500"
                            bind:value={item.description}
                            placeholder="Describe your tropical memory..."
                        />

                        <div>
                            {#if item.uploadedImage}
                                <div class="mt-4">
                                    <img src={item.uploadedImage} class="max-w-50ch" alt="Tropical Moment" />
                                </div>
                            {/if}

                            <input
                                type="file"
                                name="test"
                                accept="image/*"
                                class="block mb-4 border rounded-md py-2 px-3 bg-[#121212] text-gray-500"
                                on:change={(e) => handleImageUpload(e, item.id)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
    <div class="flex justify-between">
        <button
            class="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
            type="button"
            on:click={addObject}
        >
            <span class="material-symbols-outlined text-xl">add</span>
        </button>
        <button
            class="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded"
            type="submit"
            formaction="?/addRef"
        >
            <div class="flex items-center space-x-2">
                <span class="material-symbols-outlined text-xl">save</span>
                <span class="text-lg">Save Memories</span>
            </div>
        </button>
    </div>
</form>

