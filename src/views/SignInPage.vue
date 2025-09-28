<template>
    <div
        class="min-h-screen taichi-background flex items-center justify-center px-4 py-8 relative overflow-hidden">
        
        <!-- Animated Yin Yang symbols - right side only -->
        <div class="absolute top-20 right-4 sm:top-40 sm:right-32 yin-yang-small floating-2"></div>
        <div class="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 yin-yang-small floating-4"></div>

        <!-- Signin Card -->
        <div class="relative w-full max-w-md z-10">
            <!-- Glassmorphism Effect -->
            <div class="bg-white/15 backdrop-blur-xl border border-gray-400/30 rounded-3xl shadow-2xl p-8 space-y-8">

                <!-- Header -->
                <div class="text-center space-y-2">
                    <div
                        class="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                    </div>
                    <h1 class="text-3xl font-bold text-gray-900">Welcome Back</h1>
                    <p class="text-gray-700">Sign in to your account</p>
                </div>

                <!-- Form -->
                <form @submit.prevent="signIn" class="space-y-6">

                    <!-- Email Input -->
                    <div class="space-y-2">
                        <label for="email" class="block text-sm font-medium text-gray-800">
                            Email Address
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                            <input id="email" v-model="email" type="email" required
                                class="w-full pl-10 pr-4 py-3 bg-white/20 border border-gray-400/40 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all duration-200"
                                placeholder="Enter your email"
                                :class="{ 'border-red-500 ring-1 ring-red-500': emailError }" />
                        </div>
                        <p v-if="emailError" class="text-red-600 text-sm">{{ emailError }}</p>
                    </div>

                    <!-- Password Input -->
                    <div class="space-y-2">
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium text-gray-800">
                                Password
                            </label>
                            <a href="#" class="text-sm text-gray-900 hover:text-gray-700 transition-colors font-medium underline">
                                Forgot password?
                            </a>
                        </div>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg class="h-5 w-5 text-gray-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <input id="password" v-model="password" :type="showPassword ? 'text' : 'password'" required
                                class="w-full pl-10 pr-12 py-3 bg-white/20 border border-gray-400/40 rounded-xl text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent transition-all duration-200"
                                placeholder="Enter your password"
                                :class="{ 'border-red-500 ring-1 ring-red-500': passwordError }" />
                            <button type="button" @click="showPassword = !showPassword"
                                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-gray-900 transition-colors">
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
                        <p v-if="passwordError" class="text-red-600 text-sm">{{ passwordError }}</p>
                    </div>

                    <!-- Remember Me & Additional Options -->
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember-me" v-model="rememberMe" type="checkbox"
                                class="h-4 w-4 text-gray-800 bg-white/30 border border-gray-400 rounded focus:ring-gray-600 focus:ring-2" />
                            <label for="remember-me" class="ml-2 block text-sm text-gray-700">
                                Remember me
                            </label>
                        </div>
                    </div>

                    <!-- Submit Button -->
                    <button type="submit" :disabled="loading || !isFormValid"
                        class="w-full py-3 px-4 bg-black hover:from-gray-900 hover:to-black disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-transparent">
                        <span v-if="loading" class="flex items-center justify-center">
                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                            Signing In...
                        </span>
                        <span v-else>Sign In</span>
                    </button>
                </form>

                <!-- Success/Error Messages -->
                <div v-if="message" class="rounded-lg p-4 text-center transition-all duration-300" :class="{
                    'bg-green-100/80 border border-green-400/50 text-green-800': messageType === 'success',
                    'bg-red-100/80 border border-red-400/50 text-red-800': messageType === 'error'
                }">
                    <div class="flex items-center justify-center space-x-2">
                        <svg v-if="messageType === 'success'" class="h-5 w-5 text-green-600" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg v-else-if="messageType === 'error'" class="h-5 w-5 text-red-600" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p class="font-medium">{{ message }}</p>
                    </div>
                </div>

                <!-- Social Sign In -->
                <div class="space-y-4">
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-400/40"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="px-2 bg-white/20 text-gray-600">Or continue with</span>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <button type="button"
                            class="w-full inline-flex justify-center py-2 px-4 border border-gray-400/40 rounded-lg shadow-sm bg-white/10 text-sm font-medium text-gray-700 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-600">
                            <svg class="h-5 w-5" viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="currentColor"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="currentColor"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="currentColor"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            <span class="ml-2">Google</span>
                        </button>
                    </div>
                </div>

                <!-- Footer -->
                <div class="text-center">
                    <p class="text-blue-500 text-sm">
                        Don't have an account?
                        <router-link to="/signup" class="text-blue-500 hover:text-gray-700 transition-colors font-medium underline">
                            Sign up
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
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const message = ref('')
const messageType = ref('') // 'success' or 'error'
const loading = ref(false)
const showPassword = ref(false)
const router = useRouter()


// Error states
const emailError = ref('')
const passwordError = ref('')

// Form validation
const isFormValid = computed(() => {
    return email.value.length > 0 &&
        password.value.length > 0 &&
        !emailError.value &&
        !passwordError.value
})

// Validation functions
const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.value) && email.value.length > 0) {
        emailError.value = 'Please enter a valid email address'
    } else {
        emailError.value = ''
    }
}

const validatePassword = () => {
    if (password.value.length > 0 && password.value.length < 6) {
        passwordError.value = 'Password must be at least 6 characters'
    } else {
        passwordError.value = ''
    }
}

// Watch for input changes to validate in real-time
watch(email, validateEmail)
watch(password, validatePassword)

// Sign In function
const signIn = async () => {
    // Validate all fields first
    validateEmail()
    validatePassword()

    if (!isFormValid.value) {
        return
    }

    loading.value = true
    message.value = ''

    try {
        const { error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value
        })

        if (error) {
            message.value = error.message
            messageType.value = 'error'
        } else {
            message.value = 'Successfully signed in! Redirecting...'
            messageType.value = 'success'

            // Clear form on success
            email.value = ''
            password.value = ''

            setTimeout(() => {
                router.push('/mycamp')
            }, 2000)
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
/* Taichi-inspired background */
.taichi-background {
    background: linear-gradient(135deg, 
        #ffffff 0%, 
        #f8f9fa 25%, 
        #000000 25%, 
        #1a1a1a 50%, 
        #ffffff 50%, 
        #f8f9fa 75%, 
        #000000 75%, 
        #1a1a1a 100%
    );
    background-size: 200px 200px;
    animation: taichi-flow 30s linear infinite;
}

/* Mobile optimizations */
@media (max-width: 640px) {
    .taichi-background {
        background-size: 150px 150px;
    }
}

@keyframes taichi-flow {
    0% { background-position: 0% 0%; }
    100% { background-position: 100% 100%; }
}

.yin-yang-small {
    width: 40px;
    height: 40px;
    background: linear-gradient(to right, #000 50%, #fff 50%);
    border-radius: 50%;
    position: relative;
    opacity: 0.4;
}

/* Mobile responsive small yin yang */
@media (min-width: 640px) {
    .yin-yang-small {
        width: 60px;
        height: 60px;
        opacity: 0.3;
    }
}

.yin-yang-small::before {
    content: '';
    position: absolute;
    top: 0;
    left: 25%;
    width: 50%;
    height: 50%;
    background: #fff;
    border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
}

.yin-yang-small::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 25%;
    width: 50%;
    height: 50%;
    background: #000;
    border-radius: 50% 50% 50% 50% / 0% 0% 100% 100%;
}

@keyframes float-2 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(-180deg); }
}

@keyframes float-4 {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-35px) rotate(-180deg); }
}

.floating-2 { animation: float-2 6s ease-in-out infinite; }
.floating-4 { animation: float-4 7s ease-in-out infinite; }
</style>