<template>
    <div class="flex flex-col">
        <div
            class="py-7 px-4 bg-transparent shadow-md rounded-xl w-full h-auto flex flex-col md:flex-row justify-between items-center gap-5 md:gap-40 lg:gap-56">
            <div class="flex flex-row gap-3 items-center">
                <img class="w-20 h-20" src="https://i.pinimg.com/736x/92/90/81/929081d869b3c97b9a3b73477be4b279.jpg" alt="">
                <h1 class="text-2xl md:text-5xl font-bold text-teal-700">SkillSwap Hub</h1>
            </div>
            <div
                class="bg-gray-100 shadow-md rounded-xl w-full py-6 px-3 flex flex-row items-center justify-center gap-5">
                <h1 class="text-teal-700 text-lg md:text-xl font-bold">Category:</h1>
                <input 
                    class="w-full py-3 border-4 border-teal-600 rounded-xl px-4" 
                    type="text"
                    v-model="searchQuery"
                    placeholder="search for a Category">
            </div>
        </div>
        <MainContent :searchQuery="searchQuery" />
        <h2 class="text-transparent mt-28 text-xs" >jhksjks</h2>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import MainContent from './MainContent.vue'

const searchQuery = ref('')

</script>

<style scoped></style>