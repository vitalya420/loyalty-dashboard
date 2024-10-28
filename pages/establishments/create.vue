<template>
  <div>
    <div class="grid-2">
      <Card title="Establishment Info" class="col" subtitle="Establishment information">
        <form class="form" style="padding: 10px 0px;">
          <div class="input-group">
            <label for="address">Address:</label>
            <input type="text" id="address" class="text-input" placeholder="Enter full address">
          </div>
          <div class="input-group">
            <label for="desc">Description:</label>
            <textarea id="desc" rows="3" class="text-input" placeholder="Enter description (optional)"></textarea>
          </div>
          <div class="input-group">
            <label for="">Select Images</label>
            <ImagesSelect></ImagesSelect>
          </div>
        </form>
      </Card>
      <Card title="Settings" class="col" subtitle="Set business settings">
        <form class="form">
          <div class="input-group row" style="padding: 10px 0px;">
            <label for="tz">Timezone:</label>
            <select id="tz" class="text-input" v-model="selectedTimezone">
              <option v-for="timezone in timezones" :key="timezone.value" :value="timezone.value">
                {{ timezone.label }}
              </option>
            </select>
          </div>
        </form>
      </Card>
    </div>
    <Card title="Work Schedule" subtitle="Set establishment's work schedule">
      <work-schedule></work-schedule>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTimezone: '',
      timezones: [
        { label: 'GMT-12:00', value: 'GMT-12:00' },
        { label: 'GMT-11:00', value: 'GMT-11:00' },
        { label: 'GMT-10:00', value: 'GMT-10:00' },
        { label: 'GMT-09:00', value: 'GMT-09:00' },
        { label: 'GMT-08:00', value: 'GMT-08:00' },
        { label: 'GMT-07:00', value: 'GMT-07:00' },
        { label: 'GMT-06:00', value: 'GMT-06:00' },
        { label: 'GMT-05:00', value: 'GMT-05:00' },
        { label: 'GMT-04:00', value: 'GMT-04:00' },
        { label: 'GMT-03:00', value: 'GMT-03:00' },
        { label: 'GMT-02:00', value: 'GMT-02:00' },
        { label: 'GMT-01:00', value: 'GMT-01:00' },
        { label: 'GMT+00:00', value: 'GMT+00:00' },
        { label: 'GMT+01:00', value: 'GMT+01:00' },
        { label: 'GMT+02:00', value: 'GMT+02:00' },
        { label: 'GMT+03:00', value: 'GMT+03:00' },
        { label: 'GMT+04:00', value: 'GMT+04:00' },
        { label: 'GMT+05:00', value: 'GMT+05:00' },
        { label: 'GMT+06:00', value: 'GMT+06:00' },
        { label: 'GMT+07:00', value: 'GMT+07:00' },
        { label: 'GMT+08:00', value: 'GMT+08:00' },
        { label: 'GMT+09:00', value: 'GMT+09:00' },
        { label: 'GMT+10:00', value: 'GMT+10:00' },
        { label: 'GMT+11:00', value: 'GMT+11:00' },
        { label: 'GMT+12:00', value: 'GMT+12:00' },
      ]
    };
  }
}
</script>
