<template>
    <div class="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-10">
        <!-- Show message when no results found -->
        <div v-if="filteredCards.length === 0 && searchQuery" class="col-span-full text-center py-10">
            <h2 class="text-2xl text-gray-500">No categories found matching "{{ searchQuery }}"</h2>
            <p class="text-gray-400 mt-2">Try searching for "Guitar", "Photography", or "Story"</p>
        </div>

        <!-- Display filtered cards -->
        <div v-for="card in filteredCards" :key="card.id" :class="card.borderColor" data-aos="fade-up">
            <div class="flex flex-row gap-2 items-center">
                <h1 :class="card.titleColor">Category:</h1>
                <h1 :class="card.categoryStyle">{{ card.category }}</h1>
            </div>
            <div class="flex flex-row p-2 gap-4 justify-between">
                <div class="flex flex-col flex-1">
                    <div class="flex flex-col gap-3">
                        <div class="flex flex-row gap-2">
                            <img class="w-14 h-14 rounded-full" :src="card.leftUser.avatar" alt="">
                            <h1 class="text-black text-sm font-bold mt-1">{{ card.leftUser.name }}</h1>
                        </div>
                        <h1 class="text-black text-sm md:text-xl font-bold mt-1">{{ card.leftUser.offer }}</h1>
                        <div class="flex flex-col gap-2">
                            <h1 class="text-black text-sm font-bold mt-1">Level:</h1>
                            <h1 :class="card.levelStyle">{{ card.leftUser.level }}</h1>
                        </div>
                        <div class="flex flex-col gap-2">
                            <h1 class="text-black text-sm font-bold mt-1">Feedback:</h1>
                            <h1 :class="card.feedbackStyle">{{ card.leftUser.feedback }}</h1>
                            <div class="flex flex-row gap-3">
                                <i v-for="star in 5" :key="star" class="bi bi-star-fill text-yellow-500 text-sm md:text-xl"></i>
                            </div>
                        </div>
                    </div>
                    <img class="w-full" :src="card.leftUser.image" alt="">
                </div>

                <div class="flex flex-col flex-1">
                    <div class="flex flex-col gap-3">
                        <div class="flex flex-row gap-2">
                            <img class="w-14 h-14 rounded-full" :src="card.rightUser.avatar" alt="">
                            <h1 class="text-black text-sm font-bold mt-1">{{ card.rightUser.name }}</h1>
                        </div>
                        <div class="flex flex-row gap-2 items-center">
                            <i :class="card.checkIconColor"></i>
                            <h1 class="text-black text-sm md:text-xl font-bold mt-1">Deal Concluded!!</h1>
                        </div>
                        <div class="flex flex-col gap-2">
                            <h1 class="text-black text-sm font-bold mt-1">Level:</h1>
                            <h1 :class="card.levelStyle">{{ card.rightUser.level }}</h1>
                        </div>
                        <div class="flex flex-col gap-2">
                            <h1 class="text-black text-sm font-bold mt-1">Feedback:</h1>
                            <h1 :class="card.feedbackStyle">{{ card.rightUser.feedback }}</h1>
                            <div class="flex flex-row gap-3">
                                <i v-for="star in 5" :key="star" class="bi bi-star-fill text-yellow-500 text-sm md:text-xl"></i>
                            </div>
                        </div>
                    </div>
                    <img class="w-full" :src="card.rightUser.image" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Define props to receive search query from parent
const props = defineProps({
    searchQuery: {
        type: String,
        default: ''
    }
})

// Define the cards data
const cards = ref([
    {
        id: 1,
        category: 'tech',
        borderColor: 'border-2 border-teal-600 w-auto h-auto p-4 flex flex-col rounded-xl shadow-xl',
        titleColor: 'text-teal-900 font-bold text-2xl',
        categoryStyle: 'border border-teal-600 p-2 rounded-xl text-teal-700 w-full text-sm font-bold mt-2',
        levelStyle: 'border border-teal-600 p-2 rounded-xl text-teal-700 text-sm font-bold w-auto inline-block',
        feedbackStyle: 'border border-teal-600 p-2 rounded-xl text-teal-800 text-xs w-auto inline-block',
        checkIconColor: 'bi bi-check-square-fill text-teal-600 text-sm md:text-xl',
        leftUser: {
            name: 'Franklin Murphy',
            avatar: 'https://i.pinimg.com/736x/8d/16/90/8d16902ae35c1e982c2990ff85fa11fb.jpg',
            offer: "I'll teach you basic guitar if you help me learn HTML",
            level: 'Intermediate',
            feedback: 'Skill Swap is a really lovely place for trading skills, very smooth and sleek design and fast replies.',
            image: 'https://i.pinimg.com/1200x/14/46/6e/14466e0d22c305c99eaf3675d47a6287.jpg'
        },
        rightUser: {
            name: 'Adeoye Alabi',
            avatar: 'https://i.pinimg.com/1200x/c5/d7/5a/c5d75ac10f3d47bdd5e7379fd4216d10.jpg',
            level: 'Beginner',
            feedback: 'Skill Swap is a really lovely place for trading skills, very smooth and sleek design and fast replies.',
            image: 'https://i.pinimg.com/736x/a2/7d/14/a27d14a27b5ef7d35c241d5cc9c1deb4.jpg'
        }
    },
    {
        id: 2,
        category: 'crafts',
        borderColor: 'border-2 border-yellow-400 w-auto h-auto p-4 flex flex-col rounded-xl shadow-xl',
        titleColor: 'text-yellow-700 font-bold text-2xl',
        categoryStyle: 'border border-yellow-400 p-2 rounded-xl text-yellow-700 w-full text-sm font-bold mt-2',
        levelStyle: 'border border-yellow-400 p-2 rounded-xl text-yellow-700 text-sm font-bold w-auto inline-block',
        feedbackStyle: 'border border-yellow-400 p-2 rounded-xl text-yellow-700 text-xs w-auto inline-block',
        checkIconColor: 'bi bi-check-square-fill text-yellow-600 text-sm md:text-xl',
        leftUser: {
            name: 'Ojo mariam',
            avatar: 'https://i.pinimg.com/736x/e0/64/62/e06462b939b0a079feebc8ebd1cf56fa.jpg',
            offer: "I'll teach you Photography basics if you help me with my cooking lessons",
            level: 'Beginner',
            feedback: 'Skill Swap is a really lovely place for trading skills, very smooth and sleek design and fast replies.',
            image: 'https://i.pinimg.com/736x/20/76/ba/2076baa505c14c472461b098a2d7ec7a.jpg'
        },
        rightUser: {
            name: 'Bello Tina',
            avatar: 'https://i.pinimg.com/736x/8a/6c/5e/8a6c5e78d507849be895b5e94a1cffad.jpg',
            level: 'Beginner',
            feedback: 'Skill Swap is a really lovely place for trading skills, very smooth and sleek design and fast replies.',
            image: 'https://i.pinimg.com/736x/f9/00/7f/f9007f73da46783cb255a1e621637f27.jpg'
        }
    },
    {
        id: 3,
        category: 'entertainment',
        borderColor: 'border-2 border-teal-600 w-auto h-auto p-4 flex flex-col rounded-xl shadow-xl lg:col-span-2 xl:col-span-1',
        titleColor: 'text-teal-900 font-bold text-2xl',
        categoryStyle: 'border border-teal-600 p-2 rounded-xl text-teal-700 w-full text-sm font-bold mt-2',
        levelStyle: 'border border-teal-600 p-2 rounded-xl text-teal-700 text-sm font-bold w-auto inline-block',
        feedbackStyle: 'border border-teal-600 p-2 rounded-xl text-teal-800 text-xs w-auto inline-block',
        checkIconColor: 'bi bi-check-square-fill text-teal-600 text-sm md:text-xl',
        leftUser: {
            name: 'George Bush',
            avatar: 'https://i.pinimg.com/736x/e8/9e/ef/e89eef273acbbd35d875fe1c8454fe1e.jpg',
            offer: "I'll teach you Writing/storytelling if you help me with some music production tips",
            level: 'Advanced',
            feedback: 'Skill Swap is a really lovely place for trading skills, very smooth and sleek design and fast replies.',
            image: 'https://i.pinimg.com/736x/1a/da/48/1ada481d56247b4c1a314efeed28cd10.jpg'
        },
        rightUser: {
            name: 'Kareem david',
            avatar: 'https://i.pinimg.com/736x/94/6c/22/946c22b20e52411a35e41c9c770accd7.jpg',
            level: 'Advanced',
            feedback: 'Skill Swap is a really lovely place for trading skills, very smooth and sleek design and fast replies.',
            image: 'https://i.pinimg.com/1200x/5b/ba/13/5bba1337751a16c9cb753c842b50e73a.jpg'
        }
    },
    {
        id: 4,
        category: 'tech',
        borderColor: 'border-2 border-blue-600 w-auto h-auto p-4 flex flex-col rounded-xl shadow-xl',
        titleColor: 'text-teal-900 font-bold text-2xl',
        categoryStyle: 'border border-blue-600 p-2 rounded-xl text-blue-700 w-full text-sm font-bold mt-2',
        levelStyle: 'border border-blue-600 p-2 rounded-xl text-blue-700 text-sm font-bold w-auto inline-block',
        feedbackStyle: 'border border-blue-600 p-2 rounded-xl text-blue-800 text-xs w-auto inline-block',
        checkIconColor: 'bi bi-check-square-fill text-blue-600 text-sm md:text-xl',
        leftUser: {
            name: 'Kevin damola',
            avatar: 'https://i.pinimg.com/1200x/09/c5/c9/09c5c98cad1fb537a6381f198d269757.jpg',
            offer: "I'll help you with Excel and data analysis if you teach me social media marketing",
            level: 'Intermediate',
            feedback: 'Skill Swap is a really lovely place for trading skills, very smooth and sleek design and fast replies.',
            image: 'https://i.pinimg.com/736x/17/71/a0/1771a05ffcf9b24bee1d5392e17043e7.jpg'
        },
        rightUser: {
            name: 'Babatunde Ibraheem',
            avatar: 'https://i.pinimg.com/736x/de/ce/65/dece651b5a873da2ef98e854620a70ec.jpg',
            level: 'Advanced',
            feedback: 'Skill Swap is a really lovely place for trading skills, very smooth and sleek design and fast replies.',
            image: 'https://i.pinimg.com/736x/fd/a0/4a/fda04a5ec0f646e693d1380c4629aaf0.jpg'
        }
    },
    {
        id: 5,
        category: 'tech',
        borderColor: 'border-2 border-pink-600 w-auto h-auto p-4 flex flex-col rounded-xl shadow-xl xl:col-span-2',
        titleColor: 'text-pink-900 font-bold text-2xl',
        categoryStyle: 'border border-pink-600 p-2 rounded-xl text-pink-700 w-full text-sm font-bold mt-2',
        levelStyle: 'border border-pink-600 p-2 rounded-xl text-pink-700 text-sm font-bold w-auto inline-block',
        feedbackStyle: 'border border-pink-600 p-2 rounded-xl text-pink-800 text-xs w-auto inline-block',
        checkIconColor: 'bi bi-check-square-fill text-pink-600 text-sm md:text-xl',
        leftUser: {
            name: 'Olamide Steven',
            avatar: 'https://i.pinimg.com/736x/34/01/ee/3401ee2dbb27776d850e77c6a2bee3d2.jpg',
            offer: "I'll teach you Python programming if you help me with graphic design in Photoshop",
            level: 'Advanced',
            feedback: 'Skill Swap is a really lovely place for trading skills, very smooth and sleek design and fast replies.',
            image: 'https://i.pinimg.com/736x/ed/66/63/ed666327dd3ce274d94f2b3547155891.jpg'
        },
        rightUser: {
            name: 'Ajose Samuel',
            avatar: 'https://i.pinimg.com/736x/64/77/29/64772901a0b1222b9089cb3aec4acc6f.jpg',
            level: 'Begineer',
            feedback: 'Skill Swap is a really lovely place for trading skills, very smooth and sleek design and fast replies.',
            image: 'https://i.pinimg.com/1200x/df/5f/c1/df5fc1e693a5a491d64a75ecd769a73f.jpg'
        }
    },
    {
        id: 6,
        category: 'tech',
        borderColor: 'border-2 border-green-600 w-auto h-auto p-4 flex flex-col rounded-xl shadow-xl',
        titleColor: 'text-green-900 font-bold text-2xl',
        categoryStyle: 'border border-green-600 p-2 rounded-xl text-green-700 w-full text-sm font-bold mt-2',
        levelStyle: 'border border-green-600 p-2 rounded-xl text-green-700 text-sm font-bold w-auto inline-block',
        feedbackStyle: 'border border-green-600 p-2 rounded-xl text-green-800 text-xs w-auto inline-block',
        checkIconColor: 'bi bi-check-square-fill text-green-600 text-sm md:text-xl',
        leftUser: {
            name: 'Damilare Akin',
            avatar: 'https://i.pinimg.com/736x/c6/e0/c6/c6e0c62998bf53d547fb099f6bc831e2.jpg',
            offer: "I'll show you how to build websites if you teach me video editing",
            level: 'Begineer',
            feedback: 'Skill Swap is a really lovely place for trading skills, very smooth and sleek design and fast replies.',
            image: 'https://i.pinimg.com/1200x/45/20/dd/4520ddfc56208707045c56232e946f7f.jpg'
        },
        rightUser: {
            name: 'AbdulBasit Adeleke',
            avatar: 'https://i.pinimg.com/736x/d5/2d/7c/d52d7cdd20736a01b0978e04ac276d39.jpg',
            level: 'Advanced',
            feedback: 'Skill Swap is a really lovely place for trading skills, very smooth and sleek design and fast replies.',
            image: 'https://i.pinimg.com/736x/ef/9a/fa/ef9afa84f538d10d4905d7acf6f45c21.jpg'
        }
    },
    {
        id: 7,
        category: 'tech',
        borderColor: 'border-2 border-purple-600 w-auto h-auto p-4 flex flex-col rounded-xl shadow-xl',
        titleColor: 'text-purple-900 font-bold text-2xl',
        categoryStyle: 'border border-purple-600 p-2 rounded-xl text-purple-700 w-full text-sm font-bold mt-2',
        levelStyle: 'border border-purple-600 p-2 rounded-xl text-purple-700 text-sm font-bold w-auto inline-block',
        feedbackStyle: 'border border-purple-600 p-2 rounded-xl text-purple-800 text-xs w-auto inline-block',
        checkIconColor: 'bi bi-check-square-fill text-purple-600 text-sm md:text-xl',
        leftUser: {
            name: 'Lex Adeoye',
            avatar: 'https://i.pinimg.com/736x/e6/ec/86/e6ec86d140147e8dc72514dbd2af546f.jpg',
            offer: "I'll teach you cybersecurity basics if you help me with mobile app development",
            level: 'Advanced',
            feedback: 'Skill Swap is a really lovely place for trading skills, very smooth and sleek design and fast replies.',
            image: 'https://i.pinimg.com/1200x/d8/eb/02/d8eb02a9ab0e4ebdfb30893f37802856.jpg'
        },
        rightUser: {
            name: 'Fawaz Adeshina',
            avatar: 'https://i.pinimg.com/736x/e9/60/d1/e960d16fb83ab9f3cbc60a5ed11be478.jpg',
            level: 'Begineer',
            feedback: 'Skill Swap is a really lovely place for trading skills, very smooth and sleek design and fast replies.',
            image: 'https://i.pinimg.com/736x/38/c7/ce/38c7ceb92d7ee385970135ac917c3fa6.jpg'
        }
    },
    {
        id: 8,
        category: 'crafts',
        borderColor: 'border-2 border-purple-600 w-auto h-auto p-4 flex flex-col rounded-xl shadow-xl lg:col-span-2 xl:col-span-1',
        titleColor: 'text-purple-900 font-bold text-2xl',
        categoryStyle: 'border border-purple-600 p-2 rounded-xl text-purple-700 w-full text-sm font-bold mt-2',
        levelStyle: 'border border-purple-600 p-2 rounded-xl text-purple-700 text-sm font-bold w-auto inline-block',
        feedbackStyle: 'border border-purple-600 p-2 rounded-xl text-purple-800 text-xs w-auto inline-block',
        checkIconColor: 'bi bi-check-square-fill text-purple-600 text-sm md:text-xl',
        leftUser: {
            name: 'Elena Silver',
            avatar: 'https://i.pinimg.com/736x/4f/b8/95/4fb8951ee4abaaf4f159d9db98718bfa.jpg',
            offer: "I'll teach you oil painting techniques if you help me learn pottery",
            level: 'Advanced',
            feedback: 'Skill Swap is a really lovely place for trading skills, very smooth and sleek design and fast replies.',
            image: 'https://i.pinimg.com/736x/ef/68/62/ef6862120d9be2a11f3048211a251985.jpg'
        },
        rightUser: {
            name: 'Godswin Gold',
            avatar: 'https://i.pinimg.com/736x/3d/5a/dc/3d5adc6a193cad6db468b26cdfda0fe4.jpg',
            level: 'Advanced',
            feedback: 'Skill Swap is a really lovely place for trading skills, very smooth and sleek design and fast replies.',
            image: 'https://i.pinimg.com/1200x/ef/15/34/ef15344e8b35a45d0fedb9431b25ca93.jpg'
        }
    },
    {
        id: 9,
        category: 'academic ',
        borderColor: 'border-2 border-yellow-600 w-auto h-auto p-4 flex flex-col rounded-xl shadow-xl xl:col-span-2',
        titleColor: 'text-yellow-900 font-bold text-2xl',
        categoryStyle: 'border border-yellow-600 p-2 rounded-xl text-yellow-700 w-full text-sm font-bold mt-2',
        levelStyle: 'border border-yellow-600 p-2 rounded-xl text-yellow-700 text-sm font-bold w-auto inline-block',
        feedbackStyle: 'border border-yellow-600 p-2 rounded-xl text-yellow-800 text-xs w-auto inline-block',
        checkIconColor: 'bi bi-check-square-fill text-purple-600 text-sm md:text-xl',
        leftUser: {
            name: 'Promise Blessing',
            avatar: 'https://i.pinimg.com/736x/44/b3/a3/44b3a39d134d1f142e6cb1cf9dd0c643.jpg',
            offer: "I'll help you with science concepts if you teach me history analysis",
            level: 'Begineer',
            feedback: 'Skill Swap is a really lovely place for trading skills, very smooth and sleek design and fast replies.',
            image: 'https://i.pinimg.com/1200x/1c/b8/3f/1cb83fd1f86b74db7bb56988fb1e3251.jpg'
        },
        rightUser: {
            name: 'Precious Johnson',
            avatar: 'https://i.pinimg.com/736x/f5/bb/b4/f5bbb46820d7d3b9f41753f24db74516.jpg',
            level: 'Begineer',
            feedback: 'Skill Swap is a really lovely place for trading skills, very smooth and sleek design and fast replies.',
            image: 'https://i.pinimg.com/736x/37/b2/9b/37b29b630213893d2f98d8c2232d4564.jpg'
        }
    },
    {
        id: 10,
        category: 'entertainment ',
        borderColor: 'border-2 border-cyan-600 w-auto h-auto p-4 flex flex-col rounded-xl shadow-xl ',
        titleColor: 'text-cyan-900 font-bold text-2xl',
        categoryStyle: 'border border-cyan-600 p-2 rounded-xl text-cyan-700 w-full text-sm font-bold mt-2',
        levelStyle: 'border border-cyan-600 p-2 rounded-xl text-cyan-700 text-sm font-bold w-auto inline-block',
        feedbackStyle: 'border border-cyan-600 p-2 rounded-xl text-cyan-800 text-xs w-auto inline-block',
        checkIconColor: 'bi bi-check-square-fill text-cyan-600 text-sm md:text-xl',
        leftUser: {
            name: 'Timileyin Oluwatosin',
            avatar: 'https://i.pinimg.com/736x/67/81/b6/6781b605f69c12fbd6f1b28ca7119fde.jpg',
            offer: "I'll teach you DJ mixing if you help me with stage performance",
            level: 'Begineer',
            feedback: 'Skill Swap is a really lovely place for trading skills, very smooth and sleek design and fast replies.',
            image: 'https://i.pinimg.com/736x/ae/94/ce/ae94ceef8c17af8a4d08ae2d70f511d3.jpg'
        },
        rightUser: {
            name: 'Alice Lanre',
            avatar: 'https://i.pinimg.com/736x/80/db/fb/80dbfbfb1bfb129f9b655a07b4221a63.jpg',
            level: 'Advanced',
            feedback: 'Skill Swap is a really lovely place for trading skills, very smooth and sleek design and fast replies.',
            image: 'https://i.pinimg.com/736x/37/a7/f0/37a7f0f2f1afe68709caeca3864a54ca.jpg'
        }
    }
])

// Computed property to filter cards based on search query
const filteredCards = computed(() => {
    if (!props.searchQuery.trim()) {
        return cards.value
    }
    
    return cards.value.filter(card => 
        card.category.toLowerCase().includes(props.searchQuery.toLowerCase())
    )
})
</script>

<style scoped></style>