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
            <textarea id="desc" rows="3" class="text-input" placeholder="Enter description (optional)"/>
          </div>
          <div class="input-group">
            <label for="">Select Images</label>
            <input type="file" multiple>
          </div>
        </form>
      </Card>
      <Card title="Settings" class="col" subtitle="Set business settings">
        <form class="form">
          <div class="input-group row" style="padding: 10px 0px;">
            <label for="tz">Timezone:</label>
            <input type="text">
          </div>
        </form>
      </Card>
    </div>
    <Card title="Work Schedule" subtitle="Set establishment's work schedule">
      <work-schedule></work-schedule>
    </Card>
  </div>
</template>