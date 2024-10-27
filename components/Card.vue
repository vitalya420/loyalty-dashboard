<template>
  <div class="card">
    <div class="card-header">
      <h2>{{ title }}</h2>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true
    },
  }
}
</script>

