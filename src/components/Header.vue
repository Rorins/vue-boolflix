<template>
  <header>
    <!--Search bar-->
      <div class="filter-bar input-group mb-3">
      <div class="input-group-prepend">
        <!--This is an event that starts everything, it communicates with father(App.vue)
        when this button is clicked the father will listen and start another function getMovie(data)
        where data is in fact searchKey-->
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
  //It's empty for now but with v-model this will change with the user input
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