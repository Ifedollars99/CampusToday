<template>
    <div
        class="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center px-4 py-8 relative">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-10">
            <div class="absolute inset-0"
                style="background-image: radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(255,255,255,0.05) 1px, transparent 0); background-size: 100px 100px;">
            </div>
        </div>

        <!-- Signup Card -->
        <div class="relative w-full max-w-md">
            <!-- Glassmorphism Effect -->
            <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 space-y-8">

                <!-- Header -->
                <div class="text-center space-y-2">
                    <div
                        class="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <h1 class="text-3xl font-bold text-white">Create Account</h1>
                    <p class="text-gray-300">Join us today and get started</p>
                </div>

                <!-- Form -->
                <form @submit.prevent="signUp" class="space-y-6">

                    <!-- Username Input -->
                    <div class="space-y-2">
                        <label for="username" class="block text-sm font-medium text-gray-200">
                            Username
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <input id="username" v-model="username" type="text" required
                                class="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                                placeholder="Choose a username"
                                :class="{ 'border-red-400 ring-1 ring-red-400': usernameError }" />
                        </div>
                        <p v-if="usernameError" class="text-red-400 text-sm">{{ usernameError }}</p>
                    </div>

                    <!-- Email Input -->
                    <div class="space-y-2">
                        <label for="email" class="block text-sm font-medium text-gray-200">
                            Email Address
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                            <input id="email" v-model="email" type="email" required
                                class="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                                placeholder="Enter your email"
                                :class="{ 'border-red-400 ring-1 ring-red-400': emailError }" />
                        </div>
                        <p v-if="emailError" class="text-red-400 text-sm">{{ emailError }}</p>
                    </div>

                    <!-- Password Input -->
                    <div class="space-y-2">
                        <label for="password" class="block text-sm font-medium text-gray-200">
                            Password
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <input id="password" v-model="password" :type="showPassword ? 'text' : 'password'" required
                                class="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                                placeholder="Create a password"
                                :class="{ 'border-red-400 ring-1 ring-red-400': passwordError }" />
                            <button type="button" @click="showPassword = !showPassword"
                                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition-colors">
                                <svg v-if="!showPassword" class="h-5 w-5" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L8.464 8.464m1.414 1.414L8.464 8.464m5.656 5.656l1.415 1.415m-1.415-1.415l1.415 1.415" />
                                </svg>
                            </button>
                        </div>
                        <p v-if="passwordError" class="text-red-400 text-sm">{{ passwordError }}</p>

                        <!-- Password Strength Indicator -->
                        <div v-if="password" class="space-y-2">
                            <div class="flex space-x-1">
                                <div v-for="i in 4" :key="i"
                                    class="h-1 flex-1 rounded-full transition-colors duration-200" :class="{
                                        'bg-red-400': passwordStrength >= i && passwordStrength < 2,
                                        'bg-yellow-400': passwordStrength >= i && passwordStrength >= 2 && passwordStrength < 3,
                                        'bg-green-400': passwordStrength >= i && passwordStrength >= 3,
                                        'bg-gray-600': passwordStrength < i
                                    }"></div>
                            </div>
                            <p class="text-xs text-gray-400">
                                Password strength: {{ passwordStrengthText }}
                            </p>
                        </div>
                    </div>

                    <!-- Submit Button -->
                    <button type="submit" :disabled="loading || !isFormValid"
                        class="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent">
                        <span v-if="loading" class="flex items-center justify-center">
                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                            Creating Account...
                        </span>
                        <span v-else>Create Account</span>
                    </button>
                </form>

                <!-- Success/Error Messages -->
                <div v-if="message" class="rounded-lg p-4 text-center transition-all duration-300" :class="{
                    'bg-green-500/20 border border-green-400/30 text-green-300': messageType === 'success',
                    'bg-red-500/20 border border-red-400/30 text-red-300': messageType === 'error'
                }">
                    <div class="flex items-center justify-center space-x-2">
                        <svg v-if="messageType === 'success'" class="h-5 w-5 text-green-400" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg v-else-if="messageType === 'error'" class="h-5 w-5 text-red-400" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="font-medium">{{ message }}</p>
                    </div>
                </div>

                <!-- Footer -->
                <div class="text-center">
                    <p class="text-gray-400 text-sm">
                        Already have an account?
                        <router-link to="/signin">
                            <a href="#" class="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                                Sign in
                            </a>
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { supabase } from '../supabase'
import { useRouter } from 'vue-router'

// Reactive state
const username = ref('')
const email = ref('')
const password = ref('')
const message = ref('')
const messageType = ref('') // 'success' or 'error'
const loading = ref(false)
const showPassword = ref(false)
const router = useRouter()

// Error states
const usernameError = ref('')
const emailError = ref('')
const passwordError = ref('')

// Password strength computation
const passwordStrength = computed(() => {
    if (!password.value) return 0
    let strength = 0

    if (password.value.length >= 8) strength++
    if (/[A-Z]/.test(password.value)) strength++
    if (/[a-z]/.test(password.value)) strength++
    if (/[0-9]/.test(password.value)) strength++
    if (/[^A-Za-z0-9]/.test(password.value)) strength++

    return Math.min(strength, 4)
})

const passwordStrengthText = computed(() => {
    switch (passwordStrength.value) {
        case 0:
        case 1: return 'Weak'
        case 2: return 'Fair'
        case 3: return 'Good'
        case 4: return 'Strong'
        default: return 'Weak'
    }
})

// Form validation
const isFormValid = computed(() => {
    return username.value.length > 0 &&
        email.value.length > 0 &&
        password.value.length >= 6 &&
        !usernameError.value &&
        !emailError.value &&
        !passwordError.value
})

// Validation functions
const validateUsername = () => {
    if (username.value.length < 3) {
        usernameError.value = 'Username must be at least 3 characters'
    } else if (!/^[a-zA-Z0-9_]+$/.test(username.value)) {
        usernameError.value = 'Username can only contain letters, numbers, and underscores'
    } else {
        usernameError.value = ''
    }
}

const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.value)) {
        emailError.value = 'Please enter a valid email address'
    } else {
        emailError.value = ''
    }
}

const validatePassword = () => {
    if (password.value.length < 6) {
        passwordError.value = 'Password must be at least 6 characters'
    } else {
        passwordError.value = ''
    }
}

// Watch for input changes to validate in real-time
import { watch } from 'vue'

watch(username, validateUsername)
watch(email, validateEmail)
watch(password, validatePassword)

// Sign Up function
const signUp = async () => {
    // Validate all fields first
    validateUsername()
    validateEmail()
    validatePassword()

    if (!isFormValid.value) {
        return
    }

    loading.value = true
    message.value = ''

    try {
        const { error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
            options: {
                data: {
                    username: username.value
                }
            }
        })

        if (error) {
            message.value = error.message
            messageType.value = 'error'
        } else {
            message.value = 'Success! Check your email for a confirmation link.'
            messageType.value = 'success'

            alert('🎉 Make sure to verify the link sent to your email before you signin!!')

            // Clear form on success
            username.value = ''
            email.value = ''
            password.value = ''

            // Redirect to signin page after a short delay
            setTimeout(() => {
                router.push('/signin')
            }, 2000) // 2 second delay to let user see success message
        }
    } catch (error) {
        message.value = 'An unexpected error occurred. Please try again.'
        messageType.value = 'error'
    } finally {
        loading.value = false
    }
}
</script>