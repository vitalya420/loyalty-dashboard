<template>
  <div :class="themeClass" class="app-wrapper">
    <Sidebar :items="sidebarItems" :toggleTheme="toggleTheme"></Sidebar>
    <main class="app-main">
      <div class="page-view">
        <NuxtPage></NuxtPage>
      </div>
    </main>
  </div>
</template>


<script>
export default {
  setup() {
    const theme = ref('light');
    const sidebarItems = [
      { name: "Dashboard", icon: 'bi-house', to: '/' },
      { name: "Establishments", icon: 'bi-building', to: '/establishments' },
      { name: "News", icon: 'bi-newspaper', to: '/news' },
      { name: "Manage staff", icon: 'bi-person-lines-fill', to: '/staff' },
      { name: "Menu", icon: 'bi-cup-hot', to: '/menu' },
      { name: "Clients", icon: 'bi-people', to: '/clients' },
      { name: "Feedbacks", icon: 'bi-star', to: '/feedbacks' },
      { name: "Settings", icon: 'bi-gear', to: '/settings' },
    ];

    const themeClass = computed(() => `theme-${theme.value}`);

    const toggleTheme = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light';
      if (import.meta.client) {
        localStorage.setItem('theme', theme.value); // Store the theme in local storage
      }
    };

    onMounted(() => {
      if (import.meta.client) {
        const storedTheme = localStorage.getItem('theme'); // Retrieve the theme from local storage
        if (storedTheme) {
          theme.value = storedTheme; // Set the theme to the stored value
        }
      }
    });

    return {
      themeClass,
      toggleTheme,
      sidebarItems,
    };
  }
}
</script>


<style>
.app-wrapper {
  display: flex;
  height: 100dvh;
}

.app-main {
  flex-grow: 1;
}

.page-view {
  margin: calc(10px + 15px);
}



</style>