<template>
  <div  id="logged-in-table">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" class="ip-addr">IP Address</th>
          <th scope="col" class="user-agent">User Agent</th>
          <th scope="col" class="actions" style="width: 0%;">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>127.0.0.1</td>
          <td>Google Chrome</td>
          <td><button class="btn btn-red">
            Logout
          </button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<style scoped>
#logged-in-table {
  width: 100%;
}

.table {
  border-collapse: collapse;
  width: 100%;
}

.table > th, td, tr {
  border: 1px solid var(--border-color);
  padding: 3px;
  text-align: start;
}

.theme-dark .table > th, td, tr {
  border: 1px solid var(--dark-border-color);
}

</style>