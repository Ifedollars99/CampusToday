<template>
    <div class="space-y-6">
        <div class="flex justify-between items-center mb-2">
            <h2 class="text-3xl font-bold">My Courses</h2>
            <button @click="showAddCourseModal = true"
                class="bg-blue-600 text-white px-5 py-2.5 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
                <i class="bi bi-plus-circle text-lg"></i>
                <span class="text-base">Add Course</span>
            </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div v-for="course in courses" :key="course.id"
                class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <div :class="['h-40 relative', course.color]">
                    <div class="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div class="absolute bottom-4 left-4 text-white">
                        <h3 class="font-bold text-xl">{{ course.title }}</h3>
                    </div>
                </div>
                <div class="p-5">
                    <p class="text-gray-600 text-base mb-3">
                        <i class="bi bi-person mr-2"></i>
                        {{ course.lecturer }}
                    </p>
                    <div class="flex justify-between items-center text-sm text-gray-500">
                        <span class="flex items-center">
                            <i class="bi bi-people mr-2"></i>
                            {{ course.students }} students
                        </span>
                        <span>Updated {{ course.lastUpdate }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Success Message -->
        <transition name="fade">
            <div v-if="showSuccessMessage"
                class="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 z-50">
                <i class="bi bi-check-circle text-xl"></i>
                <span>Course created successfully!</span>
            </div>
        </transition>

        <!-- Add Course Modal -->
        <div v-if="showAddCourseModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
            <div class="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
                <h2 class="text-2xl font-bold mb-6">{{ isEditing ? 'Edit Course' : 'Add New Course' }}</h2>

                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Course Title</label>
                        <input v-model="formData.title" type="text" placeholder="Enter course title"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Lecturer Name</label>
                        <input v-model="formData.lecturer" type="text" placeholder="Enter lecturer name"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Color</label>
                        <select v-model="formData.color"
                            class="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-blue-500">
                            <option value="bg-blue-500">Blue</option>
                            <option value="bg-green-500">Green</option>
                            <option value="bg-purple-500">Purple</option>
                            <option value="bg-red-500">Red</option>
                            <option value="bg-orange-500">Orange</option>
                            <option value="bg-pink-500">Pink</option>
                        </select>
                    </div>
                </div>

                <div class="flex space-x-3 mt-8">
                    <button @click="closeModal"
                        class="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        Cancel
                    </button>
                    <button @click="saveCourse"
                        class="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        {{ isEditing ? 'Update' : 'Create' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from 'vue'

const emit = defineEmits(['course-added'])

defineProps({
    courses: {
        type: Array,
        required: true
    },
    userRole: {
        type: String,
        required: true
    }
})

const showAddCourseModal = ref(false)
const isEditing = ref(false)
const editingId = ref(null)
const showSuccessMessage = ref(false)
const formData = ref({
    title: '',
    lecturer: '',
    students: 0,
    color: 'bg-blue-500'
})

const saveCourse = () => {
    if (!formData.value.title || !formData.value.lecturer) {
        return
    }
    
    const newCourse = {
        id: Date.now(),
        title: formData.value.title,
        lecturer: formData.value.lecturer,
        students: 0,
        lastUpdate: 'just now',
        color: formData.value.color
    }
    
    emit('course-added', newCourse)
    
    closeModal()
    showSuccessMessage.value = true
    setTimeout(() => {
        showSuccessMessage.value = false
    }, 3000)
}

const closeModal = () => {
    showAddCourseModal.value = false
    resetForm()
}

const resetForm = () => {
    isEditing.value = false
    editingId.value = null
    formData.value = {
        title: '',
        lecturer: '',
        students: 0,
        color: 'bg-blue-500'
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

.fade-enter-to, .fade-leave-from {
    opacity: 1;
}
</style>