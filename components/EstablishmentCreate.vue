<template>
  <div class="create-card" @click="this.$router.push({path: '/establishments/create'})">
    <div class="center" v-if="!inCreateMode">
      <i class="bi bi-building-add icon"></i>
      <span class="hint">
        Click here to create new establishment
      </span>
    </div>
    <div class="create-form" v-else>
      <div class="input-group">
        <label for="img">Select Image</label>
        <input type="file">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inCreateMode: false,
    }
  },
  methods: {
    createMode(){
      if (!this.inCreateMode){
        this.inCreateMode = true;
      }
    },
    disableCreateMode(){
      this.inCreateMode = false;
    }
  }
}
</script>

<style scoped>
.create-card {
  border-radius: 6px;
  min-width: 240px;
  max-width: 300px;
  transition: all 0.3s ease;
  border: 1px dashed var(--border-color);
  cursor: pointer;
  background: var(--background-color);
}

.theme-dark  .create-card {
  border: 1px dashed var(--dark-border-color);
  background: var(--dark-background-color);
}

.center {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.icon {
  font-size: 50px;
}

.hint {
  font-size: 12px;
}

.create-form {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>