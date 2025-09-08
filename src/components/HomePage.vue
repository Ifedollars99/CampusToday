<template>

  <div id="app">
    <div class="flex h-screen">
      <!-- Sidebar (collapsible) -->
      <aside :class="[
        'bg-gray-100 border-r p-4 flex flex-col fixed md:static inset-y-0 left-0 transform transition-transform duration-300 z-50',
        isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64 md:translate-x-0'
      ]">
        <!-- Logo / Title + Close btn for mobile -->
        <div class="flex items-center justify-between mb-8">
          <div class="flex items-center gap-3">
            <img src="https://i.pinimg.com/736x/82/42/e4/8242e42fed6d3dbedb696e30d815fb7f.jpg"
              class="w-12 h-12 rounded-full" alt="logo" />
            <h1 class="text-2xl font-semibold text-gray-800">InsightTrack</h1>
          </div>
          <!-- Cancel / Close button (mobile only) -->
          <button @click="isOpen = false" class="md:hidden text-2xl text-gray-800">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <!-- Navigation -->
        <nav class="flex flex-col gap-3">
          <a href="#" @click="activeSection = 'dashboard'" :class="['flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-200 text-gray-700',
            activeSection === 'dashboard' ? 'bg-blue-100 text-blue-700' : '']">
            <i class="bi bi-speedometer2"></i>
            Dashboard
          </a>
          <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-200 text-gray-700">
            <i class="bi bi-bar-chart-line"></i>
            Reports
          </a>
          <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-200 text-gray-700">
            <i class="bi bi-graph-up"></i>
            Analytics
          </a>
          <a href="#" class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-200 text-gray-700">
            <i class="bi bi-gear"></i>
            Settings
          </a>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-6 md:ml-14 overflow-y-auto">
        <!-- Top Bar (mobile only) -->
        <div class="flex items-center justify-between mb-6 md:hidden">
          <div class="flex flex-row gap-2">
            <img src="https://i.pinimg.com/736x/82/42/e4/8242e42fed6d3dbedb696e30d815fb7f.jpg"
              class="w-12 h-12 rounded-full" alt="logo" />
            <h2 class="text-lg font-bold text-gray-800">InsightTrack</h2>
          </div>
          <button @click="isOpen = !isOpen" class="text-3xl text-gray-800">
            <i class="bi bi-list"></i>
          </button>
        </div>

        <!-- Dashboard Content -->
        <div v-if="activeSection === 'dashboard'">
          <!-- Header -->
          <div data-aos="fade-up" class="mb-6">
            <h2 class="text-3xl font-bold text-gray-800 mb-2">Analytics Dashboard</h2>
            <p class="text-gray-600">Track user events, device usage, and key metrics</p>
          </div>

          <!-- Filters Section -->
          <div data-aos="fade-up" class="bg-white p-6 rounded-lg shadow-sm border mb-6">
            <div data-aos="fade-up" class="flex items-center gap-4 mb-4">
              <i class="bi bi-funnel text-xl text-gray-600"></i>
              <h3 class="text-lg font-semibold text-gray-800">Filters</h3>
              <button @click="resetFilters" class="ml-auto text-sm text-blue-600 hover:text-blue-800">
                <i class="bi bi-arrow-clockwise me-1"></i>Reset All
              </button>
            </div>

            <!-- Enhanced Filters Grid -->
            <div data-aos="fade-up" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <!-- Date Range -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                <div class="space-y-2">
                  <input type="date" v-model="filters.startDate"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="Start Date">
                  <input type="date" v-model="filters.endDate"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="End Date">
                </div>
              </div>

              <!-- Event Types -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Event Types</label>
                <div class="max-h-32 overflow-y-auto space-y-1 border rounded-md p-2 bg-gray-50">
                  <label v-for="event in eventTypes" :key="event" class="flex items-center text-xs">
                    <input type="checkbox" :value="event" v-model="filters.selectedEvents"
                      class="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-2">
                    <span class="text-gray-700 capitalize">{{ event.replace('_', ' ') }}</span>
                  </label>
                </div>
              </div>

              <!-- Device Types -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Device Types</label>
                <div class="space-y-2">
                  <label v-for="device in deviceTypes" :key="device" class="flex items-center">
                    <input type="checkbox" :value="device" v-model="filters.selectedDevices"
                      class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700 capitalize">{{ device }}</span>
                  </label>
                </div>
              </div>

              <!-- Locations -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Locations</label>
                <div class="max-h-32 overflow-y-auto space-y-1 border rounded-md p-2 bg-gray-50">
                  <label v-for="location in locations" :key="location" class="flex items-center text-xs">
                    <input type="checkbox" :value="location" v-model="filters.selectedLocations"
                      class="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-2">
                    <span class="text-gray-700">{{ location }}</span>
                  </label>
                </div>
              </div>

              <!-- Subscription Types -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Subscription</label>
                <div class="space-y-2">
                  <label v-for="sub in subscriptionTypes" :key="sub" class="flex items-center">
                    <input type="checkbox" :value="sub" v-model="filters.selectedSubscriptions"
                      class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700 capitalize">{{ sub }}</span>
                  </label>
                </div>
              </div>

              <!-- Age Groups -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Age Groups</label>
                <div class="space-y-2">
                  <label v-for="age in ageGroups" :key="age" class="flex items-center">
                    <input type="checkbox" :value="age" v-model="filters.selectedAgeGroups"
                      class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">{{ age }}</span>
                  </label>
                </div>
              </div>

              <!-- User ID Range -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">User ID Range</label>
                <div class="space-y-2">
                  <input type="number" v-model.number="filters.minUserId" placeholder="Min User ID"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                  <input type="number" v-model.number="filters.maxUserId" placeholder="Max User ID"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                </div>
              </div>

              <!-- Revenue Range -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Revenue Range</label>
                <div class="space-y-2">
                  <input type="number" step="0.01" v-model.number="filters.minRevenue" placeholder="Min Revenue ($)"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                  <input type="number" step="0.01" v-model.number="filters.maxRevenue" placeholder="Max Revenue ($)"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm">
                </div>
              </div>
            </div>

            <!-- Active Filters Display -->
            <div v-if="activeFiltersCount > 0" class="mt-4 pt-4 border-t">
              <div class="flex items-center gap-2 text-sm text-gray-600">
                <i class="bi bi-info-circle"></i>
                <span>{{ activeFiltersCount }} filter(s) active - Showing {{ filteredData.length.toLocaleString() }} of
                  {{ mockData.length.toLocaleString() }} events</span>
              </div>
            </div>
          </div>

          <!-- Tabs -->
          <div data-aos="fade-up" class="mb-6 border-b">
            <div class="flex space-x-8">
              <button @click="activeTab = 'overview'"
                :class="['pb-4 px-1 border-b-2 font-medium text-sm transition-colors',
                  activeTab === 'overview' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700']">
                <i class="bi bi-grid-3x3-gap me-2"></i>Overview
              </button>
              <button @click="activeTab = 'events'"
                :class="['pb-4 px-1 border-b-2 font-medium text-sm transition-colors',
                  activeTab === 'events' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700']">
                <i class="bi bi-calendar-event me-2"></i>Events
              </button>
              <button @click="activeTab = 'devices'"
                :class="['pb-4 px-1 border-b-2 font-medium text-sm transition-colors',
                  activeTab === 'devices' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700']">
                <i class="bi bi-phone me-2"></i>Devices
              </button>
            </div>
          </div>

          <!-- Overview Tab -->
          <div  v-if="activeTab === 'overview'">
            <!-- Enhanced Stats Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-8">
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-600">Total Users</p>
                    <p class="text-2xl font-bold text-gray-900">{{ totalUsers.toLocaleString() }}</p>
                  </div>
                  <i class="bi bi-people text-3xl text-blue-500"></i>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-600">Total Events</p>
                    <p class="text-2xl font-bold text-gray-900">{{ totalEvents.toLocaleString() }}</p>
                  </div>
                  <i class="bi bi-activity text-3xl text-green-500"></i>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-600">Signups</p>
                    <p class="text-2xl font-bold text-gray-900">{{ totalSignups.toLocaleString() }}</p>
                  </div>
                  <i class="bi bi-person-plus text-3xl text-purple-500"></i>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-600">Purchases</p>
                    <p class="text-2xl font-bold text-gray-900">{{ totalPurchases.toLocaleString() }}</p>
                  </div>
                  <i class="bi bi-cart text-3xl text-orange-500"></i>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-600">Total Revenue</p>
                    <p class="text-2xl font-bold text-gray-900">${{ totalRevenue.toFixed(2) }}</p>
                  </div>
                  <i class="bi bi-currency-dollar text-3xl text-emerald-500"></i>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-600">Avg Order Value</p>
                    <p class="text-2xl font-bold text-gray-900">${{ averageOrderValue.toFixed(2) }}</p>
                  </div>
                  <i class="bi bi-graph-up text-3xl text-indigo-500"></i>
                </div>
              </div>
            </div>

            <!-- Additional Analytics Row -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-600">Conversion Rate</p>
                    <p class="text-3xl font-bold text-gray-900">{{ conversionRate.toFixed(1) }}%</p>
                    <p class="text-xs text-gray-500 mt-1">Signups to Purchases</p>
                  </div>
                  <i class="bi bi-arrow-up-right text-3xl text-green-500"></i>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-600">Top Location</p>
                    <p class="text-2xl font-bold text-gray-900">
                      {{ topLocation }}
                    </p>
                  </div>
                  <i class="bi bi-geo-alt text-3xl text-blue-500"></i>
                </div>
              </div>
              <div  class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-600">Top Event</p>
                    <p class="text-xl font-bold text-gray-900 capitalize">
                      {{ topEvent }}
                    </p>
                  </div>
                  <i class="bi bi-star text-3xl text-yellow-500"></i>
                </div>
              </div>
            </div>

            <!-- Charts -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Daily Activity</h3>
                <canvas ref="dailyChart"></canvas>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Event Distribution</h3>
                <canvas ref="eventChart"></canvas>
              </div>
            </div>
          </div>

          <!-- Events Tab -->
          <div v-if="activeTab === 'events'">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Events by Type</h3>
                <canvas ref="eventTypeChart"></canvas>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Events Timeline</h3>
                <canvas ref="timelineChart"></canvas>
              </div>
            </div>

            <!-- Enhanced Event Table -->
            <div class="bg-white p-6 rounded-lg shadow-sm border mt-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-gray-800">Recent Events</h3>
                <div class="text-sm text-gray-500">
                  Showing {{ Math.min(filteredData.length, 50) }} of {{ filteredData.length.toLocaleString() }} events
                </div>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left text-sm">
                  <thead>
                    <tr class="border-b bg-gray-50">
                      <th class="pb-3 pt-3 px-3 text-gray-600 font-medium">User</th>
                      <th class="pb-3 pt-3 px-3 text-gray-600 font-medium">Event</th>
                      <th class="pb-3 pt-3 px-3 text-gray-600 font-medium">Device</th>
                      <th class="pb-3 pt-3 px-3 text-gray-600 font-medium">Location</th>
                      <th class="pb-3 pt-3 px-3 text-gray-600 font-medium">Subscription</th>
                      <th class="pb-3 pt-3 px-3 text-gray-600 font-medium">Revenue</th>
                      <th class="pb-3 pt-3 px-3 text-gray-600 font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(event, index) in filteredData.slice(0, 50)"
                      :key="event.user_id + event.timestamp + index" class="border-b hover:bg-gray-50">
                      <td class="py-3 px-3">
                        <div class="flex items-center gap-2">
                          <span class="font-medium text-gray-900">#{{ event.user_id }}</span>
                          <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{{ event.age_group }}</span>
                        </div>
                      </td>
                      <td class="py-3 px-3">
                        <span :class="getEventBadgeClass(event.event)">
                          {{ event.event.replace('_', ' ') }}
                        </span>
                      </td>
                      <td class="py-3 px-3">
                        <div class="flex items-center gap-1">
                          <i :class="getDeviceIcon(event.device)"></i>
                          <span class="capitalize text-gray-700">{{ event.device }}</span>
                        </div>
                      </td>
                      <td class="py-3 px-3">
                        <span class="font-mono text-gray-600">{{ event.location }}</span>
                      </td>
                      <td class="py-3 px-3">
                        <span :class="getSubscriptionBadgeClass(event.subscription_type)">
                          {{ event.subscription_type }}
                        </span>
                      </td>
                      <td class="py-3 px-3">
                        <span v-if="event.revenue > 0" class="text-green-600 font-medium">
                          ${{ event.revenue.toFixed(2) }}
                        </span>
                        <span v-else class="text-gray-400">-</span>
                      </td>
                      <td class="py-3 px-3 text-gray-600">{{ event.date }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Top Pages Section -->
              <div v-if="topPages.length > 0" class="mt-6 pt-6 border-t">
                <h4 class="text-md font-semibold text-gray-800 mb-3">Top Pages</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div v-for="[page, count] in topPages.slice(0, 10)" :key="page"
                    class="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span class="text-sm font-mono text-gray-700">{{ page }}</span>
                    <span class="text-sm font-medium text-blue-600">{{ count }} views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Devices Tab -->
          <div v-if="activeTab === 'devices'">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Device Usage</h3>
                <canvas ref="deviceChart"></canvas>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Device Performance</h3>
                <canvas ref="devicePerformanceChart"></canvas>
              </div>
            </div>

            <!-- Device Stats -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="flex items-center gap-4">
                  <i class="bi bi-phone text-3xl text-blue-500"></i>
                  <div>
                    <p class="text-sm text-gray-600">Mobile</p>
                    <p class="text-2xl font-bold text-gray-900">{{ deviceStats.mobile.toLocaleString() }}</p>
                  </div>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="flex items-center gap-4">
                  <i class="bi bi-laptop text-3xl text-green-500"></i>
                  <div>
                    <p class="text-sm text-gray-600">Desktop</p>
                    <p class="text-2xl font-bold text-gray-900">{{ deviceStats.desktop.toLocaleString() }}</p>
                  </div>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="flex items-center gap-4">
                  <i class="bi bi-tablet text-3xl text-purple-500"></i>
                  <div>
                    <p class="text-sm text-gray-600">Tablet</p>
                    <p class="text-2xl font-bold text-gray-900">{{ deviceStats.tablet.toLocaleString() }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- Export/Download Section -->
        <div class="bg-white p-6 rounded-lg shadow-sm border mb-6">
          <div class="flex items-center gap-4 mb-4">
            <i class="bi bi-download text-xl text-gray-600"></i>
            <h3 class="text-lg font-semibold text-gray-800">Export / Download</h3>
          </div>

          <div class="flex flex-wrap gap-3">
            <!-- JSON Export -->
            <button @click="exportJSON"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 text-sm">
              <i class="bi bi-filetype-json me-1"></i> Export JSON
            </button>

            <!-- Copy Data -->
            <button @click="copyToClipboard"
              class="px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 text-sm">
              <i class="bi bi-clipboard me-1"></i> Copy Data
            </button>

            <!-- Disabled buttons for PDF & CSV -->
            <button disabled class="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg shadow cursor-not-allowed text-sm">
              <i class="bi bi-filetype-pdf me-1"></i> PDF (Disabled)
            </button>
            <button disabled class="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg shadow cursor-not-allowed text-sm">
              <i class="bi bi-filetype-csv me-1"></i> CSV (Disabled)
            </button>
          </div>
        </div>

      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, watch } from "vue";
import Chart from 'chart.js/auto';

const isOpen = ref(false);
const activeSection = ref('dashboard');
const activeTab = ref('overview');

// Enhanced Mock Data Generator
const generateEnhancedMockData = () => {
  const events = [
    'signup', 'login', 'page_view', 'button_click', 'form_submit',
    'purchase', 'add_to_cart', 'checkout_start', 'video_watch',
    'download', 'search', 'profile_update', 'logout', 'share_content',
    'email_open', 'email_click', 'feature_usage'
  ];

  const devices = ['mobile', 'desktop', 'tablet'];
  const locations = ['US', 'UK', 'CA', 'AU', 'DE', 'FR', 'JP', 'BR', 'IN', 'MX'];
  const subscriptionTypes = ['free', 'basic', 'premium', 'enterprise'];
  const ageGroups = ['18-25', '26-35', '36-45', '46-55', '55+'];
  const sources = ['organic', 'paid_search', 'social', 'email', 'direct', 'referral'];

  const pages = [
    '/home', '/dashboard', '/profile', '/settings', '/billing',
    '/features', '/pricing', '/about', '/contact', '/blog',
    '/product/analytics', '/product/reports', '/help/docs'
  ];

  const users = [];
  for (let i = 1; i <= 200; i++) {
    users.push({
      user_id: i,
      age_group: ageGroups[Math.floor(Math.random() * ageGroups.length)],
      location: locations[Math.floor(Math.random() * locations.length)],
      subscription_type: subscriptionTypes[Math.floor(Math.random() * subscriptionTypes.length)],
      signup_date: getRandomDate(new Date('2024-06-01'), new Date('2025-08-31')),
      acquisition_source: sources[Math.floor(Math.random() * sources.length)]
    });
  }

  const mockEvents = [];
  const startDate = new Date('2024-06-01');
  const endDate = new Date('2025-08-31');

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    const currentDate = d.toISOString().split('T')[0];
    const isWeekend = d.getDay() === 0 || d.getDay() === 6;
    const baseEvents = isWeekend ? 50 : 100;
    const dailyEventCount = Math.floor(Math.random() * baseEvents) + 20;

    for (let e = 0; e < dailyEventCount; e++) {
      const user = users[Math.floor(Math.random() * users.length)];
      const event = events[Math.floor(Math.random() * events.length)];

      let eventData = {
        user_id: user.user_id,
        event: event,
        device: devices[Math.floor(Math.random() * devices.length)],
        date: currentDate,
        timestamp: currentDate + 'T' + String(Math.floor(Math.random() * 24)).padStart(2, '0') +
          ':' + String(Math.floor(Math.random() * 60)).padStart(2, '0') + ':00Z',

        // User properties
        age_group: user.age_group,
        location: user.location,
        subscription_type: user.subscription_type,
        acquisition_source: user.acquisition_source,

        // Event-specific properties
        page_url: event === 'page_view' ? pages[Math.floor(Math.random() * pages.length)] : null,
        revenue: 0,
        session_duration: Math.floor(Math.random() * 1800) + 60,
        browser: ['Chrome', 'Firefox', 'Safari', 'Edge'][Math.floor(Math.random() * 4)],
        os: ['Windows', 'macOS', 'iOS', 'Android', 'Linux'][Math.floor(Math.random() * 5)]
      };

      // Add revenue for purchase events
      if (event === 'purchase') {
        const revenueRanges = {
          'free': [0, 0],
          'basic': [9.99, 29.99],
          'premium': [49.99, 99.99],
          'enterprise': [199.99, 999.99]
        };
        const range = revenueRanges[user.subscription_type];
        eventData.revenue = Math.round((Math.random() * (range[1] - range[0]) + range[0]) * 100) / 100;
      }

      // Add specific properties for certain events
      if (event === 'button_click') {
        eventData.button_name = ['signup', 'login', 'upgrade', 'download', 'share', 'save'][Math.floor(Math.random() * 6)];
      }

      if (event === 'form_submit') {
        eventData.form_type = ['contact', 'newsletter', 'feedback', 'support'][Math.floor(Math.random() * 4)];
      }

      mockEvents.push(eventData);
    }
  }

  return mockEvents;
};

function getRandomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    .toISOString().split('T')[0];
}

// Generate enhanced mock data
const mockData = ref(generateEnhancedMockData());

// Enhanced Filter Options
const eventTypes = computed(() => [...new Set(mockData.value.map(item => item.event))]);
const deviceTypes = computed(() => [...new Set(mockData.value.map(item => item.device))]);
const locations = computed(() => [...new Set(mockData.value.map(item => item.location))]);
const subscriptionTypes = computed(() => [...new Set(mockData.value.map(item => item.subscription_type))]);
const ageGroups = computed(() => [...new Set(mockData.value.map(item => item.age_group))]);

// Enhanced Filters
const filters = ref({
  startDate: '',
  endDate: '',
  selectedEvents: [],
  selectedDevices: [],
  selectedLocations: [],
  selectedSubscriptions: [],
  selectedAgeGroups: [],
  minUserId: null,
  maxUserId: null,
  minRevenue: null,
  maxRevenue: null
});

// Initialize filters with all options selected
onMounted(() => {
  filters.value.selectedEvents = [...eventTypes.value];
  filters.value.selectedDevices = [...deviceTypes.value];
  filters.value.selectedLocations = [...locations.value];
  filters.value.selectedSubscriptions = [...subscriptionTypes.value];
  filters.value.selectedAgeGroups = [...ageGroups.value];
});

// Enhanced Filter Logic
const filteredData = computed(() => {
  return mockData.value.filter(item => {
    if (filters.value.startDate && item.date < filters.value.startDate) return false;
    if (filters.value.endDate && item.date > filters.value.endDate) return false;
    if (filters.value.selectedEvents.length > 0 && !filters.value.selectedEvents.includes(item.event)) return false;
    if (filters.value.selectedDevices.length > 0 && !filters.value.selectedDevices.includes(item.device)) return false;
    if (filters.value.selectedLocations.length > 0 && !filters.value.selectedLocations.includes(item.location)) return false;
    if (filters.value.selectedSubscriptions.length > 0 && !filters.value.selectedSubscriptions.includes(item.subscription_type)) return false;
    if (filters.value.selectedAgeGroups.length > 0 && !filters.value.selectedAgeGroups.includes(item.age_group)) return false;
    if (filters.value.minUserId !== null && item.user_id < filters.value.minUserId) return false;
    if (filters.value.maxUserId !== null && item.user_id > filters.value.maxUserId) return false;
    if (filters.value.minRevenue !== null && item.revenue < filters.value.minRevenue) return false;
    if (filters.value.maxRevenue !== null && item.revenue > filters.value.maxRevenue) return false;

    return true;
  });
});

// Export filtered data as JSON
const exportJSON = () => {
  const dataStr = JSON.stringify(filteredData.value, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "analytics_data.json";
  link.click();

  URL.revokeObjectURL(url);
};

// Copy filtered data to clipboard
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(JSON.stringify(filteredData.value, null, 2));
    alert("Filtered data copied to clipboard!");
  } catch (err) {
    alert("Failed to copy data.");
  }
};


// Active filters count
const activeFiltersCount = computed(() => {
  let count = 0;
  if (filters.value.startDate) count++;
  if (filters.value.endDate) count++;
  if (filters.value.selectedEvents.length !== eventTypes.value.length) count++;
  if (filters.value.selectedDevices.length !== deviceTypes.value.length) count++;
  if (filters.value.selectedLocations.length !== locations.value.length) count++;
  if (filters.value.selectedSubscriptions.length !== subscriptionTypes.value.length) count++;
  if (filters.value.selectedAgeGroups.length !== ageGroups.value.length) count++;
  if (filters.value.minUserId !== null) count++;
  if (filters.value.maxUserId !== null) count++;
  if (filters.value.minRevenue !== null) count++;
  if (filters.value.maxRevenue !== null) count++;
  return count;
});

// Reset filters
const resetFilters = () => {
  filters.value = {
    startDate: '',
    endDate: '',
    selectedEvents: [...eventTypes.value],
    selectedDevices: [...deviceTypes.value],
    selectedLocations: [...locations.value],
    selectedSubscriptions: [...subscriptionTypes.value],
    selectedAgeGroups: [...ageGroups.value],
    minUserId: null,
    maxUserId: null,
    minRevenue: null,
    maxRevenue: null
  };
};

// Chart refs
const dailyChart = ref(null);
const eventChart = ref(null);
const eventTypeChart = ref(null);
const timelineChart = ref(null);
const deviceChart = ref(null);
const devicePerformanceChart = ref(null);

// Enhanced computed stats
const totalUsers = computed(() => {
  return new Set(filteredData.value.map(item => item.user_id)).size;
});

const totalEvents = computed(() => {
  return filteredData.value.length;
});

const totalSignups = computed(() => {
  return filteredData.value.filter(item => item.event === 'signup').length;
});

const totalPurchases = computed(() => {
  return filteredData.value.filter(item => item.event === 'purchase').length;
});

const totalRevenue = computed(() => {
  return filteredData.value
    .filter(item => item.revenue > 0)
    .reduce((sum, item) => sum + item.revenue, 0);
});

const averageOrderValue = computed(() => {
  const purchases = filteredData.value.filter(item => item.event === 'purchase' && item.revenue > 0);
  if (purchases.length === 0) return 0;
  return purchases.reduce((sum, item) => sum + item.revenue, 0) / purchases.length;
});

const conversionRate = computed(() => {
  const signups = filteredData.value.filter(item => item.event === 'signup').length;
  const purchases = filteredData.value.filter(item => item.event === 'purchase').length;
  return signups > 0 ? (purchases / signups * 100) : 0;
});

const deviceStats = computed(() => {
  const stats = { mobile: 0, desktop: 0, tablet: 0 };
  filteredData.value.forEach(item => {
    stats[item.device]++;
  });
  return stats;
});

const topPages = computed(() => {
  const pageViews = filteredData.value.filter(item => item.page_url);
  const pageCounts = {};
  pageViews.forEach(item => {
    pageCounts[item.page_url] = (pageCounts[item.page_url] || 0) + 1;
  });
  return Object.entries(pageCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10);
});

const topLocation = computed(() => {
  const locationCounts = {};
  filteredData.value.forEach(item => {
    locationCounts[item.location] = (locationCounts[item.location] || 0) + 1;
  });
  const sorted = Object.entries(locationCounts).sort(([, a], [, b]) => b - a);
  return sorted.length > 0 ? sorted[0][0] : 'N/A';
});

const topEvent = computed(() => {
  const eventCounts = {};
  filteredData.value.forEach(item => {
    eventCounts[item.event] = (eventCounts[item.event] || 0) + 1;
  });
  const sorted = Object.entries(eventCounts).sort(([, a], [, b]) => b - a);
  return sorted.length > 0 ? sorted[0][0].replace('_', ' ') : 'N/A';
});

// Helper functions for styling
const getEventBadgeClass = (event) => {
  const classes = {
    'signup': 'bg-green-100 text-green-700',
    'purchase': 'bg-blue-100 text-blue-700',
    'login': 'bg-purple-100 text-purple-700',
    'page_view': 'bg-yellow-100 text-yellow-700',
    'button_click': 'bg-orange-100 text-orange-700',
    'form_submit': 'bg-indigo-100 text-indigo-700',
    'add_to_cart': 'bg-pink-100 text-pink-700'
  };
  return `px-2 py-1 rounded-full text-xs font-medium ${classes[event] || 'bg-gray-100 text-gray-700'}`;
};

const getDeviceIcon = (device) => {
  const icons = {
    'mobile': 'bi bi-phone text-blue-500',
    'desktop': 'bi bi-laptop text-green-500',
    'tablet': 'bi bi-tablet text-purple-500'
  };
  return `text-sm ${icons[device] || 'bi bi-device-hdd text-gray-500'}`;
};

const getSubscriptionBadgeClass = (subscription) => {
  const classes = {
    'free': 'bg-gray-100 text-gray-600',
    'basic': 'bg-blue-100 text-blue-600',
    'premium': 'bg-purple-100 text-purple-600',
    'enterprise': 'bg-yellow-100 text-yellow-700'
  };
  return `px-2 py-1 rounded text-xs font-medium ${classes[subscription] || 'bg-gray-100 text-gray-600'}`;
};

// Chart instances
let chartInstances = {};

const createCharts = async () => {
  await nextTick();

  Object.values(chartInstances).forEach(chart => {
    if (chart) chart.destroy();
  });
  chartInstances = {};

  if (activeTab.value === 'overview') {
    createOverviewCharts();
  } else if (activeTab.value === 'events') {
    createEventCharts();
  } else if (activeTab.value === 'devices') {
    createDeviceCharts();
  }
};

const createOverviewCharts = () => {
  if (dailyChart.value) {
    const dailyData = {};
    filteredData.value.forEach(item => {
      dailyData[item.date] = (dailyData[item.date] || 0) + 1;
    });

    chartInstances.daily = new Chart(dailyChart.value, {
      type: 'line',
      data: {
        labels: Object.keys(dailyData).sort(),
        datasets: [{
          label: 'Daily Events',
          data: Object.keys(dailyData).sort().map(date => dailyData[date]),
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true },
          x: { ticks: { maxTicksLimit: 10 } }
        }
      }
    });
  }

  if (eventChart.value) {
    const eventData = {};
    filteredData.value.forEach(item => {
      eventData[item.event] = (eventData[item.event] || 0) + 1;
    });

    chartInstances.event = new Chart(eventChart.value, {
      type: 'doughnut',
      data: {
        labels: Object.keys(eventData),
        datasets: [{
          data: Object.values(eventData),
          backgroundColor: [
            '#10B981', '#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444',
            '#14B8A6', '#F97316', '#84CC16', '#6366F1', '#EC4899',
            '#06B6D4', '#8B5A2B', '#DC2626', '#059669', '#7C3AED'
          ]
        }]
      },
      options: { responsive: true }
    });
  }
};

const createEventCharts = () => {
  if (eventTypeChart.value) {
    const eventData = {};
    filteredData.value.forEach(item => {
      eventData[item.event] = (eventData[item.event] || 0) + 1;
    });

    chartInstances.eventType = new Chart(eventTypeChart.value, {
      type: 'bar',
      data: {
        labels: Object.keys(eventData),
        datasets: [{
          label: 'Count',
          data: Object.values(eventData),
          backgroundColor: '#3B82F6'
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true },
          x: { ticks: { maxRotation: 45 } }
        }
      }
    });
  }

  if (timelineChart.value) {
    const dailyData = {};
    filteredData.value.forEach(item => {
      dailyData[item.date] = (dailyData[item.date] || 0) + 1;
    });

    chartInstances.timeline = new Chart(timelineChart.value, {
      type: 'line',
      data: {
        labels: Object.keys(dailyData).sort(),
        datasets: [{
          label: 'Events',
          data: Object.keys(dailyData).sort().map(date => dailyData[date]),
          borderColor: 'rgb(139, 92, 246)',
          backgroundColor: 'rgba(139, 92, 246, 0.1)',
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true },
          x: { ticks: { maxTicksLimit: 10 } }
        }
      }
    });
  }
};

const createDeviceCharts = () => {
  if (deviceChart.value) {
    chartInstances.device = new Chart(deviceChart.value, {
      type: 'pie',
      data: {
        labels: Object.keys(deviceStats.value),
        datasets: [{
          data: Object.values(deviceStats.value),
          backgroundColor: ['#3B82F6', '#10B981', '#8B5CF6']
        }]
      },
      options: { responsive: true }
    });
  }

  if (devicePerformanceChart.value) {
    chartInstances.devicePerf = new Chart(devicePerformanceChart.value, {
      type: 'bar',
      data: {
        labels: Object.keys(deviceStats.value),
        datasets: [{
          label: 'Usage Count',
          data: Object.values(deviceStats.value),
          backgroundColor: ['#3B82F6', '#10B981', '#8B5CF6']
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
      }
    });
  }
};

watch([filteredData, activeTab], () => {
  createCharts();
}, { deep: false });

onMounted(() => {
  createCharts();
});


</script>

<style>
@media (max-width: 768px) {
  aside {
    width: 16rem;
  }
}
</style>
