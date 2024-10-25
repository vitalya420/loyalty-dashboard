<template>
  <div class="table-wrapper">
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
          <td><button class="btn btn-danger">
            <i class="bi bi-trash"></i> 
            <span class="btn-hideable">Revoke</span>
          </button></td>
        </tr>
        <tr>
          <td>127.0.0.1</td>
          <td>Google Chrome</td>
          <td><button class="btn btn-danger">
            <i class="bi bi-trash"></i> 
            <span class="btn-hideable">Revoke</span>
          </button></td>
        </tr>
        <tr>
          <td>127.0.0.1</td>
          <td>Google Chrome</td>
          <td><button class="btn btn-danger">
            <i class="bi bi-trash"></i> 
            <span class="btn-hideable">Revoke</span>
          </button></td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button class="btn btn-page active">1</button>
      <button class="btn btn-page">2</button>
      <button class="btn btn-page">3</button>
    </div>
  </div>
</template>


<style scoped>
.table-wrapper {
  width: 100%;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}
</style>