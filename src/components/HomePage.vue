<template>
  <nav class="bg-white shadow-lg rounded-2xl mx-4 lg:mx-8 xl:mx-auto xl:max-w-6xl ">
    <div class="px-0">
      <div class="flex justify-between items-center h-16">
        <!-- Logo/Brand -->
        <div class="flex items-center px-4">
          <div class="flex-shrink-0 flex items-center flex-row gap-2">
            <img class="w-14 h-14" src="@/assets/images/oou.png" alt="oou logo">
            <h1 class="text-xl font-bold text-gray-800">OOU</h1>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a href="#imp"
              class="text-black hover:text-pink-600 px-3 py-2 rounded-md text-xl font-medium transition duration-200 flex items-center">
              imp
            </a>

            <a href="#campus"
              class="text-black hover:text-pink-600 px-3 py-2 rounded-md text-xl font-medium transition duration-200 flex items-center">
              Campus Blocks
            </a>

            <a href="#contact"
              class="text-black hover:text-pink-600 px-3 py-2 rounded-md text-xl font-medium transition duration-200 flex items-center">
              Contact US
            </a>

            <div @click="goToSite" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false"
              class="border border-black rounded-xl p-0.5 hover:border-pink-600 hover:scale-110 relative inline-block">
              <a href="#"
                class="text-black hover:text-pink-600 px-3 py-2 rounded-md text-xl font-medium transition duration-200 flex items-center">
                Go To oouportal.com......
              </a>

              <!-- Tooltip with image -->
              <Transition enter-active-class="transition-all duration-200" enter-from-class="opacity-0 scale-95"
                enter-to-class="opacity-100 scale-100" leave-active-class="transition-all duration-150"
                leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                <div v-if="showTooltip"
                  class="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-white border border-gray-300 rounded-lg shadow-xl p-3 z-50 min-w-max">
                  <img src="@/assets/images/oou2.png" alt="Website Preview" class="w-80 h-48 object-cover rounded-md">
                  <p class="text-sm text-gray-600 mt-2 text-center">Preview of OOU Portal</p>

                  <!-- Tooltip arrow -->
                  <div
                    class="absolute bottom-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-gray-300 rotate-45">
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>

        <!-- User Menu -->
        <div class="hidden lg:block bg-black hover:bg-pink-600 hover:scale-110 p-5 rounded-3xl">
          <router-link to="/signup">
            <h1 class="text-white font-bold">Get started</h1>
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button @click="toggleMobile" class="text-gray-700 hover:text-blue-600 p-2 rounded-md transition duration-200"
            :class="{ 'text-blue-600': isMobileOpen }">
            <i class="bi bi-list text-xl" v-if="!isMobileOpen"></i>
            <i class="bi bi-x-lg text-xl" v-if="isMobileOpen"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div class="lg:hidden" v-show="isMobileOpen">
      <div class="px-2 pt-2 pb-3 space-y-3 sm:px-3 border-t border-gray-200">

        <a href="#imp"
          class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition duration-200">
          <i class="bi bi-info-circle mr-2"></i>
          imp
        </a>

        <a href="#campus"
          class="text-black hover:text-pink-600 px-3 py-2 rounded-md text-xl font-medium transition duration-200 flex items-center">
          Campus Blocks
        </a>

        <a href="#contact"
          class="text-black hover:text-pink-600 px-3 py-2 rounded-md text-xl font-medium transition duration-200 flex items-center">
          Contact US
        </a>

        <div @click="goToSite" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false"
          class="border border-black rounded-xl p-0.5 hover:border-pink-600 hover:scale-110 relative inline-block">
          <a href="#"
            class="text-black hover:text-pink-600 px-3 py-2 rounded-md text-xl font-medium transition duration-200 flex items-center">
            Go To oouportal.com......
          </a>

          <!-- Tooltip with image -->
          <Transition enter-active-class="transition-all duration-200" enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100" leave-active-class="transition-all duration-150"
            leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <div v-if="showTooltip"
              class="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-white border border-gray-300 rounded-lg shadow-xl p-3 z-50 min-w-max">
              <img src="@/assets/images/oou2.png" alt="Website Preview" class="w-80 h-48 object-cover rounded-md">
              <p class="text-sm text-gray-600 mt-2 text-center">Preview of OOU Portal</p>

              <!-- Tooltip arrow -->
              <div
                class="absolute bottom-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-t border-l border-gray-300 rotate-45">
              </div>
            </div>
          </Transition>
        </div>


        <!-- User Menu -->
        <div class=" bg-black hover:bg-pink-600 hover:scale-90 p-5 rounded-3xl">
          <router-link to="/signup">
            <h1 class="text-white font-bold">Get started</h1>
          </router-link>
        </div>
      </div>
    </div>

  </nav>

  <!-- main content  -->
  <MainContent />
  <!-- end of main content  -->
</template>

<script setup>
import MainContent from './MainContent.vue'
import { ref } from 'vue'

const isMobileOpen = ref(false)
const showTooltip = ref(false)

const goToSite = () => {
  window.open('https://www.oouagoiwoye.edu.ng/portal/', '_blank') // Opens in new tab
}

const toggleMobile = () => {
  isMobileOpen.value = !isMobileOpen.value
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>