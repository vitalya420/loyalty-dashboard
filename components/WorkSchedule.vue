<template>
  <div class="work-schedule">
    <div v-for="(day, index) in days" :key="index" class="day">
      <div class="day-name">{{ day.name }}</div>
      <div class="input-group row">
        <label :for="'opened-' + day.name.toLowerCase()">Open</label>
        <input type="checkbox" class="switch" :id="'opened-' + day.name.toLowerCase()" v-model="day.isOpen">
      </div>
      <div class="input-group">
        <label>Open time</label>
        <input type="time" class="time-input" v-model="day.openTime">
      </div>
      <div class="input-group">
        <label>Close time</label>
        <input type="time" class="time-input" v-model="day.closeTime">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: [
        { name: 'Monday', isOpen: false, openTime: '', closeTime: '' },
        { name: 'Tuesday', isOpen: false, openTime: '', closeTime: '' },
        { name: 'Wednesday', isOpen: false, openTime: '', closeTime: '' },
        { name: 'Thursday', isOpen: false, openTime: '', closeTime: '' },
        { name: 'Friday', isOpen: false, openTime: '', closeTime: '' },
        { name: 'Saturday', isOpen: false, openTime: '', closeTime: '' },
        { name: 'Sunday', isOpen: false, openTime: '', closeTime: '' },
      ],
    };
  },
};
</script>

<style lang="scss" src='@/assets/styles/schedule.scss'>

</style>
