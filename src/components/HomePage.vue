<template>
  <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo/Brand -->
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
            <div class="relative">
              <img class="w-14 h-14 transform group-hover:scale-110 transition-transform duration-300" 
                   src="@/assets/images/oou.png" 
                   alt="oou logo">
              <div class="absolute inset-0 bg-pink-500 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>
            <h1 class="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text group-hover:from-pink-600 group-hover:to-pink-500 transition-all">
              OOU
            </h1>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-1">
          <a href="#imp"
            class="text-gray-700 hover:text-pink-600 px-4 py-2 rounded-xl text-base font-semibold transition-all duration-200 hover:bg-gray-50">
            Leadership
          </a>

          <a href="#campus"
            class="text-gray-700 hover:text-pink-600 px-4 py-2 rounded-xl text-base font-semibold transition-all duration-200 hover:bg-gray-50">
            Campus Blocks
          </a>

          <a href="#contact"
            class="text-gray-700 hover:text-pink-600 px-4 py-2 rounded-xl text-base font-semibold transition-all duration-200 hover:bg-gray-50">
            Contact Us
          </a>

          <div @mouseenter="showTooltip = true" @mouseleave="showTooltip = false"
            class="relative ml-2">
            <button @click="goToSite"
              class="flex items-center gap-2 text-gray-700 hover:text-pink-600 px-4 py-2 rounded-xl text-base font-semibold transition-all duration-200 hover:bg-gray-50 border border-gray-200 hover:border-pink-300">
              <span>OOU Portal</span>
              <i class="bi bi-box-arrow-up-right text-sm"></i>
            </button>

            <!-- Tooltip with image -->
            <Transition enter-active-class="transition-all duration-300 ease-out" 
                        enter-from-class="opacity-0 translate-y-2 scale-95"
                        enter-to-class="opacity-100 translate-y-0 scale-100" 
                        leave-active-class="transition-all duration-200 ease-in"
                        leave-from-class="opacity-100 translate-y-0 scale-100" 
                        leave-to-class="opacity-0 translate-y-2 scale-95">
              <div v-if="showTooltip"
                class="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-2xl shadow-2xl p-3 z-50 min-w-max border border-gray-100">
                <div class="relative overflow-hidden rounded-xl">
                  <img src="@/assets/images/oou2.png" 
                       alt="Website Preview" 
                       class="w-80 h-48 object-cover">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <p class="text-sm text-gray-600 mt-3 text-center font-medium">Preview of OOU Portal</p>

                <!-- Tooltip arrow -->
                <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45"></div>
              </div>
            </Transition>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="hidden lg:block">
          <router-link to="/signup">
            <button class="group bg-black hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <span>Get Started</span>
              <i class="bi bi-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </button>
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="lg:hidden">
          <button @click="toggleMobile" 
                  class="text-gray-700 hover:text-pink-600 p-2 rounded-xl transition-all duration-200 hover:bg-gray-50"
                  :class="{ 'text-pink-600 bg-gray-50': isMobileOpen }">
            <i class="bi bi-list text-2xl" v-if="!isMobileOpen"></i>
            <i class="bi bi-x-lg text-2xl" v-if="isMobileOpen"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <Transition enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 -translate-y-4"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-4">
      <div class="lg:hidden" v-show="isMobileOpen">
        <div class="px-4 pt-2 pb-6 space-y-2 border-t border-gray-100 bg-white/95 backdrop-blur-md">

          <a href="#imp" @click="toggleMobile"
            class="block text-gray-700 hover:text-pink-600 hover:bg-gray-50 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200">
            <i class="bi bi-people mr-3"></i>
            Leadership
          </a>

          <a href="#campus" @click="toggleMobile"
            class="block text-gray-700 hover:text-pink-600 hover:bg-gray-50 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200">
            <i class="bi bi-building mr-3"></i>
            Campus Blocks
          </a>

          <a href="#contact" @click="toggleMobile"
            class="block text-gray-700 hover:text-pink-600 hover:bg-gray-50 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200">
            <i class="bi bi-envelope mr-3"></i>
            Contact Us
          </a>

          <button @click="goToSite"
            class="w-full text-left text-gray-700 hover:text-pink-600 hover:bg-gray-50 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 border border-gray-200">
            <i class="bi bi-box-arrow-up-right mr-3"></i>
            Go To OOU Portal
          </button>

          <!-- Mobile CTA -->
          <router-link to="/signup" @click="toggleMobile">
            <button class="w-full mt-4 bg-black hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-500 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
              <span>Get Started</span>
              <i class="bi bi-arrow-right"></i>
            </button>
          </router-link>
        </div>
      </div>
    </Transition>
  </nav>

  <!-- Main content -->
  <MainContent />
</template>

<script setup>
import MainContent from './MainContent.vue'
import { ref } from 'vue'

const isMobileOpen = ref(false)
const showTooltip = ref(false)

const goToSite = () => {
  window.open('https://www.oouagoiwoye.edu.ng/portal/', '_blank')
}

const toggleMobile = () => {
  isMobileOpen.value = !isMobileOpen.value
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>