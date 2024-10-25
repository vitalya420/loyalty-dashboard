<template>
  <div class="container">
    <h3>Business Establishments</h3>
    <span>View, create, edit, delete business establishments</span>
    <hr>
    <div class="grid-view">
      <EstablishmentCreate></EstablishmentCreate>
      <EstablishmentCard v-for="i in 10" :key="i"></EstablishmentCard>
    </div>
  </div>
</template>

<style scoped>
.grid-view {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
}

.card {
  height: 150px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
