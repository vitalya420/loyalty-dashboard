<template>
  <div class="establishment-card">
    <div class="establishment-image">
      <div class="establishment-image-backdrop">
        <div class="actions">
          <button class="btn btn-green"> <i class="bi bi-card-image"></i> Update image</button>
          <button class="btn btn-red"> <i class="bi bi-trash"></i> Delete?</button>
        </div>
      </div>

    </div>
    <div class="establishment-details">
      <div class="name has-edit-button">
        <h4>Coffee Shop</h4>
        <button class="edit-button">
          <i class="bi bi-pencil"></i>
        </button>
      </div>
      <hr>
      <div class="location has-edit-button text-no-wrap">
        <i class="bi bi-geo-alt"></i>
        <span style="text-overflow: clip;width: 100%;">Planet Earth</span>
        <button class="edit-button">
          <i class="bi bi-pencil"></i>
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.establishment-card {
  border-radius: 6px;
  min-width: 240px;
  max-width: 300px;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.theme-dark .establishment-card {
  border: 1px solid var(--dark-border-color);
}

.establishment-card:hover, work-schedule:hover{
  box-shadow: 1px 1px 9px 2px rgba(0,0,0,0.1);
  -webkit-box-shadow: 1px 1px 9px 2px rgba(0,0,0,0.1);
  -moz-box-shadow: 1px 1px 9px 2px rgba(0,0,0,0.1);
}
.establishment-image{
  background: url("https://media.istockphoto.com/id/1400648198/photo/interior-of-empty-modern-cafe-or-restaurant-during-the-day-round-tables-and-yellow-chairs-in.jpg?s=612x612&w=0&k=20&c=aD0MqwI5u773upr7CU56SlhOURhqDDOltVLJOZAtPcU=");
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  transition: var(--ease-transition);
}

.establishment-image-backdrop{
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 100%;
  transition: background-color 0.3s ease;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  opacity: 0;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.actions{
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
}

.establishment-image-backdrop:hover{
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 1;
}
.establishment-details {
  padding: 5px 10px;

}


.has-edit-button {
  width: 100%;
  position: relative;
}

.edit-button{
  position: absolute;
  right: 0px;
  top: 4px;
  opacity: 0;
  cursor: pointer;
  transition: var(--ease-transition);
  border: 0;
  color: var(--text-color);
  background: transparent;
}

.theme-dark .edit-button {
  color: var(--dark-text-color);
}

.has-edit-button:hover .edit-button {
  opacity: 1;
}
</style>