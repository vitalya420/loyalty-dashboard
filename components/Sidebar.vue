<template>
  <div class="sidebar-wrapper">
    <div v-if="expanded" class="backdrop" @click="collapse"></div>
    
    <div class="sidebar" :class="{ 'sidebar-expanded': expanded }">
      <div class="sidebar-head">
        <div class="sidebar-logo" :class="{ 'opacity-0': !expanded }"></div>
        <button class="sidebar-switch-btn btn" @click="switchSidebar">
          <i class="bi" :class="expanded ? 'bi-caret-left-fill' : 'bi-caret-right-fill'"></i>
        </button>
      </div>
      
      <hr>
      
      <div class="sidebar-body">
        <div 
          class="sidebar-item" 
          :class="{ active: isActive(item.to) }" 
          v-for="item in items" 
          :key="item.to"
          @click="this.$router.push({path: item.to})"
        >
          <div class="sidebar-item-icon">
            <i class="bi" :class="item.icon"></i>
          </div>
          <nuxt-link :to="item.to" class="sidebar-item-text">{{ item.name }}</nuxt-link>
        </div>
      </div>
      
      <div class="sidebar-footer">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      expanded: false,
    }
  },
  methods: {
    expand(){
      this.expanded = true;
    },
    collapse(){
      this.expanded = false;
    },
    switchSidebar(){
      this.expanded = !this.expanded;
    },
    isActive(path){
      const regex = new RegExp(`^${path}(\\/.*)?$`);
      return regex.test(this.$route.path);
    }
  }
}
</script>

<style scoped>
@import '../assets/styles/sidebar.css';


</style>