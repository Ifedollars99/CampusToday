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
                        <i class="bi bi-mortarboard-fill text-white text-2xl"></i>
                    </div>
                    <h1 class="text-3xl font-bold text-white">Create Account</h1>
                    <p class="text-gray-300">Join Campus Today and get started</p>
                </div>

                <!-- Form -->
                <form @submit.prevent="signUp" class="space-y-6">

                    <!-- Category Selection -->
                    <div class="space-y-2">
                        <label for="category" class="block text-sm font-medium text-gray-200">
                            Category *
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="bi bi-person-badge text-gray-400"></i>
                            </div>
                            <select id="category" v-model="category" required
                                class="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 appearance-none"
                                :class="{ 'border-red-400 ring-1 ring-red-400': categoryError }">
                                <option value="" disabled class="bg-gray-800 text-gray-300">Select your category</option>
                                <option value="student" class="bg-gray-800 text-white">Student</option>
                                <option value="staff" class="bg-gray-800 text-white">Staff/Lecturer</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <i class="bi bi-chevron-down text-gray-400"></i>
                            </div>
                        </div>
                        <p v-if="categoryError" class="text-red-400 text-sm">{{ categoryError }}</p>
                    </div>

                    <!-- Username Input -->
                    <div class="space-y-2">
                        <label for="username" class="block text-sm font-medium text-gray-200">
                            Username *
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="bi bi-person text-gray-400"></i>
                            </div>
                            <input id="username" v-model="username" type="text" required
                                class="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                                placeholder="Create a username"
                                :class="{ 'border-red-400 ring-1 ring-red-400': usernameError }" />
                        </div>
                        <p v-if="usernameError" class="text-red-400 text-sm">{{ usernameError }}</p>
                    </div>

                    <!-- Email Input -->
                    <div class="space-y-2">
                        <label for="email" class="block text-sm font-medium text-gray-200">
                            Email Address *
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="bi bi-envelope text-gray-400"></i>
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
                            Password *
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <i class="bi bi-lock text-gray-400"></i>
                            </div>
                            <input id="password" v-model="password" :type="showPassword ? 'text' : 'password'" required
                                class="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                                placeholder="Create a password"
                                :class="{ 'border-red-400 ring-1 ring-red-400': passwordError }" />
                            <button type="button" @click="showPassword = !showPassword"
                                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition-colors">
                                <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
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

                    <!-- Terms and Conditions -->
                    <div class="flex items-start space-x-3">
                        <input id="agreeTerms" v-model="agreeTerms" type="checkbox" required
                            class="mt-1 w-4 h-4 text-blue-600 bg-white/10 border border-white/20 rounded focus:ring-blue-500 focus:ring-2"
                            :class="{ 'border-red-400 ring-1 ring-red-400': termsError }" />
                        <label for="agreeTerms" class="text-sm text-gray-300">
                            I agree to the 
                            <a href="#" class="text-blue-400 hover:text-blue-300 transition-colors">Terms of Service</a> 
                            and 
                            <a href="#" class="text-blue-400 hover:text-blue-300 transition-colors">Privacy Policy</a>
                        </label>
                    </div>
                    <p v-if="termsError" class="text-red-400 text-sm">{{ termsError }}</p>

                    <!-- Submit Button -->
                    <button type="submit" :disabled="loading || !isFormValid"
                        class="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent">
                        <span v-if="loading" class="flex items-center justify-center">
                            <i class="bi bi-arrow-clockwise animate-spin mr-3"></i>
                            Creating Account...
                        </span>
                        <span v-else class="flex items-center justify-center">
                            <i class="bi bi-person-plus mr-2"></i>
                            Create Account
                        </span>
                    </button>
                </form>

                <!-- Success/Error Messages -->
                <div v-if="message" class="rounded-lg p-4 text-center transition-all duration-300" :class="{
                    'bg-green-500/20 border border-green-400/30 text-green-300': messageType === 'success',
                    'bg-red-500/20 border border-red-400/30 text-red-300': messageType === 'error'
                }">
                    <div class="flex items-center justify-center space-x-2">
                        <i v-if="messageType === 'success'" class="bi bi-check-circle text-green-400"></i>
                        <i v-else-if="messageType === 'error'" class="bi bi-exclamation-circle text-red-400"></i>
                        <p class="font-medium">{{ message }}</p>
                    </div>
                </div>

                <!-- Footer -->
                <div class="text-center">
                    <p class="text-gray-400 text-sm">
                        Already have an account?
                        <router-link to="/signin" class="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                            Sign in
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { supabase } from '../supabase'
import { useRouter } from 'vue-router'

// Reactive state
const category = ref('')
const username = ref('')
const email = ref('')
const password = ref('')
const agreeTerms = ref(false)
const message = ref('')
const messageType = ref('') // 'success' or 'error'
const loading = ref(false)
const showPassword = ref(false)
const router = useRouter()

// Error states
const categoryError = ref('')
const usernameError = ref('')
const emailError = ref('')
const passwordError = ref('')
const termsError = ref('')

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
    return category.value.length > 0 &&
        username.value.length > 0 &&
        email.value.length > 0 &&
        password.value.length >= 6 &&
        agreeTerms.value &&
        !categoryError.value &&
        !usernameError.value &&
        !emailError.value &&
        !passwordError.value &&
        !termsError.value
})

// Validation functions
const validateCategory = () => {
    if (!category.value) {
        categoryError.value = 'Please select your category'
    } else {
        categoryError.value = ''
    }
}

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

const validateTerms = () => {
    if (!agreeTerms.value) {
        termsError.value = 'You must agree to the terms and conditions'
    } else {
        termsError.value = ''
    }
}

// Watch for input changes to validate in real-time
watch(category, validateCategory)
watch(username, validateUsername)
watch(email, validateEmail)
watch(password, validatePassword)
watch(agreeTerms, validateTerms)

// Sign Up function
const signUp = async () => {
    // Validate all fields first
    validateCategory()
    validateUsername()
    validateEmail()
    validatePassword()
    validateTerms()

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
                    username: username.value,
                    category: category.value,
                    user_type: category.value // Additional field for easier filtering
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
            category.value = ''
            username.value = ''
            email.value = ''
            password.value = ''
            agreeTerms.value = false

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

<style scoped>
/* Custom styles for select dropdown */
select option {
    background-color: #374151;
    color: white;
}

select:focus option:checked {
    background-color: #3b82f6;
    color: white;
}
</style>