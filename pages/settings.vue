<template>
  <div>
    <div class="container-row">
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
            <button class="btn btn-success"> <i class="bi bi-floppy"></i> Save</button>
          </div>
        </div>
      </div>
      <div class="container">
        <h3>Configuration</h3>
        <hr>
        <div class="configuration-wrapper">
          <div class="input-group row space-between">
            <label for="program-enabled">Bonus program enabled:</label>
            <input type="checkbox" class="switch" id="program-enabled">
          </div>
          <div class="input-group row space-between">
            <label for="stamps-enabled">Stamps system:</label>
            <input type="checkbox" class="switch" id="stamps-enabled">
          </div>
          <div class="input-group row space-between">
            <label for="coupons-enabled">Coupons:</label>
            <input type="checkbox" class="switch" id="coupons-enabled">
          </div>
          <div class="input-group row space-between">
            <label for="ref-reward-enabled">Referal system reward:</label>
            <input type="checkbox" class="switch" id="ref-reward-enabled">
          </div>
          <div class="input-group row space-between">
            <label for="menu-enabled">Menu website:</label>
            <input type="checkbox" class="switch" id="menu-enabled">
          </div>
          
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
@import url('../assets/styles/checkbox.scss');

.business-form-wrapper{
  margin: 20px 0px;
  gap: 10px;
  display: flex;
  flex-direction: column;
}
.input-group {
  display: flex;
  flex-direction: column;
}

.configuration-wrapper{
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.row {
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.space-between {
  justify-content: space-between;
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

.container-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.container-row > .container {
  flex: 1;
  flex-grow: 1;
  box-sizing: border-box;
}

@media (max-width: 768px) {
    .container-row > .container {
        flex: 0 0 100%;
    }
}

</style>