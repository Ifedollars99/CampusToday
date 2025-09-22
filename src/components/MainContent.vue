<template>
    <div class="flex items-center justify-center px-10 py-10 flex-col gap-7 md:gap-16">
        <div data-aos="fade-down"
            class="border border-black p-4 rounded-2xl flex flex-col md:flex-row gap-3 md:gap-7 items-start md:items-center justify-center">
            <h1 class="text-xs md:text-xl py-1 px-8  bg-black text-white rounded-xl font-bold">Campus Today</h1>
            <h1 class="text-xs md:text-xl font-bold text-black rounded-xl">Make OOU students Education easier and more
                interesting with AcademiaFlow</h1>
            <div><i class="bi bi-caret-right-fill text-xl md:text-3xl text-black"></i></div>
        </div>
        <div class="flex flex-wrap items-center gap-2 justify-center">
            <h1 class="text-black text-2xl md:text-3xl lg:text-4xl font-bold">
                A campus platform that works like a
            </h1>
            <span
                class="text-green-500 hover:text-pink-500 hover:scale-95 transition-transform bg-white/30 border border-white/30 shadow-md rounded-2xl px-4 py-1 text-2xl md:text-4xl font-semibold">
                Community
            </span>
        </div>

        <h1 class="text-black font-medium text-xl md:text-3xl text-center">
            Campus Today helps students stay updated, access resources, and connect seamlessly
            <br class="hidden md:block">
            <span class="block md:block">From class schedules to events.</span>
        </h1>

        <div class="flex flex-row gap-3">
            <router-link to="/signup" >
            <button
                class="bg-black py-2 md:py-3 px-3 md:px-6 rounded-3xl text-white font-normal hover:scale-110 hover:bg-pink-500 text-xl md:text-3xl shadow-md">Get
                started</button>
                </router-link>
            <button
                class="bg-white py-2 md:py-3 px-3 md:px-6 rounded-3xl text-black font-bold hover:scale-90 hover:text-pink-500 text-xl md:text-3xl shadow-md ">Learn
                More.....</button>
        </div>

        <h1 id="campus"
            class="text-gray-500 hover:text-pink-500 animate-bounce text-xl md:text-5xl font-bold self-center mt-10 md:mt-20">
            Views of some Campus Blocks</h1>

        <div class="carousel-container overflow-hidden w-full">
            <div class="carousel-track flex">
                <!-- Original items -->
                <div class="flex-shrink-0 mr-7">
                    <div
                        class="p-4 rounded-2xl bg-white shadow-md hover:scale-95 transition-transform duration-300 w-[440px] h-80">
                        <img class="rounded-xl w-full h-full object-cover" loading="lazy"
                            src="@/assets/images/olabi1.png" alt="an oou picture">
                    </div>
                </div>

                <div class="flex-shrink-0 mr-7">
                    <div
                        class="p-4 rounded-2xl bg-white shadow-md hover:scale-95 transition-transform duration-300 w-[440px] h-80">
                        <img class="rounded-xl w-full h-full object-cover" loading="lazy"
                            src="@/assets/images/olabi2.png" alt="the second oou pic">
                    </div>
                </div>

                <div class="flex-shrink-0 mr-7">
                    <div
                        class="p-4 rounded-2xl bg-white shadow-md hover:scale-95 transition-transform duration-300 w-[440px] h-80">
                        <img class="rounded-xl w-full h-full object-cover" loading="lazy"
                            src="@/assets/images/olabi3.png" alt="the third oou pic">
                    </div>
                </div>

                <!-- Duplicate items for seamless loop -->
                <div class="flex-shrink-0 mr-7">
                    <div
                        class="p-4 rounded-2xl bg-white shadow-md hover:scale-95 transition-transform duration-300 w-[440px] h-80">
                        <img class="rounded-xl w-full h-full object-cover" loading="lazy"
                            src="@/assets/images/olabi1.png" alt="an oou picture">
                    </div>
                </div>

                <div class="flex-shrink-0 mr-7">
                    <div
                        class="p-4 rounded-2xl bg-white shadow-md hover:scale-95 transition-transform duration-300 w-[440px] h-80">
                        <img class="rounded-xl w-full h-full object-cover" loading="lazy"
                            src="@/assets/images/olabi2.png" alt="the second oou pic">
                    </div>
                </div>

                <div class="flex-shrink-0 mr-7">
                    <div
                        class="p-4 rounded-2xl bg-white shadow-md hover:scale-95 transition-transform duration-300 w-[440px] h-80">
                        <img class="rounded-xl w-full h-full object-cover" loading="lazy"
                            src="@/assets/images/olabi3.png" alt="the third oou pic">
                    </div>
                </div>
            </div>
        </div>

        <!-- important figs -->
        <h1 id="imp" class="text-black hover:text-pink-500 text-xl md:text-5xl font-bold self-center mt-10 md:mt-20">
            Some Important Figures of OOU</h1>
        <div class="flex flex-col md:flex-row gap-4 items-center">
            <div
                class="p-4 rounded-2xl bg-white shadow-md hover:scale-95 w-full md:w-80 lg:w-96 h-64 md:h-80 flex-shrink-0">
                <img class="rounded-xl w-full h-full object-cover" loading="lazy" src="@/assets/images/chance1.png"
                    alt="OOU chancellor pic">
            </div>
            <div class="flex-1">
                <h1 class="text-gray-500 text-3xl font-bold">Vice Chancellor🗣️:</h1>
                <h2 class="text-black font-bold text-sm md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.
                    Dolor nam recusandae earum quam magni iure eaque quos vel voluptas. Rerum, laborum ratione ipsa
                    sequi
                    architecto ut, blanditiis ea officia voluptatibus est natus ipsum. Aut consequatur ipsum laboriosam
                    neque obcaecati voluptatibus. Impedit voluptatibus optio quibusdam obcaecati nostrum iusto
                    asperiores
                    laboriosam numquam.</h2>
            </div>
        </div>

        <div class="flex flex-col md:flex-row gap-10 md:gap-4 items-center">
            <div
                class="p-4 rounded-2xl bg-white shadow-md hover:scale-95 w-full md:w-80 lg:w-96 h-64 md:h-80 flex-shrink-0">
                <img class="rounded-xl w-full h-full object-cover" loading="lazy" src="@/assets/images/oba2.png"
                    alt="OOU oba pic">
            </div>
            <div class="flex-1">
                <h1 class="text-gray-500 text-3xl font-bold">Oba (Dr.) S.k. Adetona🗣️:</h1>
                <h2 class="text-black font-bold text-sm md:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Numquam iste vero quae nesciunt et ex dicta. Possimus at asperiores sit sint dolorum? Ab
                    corporis
                    harum id voluptatibus animi labore beatae, atque quisquam laudantium ullam aspernatur vero
                    blanditiis
                    similique totam delectus quidem repellendus cupiditate laboriosam, et veniam enim nihil porro quas.
                </h2>
            </div>
        </div>

        <div class="flex flex-col md:flex-row gap-4 items-center">
            <div
                class="p-4 rounded-2xl bg-white shadow-md hover:scale-95 w-full md:w-80 lg:w-96 h-64 md:h-80 flex-shrink-0">
                <img class="rounded-xl w-full h-full object-cover" loading="lazy" src="@/assets/images/vice3.png"
                    alt="OOU director pic">
            </div>
            <div class="flex-1">
                <h1 class="text-gray-500 text-3xl font-bold">Director General🗣️:</h1>
                <h2 class="text-black font-bold text-sm md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing
                    elit.
                    Praesentium officia fuga mollitia harum, dignissimos distinctio aspernatur recusandae reiciendis
                    debitis
                    nam! Tempore consectetur, iure itaque dicta rerum odio harum, quisquam omnis architecto quo nihil
                    officiis obcaecati suscipit laudantium officia, eum sit praesentium. Quam itaque, dolorum eum alias
                    eaque sit eveniet culpa.</h2>
            </div>
        </div>

        <!-- Contact US -->
        <h1 id="contact"
            class="text-black hover:text-pink-500 text-xl md:text-5xl font-bold self-center mt-10 md:mt-20">
            Contact Us (the developer) on</h1>
        <div>
            <a href="https://wa.me/2348137628419?text=Hello%20%F0%9F%91%8B%20i%20am%20.........%20by%20name%20and%20i%20saw%20your%20website"
                target="_blank" rel="noopener noreferrer">
                <i class="bi bi-whatsapp text-4xl text-green-500"></i>
            </a>
        </div>
    </div>
    <!-- footer  -->
    <div class="bg-gray-900 w-full h-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-20 gap-5">
        <div>
            <h1 class="text-white hover:text-blue-500 font-bold text-sm md:text-xl">Contact US (OOU) @</h1>
            <h1 class="text-white hover:text-blue-500 font-normal text-xs md:text-lg mt-10">location_on : Road 9, Olabisi
                Onabanjo
                University Main Campus,Ago-Iwoye,Ogun State,Nigeria.</h1>
            <h1 class="text-white hover:text-blue-500 font-normal text-xs md:text-lg mt-3">email :
                oskaigs@ooouagoiwoye.edu.ng</h1>
        </div>

        <div class="max-w-md mx-auto">
            <div>
                <h1 class="text-white hover:text-blue-500 font-bold text-sm md:text-xl mb-4">Calendar</h1>

                <!-- Calendar Container -->
                <div class="bg-slate-700 rounded-lg shadow-lg overflow-hidden">
                    <!-- Calendar Header -->
                    <div class="bg-slate-600 px-4 py-3 flex justify-between items-center">
                        <button @click="previousMonth" class="text-white hover:text-gray-300">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 19l-7-7 7-7"></path>
                            </svg>
                        </button>
                        <h2 class="text-white font-semibold text-lg">{{ monthName }} {{ currentYear }}</h2>
                        <button @click="nextMonth" class="text-white hover:text-gray-300">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                </path>
                            </svg>
                        </button>
                    </div>

                    <!-- Calendar Body -->
                    <div class="bg-white text-gray-800">
                        <!-- Day Headers -->
                        <div class="grid grid-cols-7 border-b border-gray-200">
                            <div v-for="day in dayHeaders" :key="day"
                                class="p-3 text-center text-sm font-semibold text-gray-600 bg-gray-50">
                                {{ day }}
                            </div>
                        </div>

                        <!-- Calendar Days -->
                        <div class="grid grid-cols-7">
                            <div v-for="(day, index) in calendarDays" :key="index" @click="selectDate(day)"
                                :class="getDayClasses(day)"
                                class="p-3 text-center text-sm cursor-pointer hover:bg-gray-100 border-r border-b border-gray-100 last:border-r-0">
                                {{ day.date }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Selected Date Display -->
                <div v-if="selectedDate" class="mt-4 p-4 bg-blue-600 rounded-lg text-center">
                    <p class="text-white font-semibold">{{ formatSelectedDate }}</p>
                </div>
            </div>
        </div>

          <div>
            <h1 class="text-white hover:text-blue-500 font-bold text-sm md:text-xl">Copyright © 2025. All Rights Reserved, Made by Ifedollars.</h1>
      
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Reactive state
const currentMonth = ref(new Date().getMonth())
const currentYear = ref(new Date().getFullYear())
const selectedDate = ref(null)
const today = ref(new Date())

// Static data
const dayHeaders = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

// Computed properties
const monthName = computed(() => {
    return monthNames[currentMonth.value]
})

const calendarDays = computed(() => {
    const firstDay = new Date(currentYear.value, currentMonth.value, 1)
    const startDate = new Date(firstDay)

    // Adjust for Monday start (0 = Sunday, 1 = Monday)
    const dayOfWeek = firstDay.getDay()
    const mondayOffset = dayOfWeek === 0 ? 6 : dayOfWeek - 1
    startDate.setDate(firstDay.getDate() - mondayOffset)

    const days = []
    for (let i = 0; i < 35; i++) {
        const date = new Date(startDate)
        date.setDate(startDate.getDate() + i)

        days.push({
            date: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
            fullDate: new Date(date),
            isCurrentMonth: date.getMonth() === currentMonth.value,
            isToday: isSameDay(date, today.value),
            isSelected: selectedDate.value && isSameDay(date, selectedDate.value)
        })
    }

    return days
})

const formatSelectedDate = computed(() => {
    if (!selectedDate.value) return ''
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return selectedDate.value.toLocaleDateString('en-US', options)
})

// Methods
const previousMonth = () => {
    if (currentMonth.value === 0) {
        currentMonth.value = 11
        currentYear.value--
    } else {
        currentMonth.value--
    }
}

const nextMonth = () => {
    if (currentMonth.value === 11) {
        currentMonth.value = 0
        currentYear.value++
    } else {
        currentMonth.value++
    }
}

const selectDate = (day) => {
    if (day.isCurrentMonth) {
        selectedDate.value = new Date(day.fullDate)
    }
}

const isSameDay = (date1, date2) => {
    return date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
}

const getDayClasses = (day) => {
    const classes = []

    if (!day.isCurrentMonth) {
        classes.push('text-gray-300')
    }

    if (day.isToday) {
        classes.push('bg-blue-500', 'text-white', 'font-bold')
    }

    if (day.isSelected && !day.isToday) {
        classes.push('bg-blue-100', 'text-blue-800', 'font-semibold')
    }

    return classes.join(' ')
}
</script>

<style scoped>
.carousel-track {
    animation: scroll 15s linear infinite;
    width: calc(320px * 6 + 1.75rem * 6);
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-320px * 3 - 1.75rem * 3));
    }
}

.carousel-track:hover {
    animation-play-state: paused;
}
</style>