<template>
  <div>
    <div class="container">
      <h3>Update Bussines Information</h3>
      <hr>
      <div class="business-form-wrapper">
        <div class="input-group">
          Update Logo:
          <div class="logo">
            <div class="logo-backdrop">
              <button class="update-logo-button">Click to update</button>
            </div>
          </div>
        </div>
        <div class="input-group">
          <label for="name">Business name:</label>
          <input type="text" placeholder="Coffee shop" class="text-input" id="name">
        </div>
        <div class="input-group">
          <label for="desc">Description: </label>
          <textarea placeholder="Write about your business" rows="5" class="text-input" id="desc"></textarea>
        </div>
        <div>
          <button class="btn btn-green">Save</button>
        </div>
      </div>
    </div>
    <div class="container" style="margin-top: 15px;">
      <h3>Devices Logged in</h3>
      <hr>
      <LoggedInTable></LoggedInTable>
    </div>
  </div>
</template>

<style>


.business-form-wrapper{
  margin: 20px 0px;
  width: min(600px, 100%);
  gap: 10px;
  display: flex;
  flex-direction: column;
}
.input-group {
  display: flex;
  flex-direction: column;
}

.logo {
  width: 210px;
  aspect-ratio: 3;
  height: auto;
  background-image: url("https://placehold.co/300x100");
  background-size: cover;
  background-position: center;
  position: relative;
}

.logo-backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: background-color 0.5s ease;
  transition: opacity 0.5s ease;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-backdrop:hover {
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
}

.update-logo-button {
  cursor: pointer;
  border: none;
  background: transparent;
  color: white;
  font-weight: bold;
  width: 100%;
  height: 100%;
}

.text-input {
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: all 0.3s ease;
}

.theme-dark .text-input{
  background-color: var(--dark-background-color);

  color: var(--dark-text-color);
}

.text-input:focus {
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
}

.theme-dark .text-input:focus{
  border: 1px solid var(--dark-border-color);
}


</style>