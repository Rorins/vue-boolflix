<template>
  <header>
     <!--NAVBAR-->
 <nav class="navbar fixed-top navbar-expand-lg navbar-dark ">
  <a href=""><img class="logo" src="../assets/netflix-logo.png" alt=""></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse d-flex justify-content-lg-between" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Guarda di nuovo</a>
      </li>
    <li class="nav-item">
        <a class="nav-link" href="#">Serie TV</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Vuovi e popolari</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">La mia lista</a>
      </li>
    </ul>
    <!--Search bar-->
      <div class="filter-bar input-group mb-3">
      <div class="input-group-prepend">
        <!--This is an event that starts everything, it communicates with father(App.vue)
        when this button is clicked the father will listen and start another function getMovie(data)
        where data is in fact searchKey-->
      <button @click ="$emit('search',searchKey)" class="btn btn-outline-secondary" type="button">Search</button>
      </div>
      <input v-model.trim="searchKey" type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
      </div>
  
  </div>
</nav>
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

.navbar {
background-color: black;
}
  .logo{
    width:150px;
    }
  button{
  color:white;
  }
    
  .filter-bar{
  width: 300px;
  padding-right:40px;
  }

</style>