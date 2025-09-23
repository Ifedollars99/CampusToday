<template>
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <!-- Mobile Header -->
        <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center py-4">
                    <div class="flex items-center space-x-3">
                        <div
                            class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                            <i class="bi bi-mortarboard-fill text-white text-lg"></i>
                        </div>
                        <div>
                            <h1 class="text-xl font-bold text-gray-900">Campus Today</h1>
                            <p class="text-xs text-gray-500">
                                {{ userRole === 'student' ? 'Student Portal' : 'Lecturer Portal' }}
                            </p>
                        </div>
                    </div>

                    <div class="flex items-center space-x-4">
                        <!-- Role Toggle -->
                        <select v-model="userRole"
                            class="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="student">Student</option>
                            <option value="lecturer">Lecturer</option>
                        </select>

                        <!-- Notifications -->
                        <div class="relative">
                            <button class="p-2 text-gray-600 hover:text-gray-900 relative">
                                <i class="bi bi-bell text-lg"></i>
                                <span v-if="notifications > 0"
                                    class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {{ notifications }}
                                </span>
                            </button>
                        </div>

                        <!-- Profile -->
                        <div
                            class="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                            <span class="text-white text-sm font-semibold">A</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div class="flex flex-col lg:flex-row gap-6">
                <!-- Sidebar Navigation -->
                <aside class="w-full lg:w-64">
                    <nav class="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                        <ul class="space-y-2">
                            <li>
                                <button @click="activeTab = 'dashboard'"
                                    :class="['w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', activeTab === 'dashboard' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100']">
                                    <i class="bi bi-speedometer2"></i>
                                    <span>Dashboard</span>
                                </button>
                            </li>
                            <li>
                                <button @click="activeTab = 'courses'"
                                    :class="['w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', activeTab === 'courses' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100']">
                                    <i class="bi bi-book"></i>
                                    <span>Courses</span>
                                </button>
                            </li>
                            <li>
                                <button @click="activeTab = 'messages'"
                                    :class="['w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', activeTab === 'messages' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100']">
                                    <i class="bi bi-chat-dots"></i>
                                    <span>Messages</span>
                                    <span v-if="unreadMessages > 0"
                                        class="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                        {{ unreadMessages }}
                                    </span>
                                </button>
                            </li>
                            <li>
                                <button @click="activeTab = 'content'"
                                    :class="['w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', activeTab === 'content' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100']">
                                    <i class="bi bi-file-earmark-text"></i>
                                    <span>Content</span>
                                </button>
                            </li>
                            <li>
                                <button @click="activeTab = 'assignments'"
                                    :class="['w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors', activeTab === 'assignments' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100']">
                                    <i class="bi bi-clipboard-check"></i>
                                    <span>Assignments</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </aside>

                <!-- Main Content Area -->
                <main class="flex-1">
                    <!-- Dashboard -->
                    <div v-if="activeTab === 'dashboard'" class="space-y-6">
                        <!-- Welcome Section -->
                        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
                            <h2 class="text-2xl font-bold mb-2">Welcome back, {{ username }}!</h2>
                            <p class="opacity-90">You have {{ notifications }} new notifications and {{
                                pendingAssignments }} pending assignments</p>
                        </div>

                        <!-- Quick Stats -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-gray-600 text-sm">Active Courses</p>
                                        <p class="text-2xl font-bold text-gray-900">{{ courses.length }}</p>
                                    </div>
                                    <i class="bi bi-book text-2xl text-blue-500"></i>
                                </div>
                            </div>
                            <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-gray-600 text-sm">Messages</p>
                                        <p class="text-2xl font-bold text-gray-900">{{ messages.length }}</p>
                                    </div>
                                    <i class="bi bi-chat-dots text-2xl text-green-500"></i>
                                </div>
                            </div>
                            <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-gray-600 text-sm">Assignments</p>
                                        <p class="text-2xl font-bold text-gray-900">{{ pendingAssignments }}</p>
                                    </div>
                                    <i class="bi bi-clipboard-check text-2xl text-orange-500"></i>
                                </div>
                            </div>
                        </div>

                        <!-- Recent Activity -->
                        <div class="bg-white rounded-lg shadow-sm border border-gray-100">
                            <div class="p-6 border-b border-gray-100">
                                <h3 class="text-lg font-semibold">Recent Activity</h3>
                            </div>
                            <div class="p-6 space-y-4">
                                <div v-for="upload in uploads.slice(0, 3)" :key="upload.id"
                                    class="flex items-center space-x-4">
                                    <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <i class="bi bi-cloud-upload text-blue-600"></i>
                                    </div>
                                    <div class="flex-1">
                                        <p class="font-medium">{{ upload.title }}</p>
                                        <p class="text-sm text-gray-600">{{ upload.uploadedBy }} • {{ upload.course }}
                                        </p>
                                    </div>
                                    <span class="text-xs text-gray-500">{{ upload.uploadDate }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Courses -->
                    <div v-if="activeTab === 'courses'" class="space-y-6">
                        <div class="flex justify-between items-center">
                            <h2 class="text-2xl font-bold">My Courses</h2>
                            <button v-if="userRole === 'lecturer'"
                                class="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
                                <i class="bi bi-plus-circle"></i>
                                <span>Add Course</span>
                            </button>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div v-for="course in courses" :key="course.id"
                                class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                                <div :class="['h-32 relative', course.color]">
                                    <div class="absolute inset-0 bg-black bg-opacity-20"></div>
                                    <div class="absolute bottom-4 left-4 text-white">
                                        <h3 class="font-bold text-lg">{{ course.title }}</h3>
                                    </div>
                                </div>
                                <div class="p-4">
                                    <p class="text-gray-600 text-sm mb-2">
                                        <i class="bi bi-person mr-1"></i>
                                        {{ course.lecturer }}
                                    </p>
                                    <div class="flex justify-between items-center text-sm text-gray-500">
                                        <span class="flex items-center">
                                            <i class="bi bi-people mr-1"></i>
                                            {{ course.students }} students
                                        </span>
                                        <span>Updated {{ course.lastUpdate }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Messages -->
                    <div v-if="activeTab === 'messages'" class="space-y-6">
                        <div class="flex justify-between items-center">
                            <h2 class="text-2xl font-bold">Messages</h2>
                            <button
                                class="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
                                <i class="bi bi-plus-circle"></i>
                                <span>New Message</span>
                            </button>
                        </div>

                        <div class="bg-white rounded-lg shadow-sm border border-gray-100">
                            <div v-for="(message, index) in messages" :key="message.id"
                                :class="['p-4 hover:bg-gray-50 cursor-pointer', index !== messages.length - 1 ? 'border-b border-gray-100' : '']">
                                <div class="flex items-start space-x-4">
                                    <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                        <i class="bi bi-person text-blue-600"></i>
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <div class="flex items-center justify-between mb-1">
                                            <h4
                                                :class="['font-medium', message.unread ? 'text-gray-900' : 'text-gray-700']">
                                                {{ message.sender }}
                                            </h4>
                                            <span class="text-xs text-gray-500">{{ message.time }}</span>
                                        </div>
                                        <h5
                                            :class="['text-sm mb-1', message.unread ? 'font-medium text-gray-900' : 'text-gray-700']">
                                            {{ message.subject }}
                                        </h5>
                                        <p class="text-sm text-gray-600 truncate">{{ message.preview }}</p>
                                    </div>
                                    <div v-if="message.unread" class="w-2 h-2 bg-blue-600 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Content -->
                    <div v-if="activeTab === 'content'" class="space-y-6">
                        <div class="flex justify-between items-center">
                            <h2 class="text-2xl font-bold">Course Content</h2>
                            <button v-if="userRole === 'lecturer'"
                                class="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors">
                                <i class="bi bi-cloud-upload"></i>
                                <span>Upload Content</span>
                            </button>
                        </div>

                        <div class="bg-white rounded-lg shadow-sm border border-gray-100">
                            <div class="p-4 border-b border-gray-100">
                                <div class="flex items-center space-x-4">
                                    <i class="bi bi-search text-gray-400"></i>
                                    <input type="text" placeholder="Search content..." class="flex-1 outline-none" />
                                </div>
                            </div>

                            <div class="divide-y divide-gray-100">
                                <div v-for="upload in uploads" :key="upload.id" class="p-4 hover:bg-gray-50">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center space-x-4">
                                            <div
                                                class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                                <i class="bi bi-file-earmark-pdf text-orange-600"></i>
                                            </div>
                                            <div>
                                                <h4 class="font-medium">{{ upload.title }}</h4>
                                                <p class="text-sm text-gray-600">
                                                    {{ upload.course }} • Uploaded by {{ upload.uploadedBy }}
                                                </p>
                                                <p class="text-xs text-gray-500">{{ upload.type }} • {{ upload.size }}
                                                </p>
                                            </div>
                                        </div>
                                        <button class="text-blue-600 hover:text-blue-800 transition-colors">
                                            <i class="bi bi-download text-lg"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Assignments -->
                    <div v-if="activeTab === 'assignments'" class="space-y-6">
                        <div class="flex justify-between items-center">
                            <h2 class="text-2xl font-bold">Assignments</h2>
                            <button v-if="userRole === 'lecturer'"
                                class="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700 transition-colors">
                                <i class="bi bi-plus-circle"></i>
                                <span>Create Assignment</span>
                            </button>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div v-for="assignment in assignments" :key="assignment.id"
                                class="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                                <div class="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 class="font-semibold text-lg">{{ assignment.title }}</h3>
                                        <p class="text-gray-600">{{ assignment.course }}</p>
                                    </div>
                                    <span :class="['px-2 py-1 rounded-full text-xs font-medium',
                                        assignment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                            assignment.status === 'submitted' ? 'bg-green-100 text-green-800' :
                                                'bg-red-100 text-red-800']">
                                        {{ assignment.status }}
                                    </span>
                                </div>
                                <div class="space-y-2 text-sm text-gray-600">
                                    <div class="flex items-center">
                                        <i class="bi bi-calendar mr-2"></i>
                                        Due: {{ assignment.dueDate }}
                                    </div>
                                    <div class="flex items-center">
                                        <i class="bi bi-clock mr-2"></i>
                                        {{ assignment.timeLeft }}
                                    </div>
                                </div>
                                <div class="mt-4 pt-4 border-t border-gray-100">
                                    <button
                                        class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                        {{ assignment.status === 'submitted' ? 'View Submission' : 'Submit Assignment'
                                        }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { supabase } from '../supabase'

const activeTab = ref('dashboard')
const userRole = ref('student')
const notifications = ref(3)
const pendingAssignments = ref(4)
const currentUser = ref(null)
const username = ref('Student')

const messages = ref([
    {
        id: 1,
        sender: 'Dr. Sarah Johnson',
        subject: 'Mathematics Assignment Due',
        preview: 'Please submit your calculus assignment by Friday...',
        time: '2 hours ago',
        unread: true
    },
    {
        id: 2,
        sender: 'Physics Study Group',
        subject: 'Study Session Tomorrow',
        preview: 'We\'re meeting at the library at 3PM...',
        time: '5 hours ago',
        unread: true
    },
    {
        id: 3,
        sender: 'Prof. Michael Chen',
        subject: 'Lab Report Feedback',
        preview: 'Great work on your recent lab report...',
        time: '1 day ago',
        unread: false
    }
])

const courses = ref([
    {
        id: 1,
        title: 'Advanced Mathematics',
        lecturer: 'Dr. Sarah Johnson',
        students: 45,
        lastUpdate: '2 days ago',
        color: 'bg-blue-500'
    },
    {
        id: 2,
        title: 'Physics Laboratory',
        lecturer: 'Prof. Michael Chen',
        students: 38,
        lastUpdate: '1 day ago',
        color: 'bg-green-500'
    },
    {
        id: 3,
        title: 'Computer Science',
        lecturer: 'Dr. Emily Rodriguez',
        students: 52,
        lastUpdate: '3 hours ago',
        color: 'bg-purple-500'
    },
    {
        id: 4,
        title: 'Chemistry Basics',
        lecturer: 'Prof. David Kim',
        students: 41,
        lastUpdate: '5 days ago',
        color: 'bg-red-500'
    }
])

const uploads = ref([
    {
        id: 1,
        title: 'Calculus Chapter 5 Notes',
        type: 'PDF',
        size: '2.4 MB',
        uploadedBy: 'Dr. Sarah Johnson',
        course: 'Advanced Mathematics',
        uploadDate: '2025-09-20'
    },
    {
        id: 2,
        title: 'Physics Lab Report Template',
        type: 'DOCX',
        size: '156 KB',
        uploadedBy: 'Prof. Michael Chen',
        course: 'Physics Laboratory',
        uploadDate: '2025-09-19'
    },
    {
        id: 3,
        title: 'Programming Assignment Guide',
        type: 'PDF',
        size: '890 KB',
        uploadedBy: 'Dr. Emily Rodriguez',
        course: 'Computer Science',
        uploadDate: '2025-09-18'
    }
])

const assignments = ref([
    {
        id: 1,
        title: 'Calculus Problem Set 3',
        course: 'Advanced Mathematics',
        dueDate: 'Sept 25, 2024',
        timeLeft: '2 days left',
        status: 'pending'
    },
    {
        id: 2,
        title: 'Lab Report: Motion Analysis',
        course: 'Physics Laboratory',
        dueDate: 'Sept 27, 2024',
        timeLeft: '4 days left',
        status: 'pending'
    },
    {
        id: 3,
        title: 'Algorithm Implementation',
        course: 'Computer Science',
        dueDate: 'Sept 22, 2024',
        timeLeft: 'Overdue',
        status: 'overdue'
    },
    {
        id: 4,
        title: 'Chemical Equations Quiz',
        course: 'Chemistry Basics',
        dueDate: 'Sept 20, 2024',
        timeLeft: 'Submitted',
        status: 'submitted'
    }
])

const unreadMessages = computed(() => {
    return messages.value.filter(message => message.unread).length
})

// Get current user and username
onMounted(async () => {
    try {
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
            currentUser.value = user
            // Get username from user metadata
            username.value = user.user_metadata?.username || user.email?.split('@')[0] || 'Student'
        }
    } catch (error) {
        console.error('Error getting user:', error)
    }
})
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>