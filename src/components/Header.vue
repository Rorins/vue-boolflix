<template>
  <header>
    <!--Search bar-->
      <div class="filter-bar input-group mb-3">
      <div class="input-group-prepend">
      <button class="btn btn-outline-secondary" type="button">Button</button>
      </div>
      <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
      </div>
  </header>
</template>

<script>
export default {
name: 'Header',
}
</script>

<style scoped lang="scss">
.filter-bar{
  width: 300px;
}
</style>