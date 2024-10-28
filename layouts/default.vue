<template>
  <div :class="themeClass" class="app-wrapper">
    <Sidebar :items="sidebarItems"></Sidebar>
    <main class="app-main">
      <NavBar :toggleTheme="toggleTheme" :isDarkMode="isDarkMode"></NavBar>
      <div class="page-view">
        <NuxtPage></NuxtPage>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  setup() {
    const theme = ref('light');
    const sidebarItems = [
      { name: "Dashboard", icon: 'bi-house', to: '/' },
      { name: "Establishments", icon: 'bi-building', to: '/establishments' },
      { name: "News", icon: 'bi-newspaper', to: '/news' },
      { name: "Promotions", icon: 'bi-percent', to: '/promotions' },
      { name: "Stamps", icon: 'bi-check-circle', to: '/stamps' },
      { name: "Coupons", icon: 'bi-gift', to: '/coupouns' },
      { name: "Manage staff", icon: 'bi-person-lines-fill', to: '/staff' },
      { name: "Menu", icon: 'bi-cup-hot', to: '/menu' },
      { name: "Clients", icon: 'bi-people', to: '/clients' },
      { name: "Feedbacks", icon: 'bi-star', to: '/feedbacks' },
      { name: "Logs", icon: 'bi-journal-text', to: '/logs' },
      { name: "Settings", icon: 'bi-gear', to: '/settings' },
    ];

    const themeClass = computed(() => `${theme.value}-theme`);
    const isDarkMode = computed(() => theme.value === 'dark');

    const toggleTheme = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light';
      if (import.meta.client) {
        localStorage.setItem('theme', theme.value);
      }
    };

    onMounted(() => {
      if (import.meta.client) {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
          theme.value = storedTheme;
        }
      }
    });

    return {
      themeClass,
      toggleTheme,
      sidebarItems,
      isDarkMode, 
    };
  }
}
</script>

<style>
.app-wrapper {
  display: flex;
  height: 100dvh;
  overflow-x: hidden;
  background-color: var(--background-color);
  color: var(--text-color);
  transition: all 0.3s ease;
}

.app-main {
  flex-grow: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: var(--text-color) var(--background-primary-color);
}


.page-view {
  margin: calc(10px + 15px);
}
</style>
