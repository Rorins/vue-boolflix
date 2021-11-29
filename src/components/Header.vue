<template>
  <header>
    <!--Search bar-->
      <div class="filter-bar input-group mb-3">
      <div class="input-group-prepend">
      <button @click ="$emit('search',searchKey)" class="btn btn-outline-secondary" type="button">Button</button>
      </div>
      <input v-model="searchKey" type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
      </div>
  </header>
</template>

<script>
export default {
name: 'Header',
data(){
  return{
    searchKey: "",
  }
}
}
</script>

<style scoped lang="scss">
.filter-bar{
  width: 300px;
}
</style>