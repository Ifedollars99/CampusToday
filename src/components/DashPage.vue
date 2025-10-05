<template>
    <!-- Welcome Section -->
    <div class="bg-gradient-to-r from-gray-500 to-black rounded-xl p-8 text-white">
        <h2 class="text-3xl font-bold mb-3">Welcome back, {{ username }}!</h2>
        <p class="text-lg opacity-90">You have {{ notifications }} new notifications and {{ pendingAssignments }} pending assignments</p>
    </div>

    <!-- Create Post Section -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div class="flex items-center space-x-4 mb-4">
            <div class="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <span class="text-white text-base font-semibold">{{ username.charAt(0).toUpperCase() }}</span>
            </div>
            <button @click="showCreatePost = true" 
                class="flex-1 text-left px-4 py-3 bg-gray-50 rounded-full text-gray-500 hover:bg-gray-100 transition-colors">
                Share something educational with your community...
            </button>
        </div>
        
        <!-- Create Post Modal/Expanded Form -->
        <div v-if="showCreatePost" class="border-t pt-4 space-y-4">
            <textarea v-model="newPost.content" 
                placeholder="Share educational content, tips, or resources..."
                class="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"></textarea>
            
             <div class="flex flex-col md:flex-row gap-3 md:items-center">
                <select v-model="newPost.subject" 
                    class="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select Subject</option>
                    <option v-for="course in courses" :key="course.id" :value="course.title">
                        {{ course.title }}
                    </option>
                </select>
                
                <input type="file" @change="handleFileUpload" accept="image/*,video/*" 
                    class="hidden" ref="fileInput" id="fileUpload">
                <label for="fileUpload" 
                    class="w-full md:w-auto px-4 py-2 bg-blue-100 text-blue-600 rounded-lg cursor-pointer hover:bg-blue-200 transition-colors flex items-center justify-center space-x-2">
                    <i class="bi bi-camera"></i>
                    <span>Add Media</span>
                </label>
            </div>
            
            <!-- Media Preview -->
            <div v-if="newPost.mediaUrl" class="relative">
                <img v-if="newPost.mediaType === 'image'" :src="newPost.mediaUrl" 
                    class="max-h-48 rounded-lg object-cover" alt="Preview">
                <video v-else-if="newPost.mediaType === 'video'" :src="newPost.mediaUrl" 
                    class="max-h-48 rounded-lg" controls></video>
                <button @click="newPost.mediaUrl = ''; newPost.mediaType = 'none'" 
                    class="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600">
                    ×
                </button>
            </div>
            
            <div class="flex justify-end space-x-3">
                <button @click="showCreatePost = false" 
                    class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
                    Cancel
                </button>
                <button @click="createPost" 
                    :disabled="!newPost.content.trim()"
                    class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    Post
                </button>
            </div>
        </div>
    </div>

    <!-- Quick Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">   
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-gray-600 text-base mb-1">Active Courses</p>
                    <p class="text-3xl font-bold text-gray-900">{{ courses.length }}</p>
                </div>
                <i class="bi bi-book text-3xl text-blue-500"></i>
            </div>
        </div>
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-gray-600 text-base mb-1">Messages</p>
                    <p class="text-3xl font-bold text-gray-900">{{ messages.length }}</p>
                </div>
                <i class="bi bi-chat-dots text-3xl text-green-500"></i>
            </div>
        </div>
        <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-gray-600 text-base mb-1">Community Posts</p>
                    <p class="text-3xl font-bold text-gray-900">{{ posts.length }}</p>
                </div>
                <i class="bi bi-people text-3xl text-orange-500"></i>
            </div>
        </div>
    </div>

    <!-- Educational Posts Feed -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-100">
        <div class="p-6 border-b border-gray-100">
            <h3 class="text-xl font-semibold">Educational Community</h3>
        </div>
        
        <div class="divide-y divide-gray-100">
            <div v-for="post in posts" :key="post.id" class="p-6">
                <!-- Post Header -->
                <div class="flex items-start space-x-4 mb-4">
                    <div class="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                        <span class="text-white text-base font-semibold">{{ post.author.charAt(0).toUpperCase() }}</span>
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center space-x-2">
                            <h4 class="font-medium text-base">{{ post.author }}</h4>
                            <span :class="['px-2 py-1 rounded-full text-xs font-medium',
                                post.authorRole === 'lecturer' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800']">
                                {{ post.authorRole }}
                            </span>
                        </div>
                        <div class="flex items-center space-x-2 text-sm text-gray-500">
                            <span v-if="post.subject" class="flex items-center">
                                <i class="bi bi-book mr-1"></i>
                                {{ post.subject }}
                            </span>
                            <span>•</span>
                            <span>{{ formatTimeAgo(post.timestamp) }}</span>
                        </div>
                    </div>
                    
                    <!-- Delete button - only show for current user's posts -->
                    <div v-if="post.author === username" class="relative">
                        <button @click="deletePost(post.id)" 
                            class="text-gray-400 hover:text-red-500 transition-colors p-2"
                            title="Delete post">
                            <i class="bi bi-trash text-lg"></i>
                        </button>
                    </div>
                </div>
                
                <!-- Post Content -->
                <div class="mb-4">
                    <p class="text-base text-gray-800 leading-relaxed">{{ post.content }}</p>
                </div>
                
                <!-- Post Media with Download Button -->
                <div v-if="post.mediaType === 'image'" class="mb-4 relative group">
                    <img :src="post.mediaUrl" 
                        class="w-full max-h-96 object-cover rounded-lg border border-gray-200" 
                        :alt="post.content">
                    <!-- Download button for images -->
                    <button 
                        @click="downloadMedia(post.mediaUrl, `${post.author}-${post.id}.jpg`)"
                        class="absolute top-3 right-3 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center space-x-2"
                        title="Download image">
                        <i class="bi bi-download text-lg"></i>
                        <span class="text-sm font-medium">Download</span>
                    </button>
                </div>
                
                <div v-else-if="post.mediaType === 'video'" class="mb-4 relative group">
                    <video :src="post.mediaUrl" 
                        class="w-full max-h-96 rounded-lg border border-gray-200" 
                        controls></video>
                    <!-- Download button for videos -->
                    <button 
                        @click="downloadMedia(post.mediaUrl, `${post.author}-${post.id}.mp4`)"
                        class="absolute top-3 right-3 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center space-x-2"
                        title="Download video">
                        <i class="bi bi-download text-lg"></i>
                        <span class="text-sm font-medium">Download</span>
                    </button>
                </div>
                
                <!-- Post Actions -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div class="flex items-center space-x-6">
                        <button @click="likePost(post.id)" 
                            class="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                            <i class="bi bi-heart text-lg"></i>
                            <span class="text-sm">{{ post.likes }}</span>
                        </button>
                        <button class="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                            <i class="bi bi-chat text-lg"></i>
                            <span class="text-sm">{{ post.comments }}</span>
                        </button>
                        <button class="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                            <i class="bi bi-share text-lg"></i>
                            <span class="text-sm">Share</span>
                        </button>
                    </div>
                    <button class="text-gray-400 hover:text-gray-600 transition-colors">
                        <i class="bi bi-bookmark text-lg"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Define props to receive data from parent component
defineProps({
    courses: {
        type: Array,
        default: () => []
    },
    messages: {
        type: Array,
        default: () => []
    },
    uploads: {
        type: Array,
        default: () => []
    },
    posts: {
        type: Array,
        default: () => []
    },
    username: {
        type: String,
        default: 'Student'
    },
    notifications: {
        type: Number,
        default: 0
    }
})

// Define emits for communicating with parent
const emit = defineEmits(['create-post', 'like-post', 'upload-file', 'delete-post', 'download-media'])

const pendingAssignments = ref(4)
const showCreatePost = ref(false)
const newPost = ref({
    content: '',
    subject: '',
    mediaType: 'none',
    mediaFile: null,
    mediaUrl: ''
})

// Local functions
const createPost = () => {
    if (!newPost.value.content.trim()) return
    
    emit('create-post', {
        content: newPost.value.content,
        subject: newPost.value.subject,
        mediaType: newPost.value.mediaType,
        mediaUrl: newPost.value.mediaUrl
    })
    
    // Reset form
    newPost.value = {
        content: '',
        subject: '',
        mediaType: 'none',
        mediaFile: null,
        mediaUrl: ''
    }
    showCreatePost.value = false
}

const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
        newPost.value.mediaFile = file
        newPost.value.mediaUrl = URL.createObjectURL(file)
        
        if (file.type.startsWith('image/')) {
            newPost.value.mediaType = 'image'
        } else if (file.type.startsWith('video/')) {
            newPost.value.mediaType = 'video'
        }
        
        emit('upload-file', file)
    }
}

const likePost = (postId) => {
    emit('like-post', postId)
}

const deletePost = (postId) => {
    emit('delete-post', postId)
}

const downloadMedia = (mediaUrl, fileName) => {
    emit('download-media', mediaUrl, fileName)
}

const formatTimeAgo = (timestamp) => {
    const now = new Date()
    const diff = now - timestamp
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)
    
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    return 'Just now'
}
</script>

<style scoped>
</style>