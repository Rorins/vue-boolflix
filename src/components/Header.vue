<template>
  <header>
     <!--NAVBAR-->
 <nav class="navbar fixed-top navbar-expand-lg navbar-dark ">
  <a class="logo" href="https://fontmeme.com/netflix-font/"><img src="https://fontmeme.com/permalink/211227/f3b41fffcd0a95fb3b5a03cb0bb79b60.png" alt="netflix-font" border="0"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse d-flex justify-content-lg-between" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Watch again</a>
      </li>
    <li class="nav-item">
        <a class="nav-link" href="#">TV Series</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">New and popular</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">My list</a>
      </li>
    </ul>
    <!--Search bar-->
    <div class="d-flex tool-box">
      <div class="filter-bar input-group mb-3">
      <div class="input-group-prepend">
        <!--This is an event that starts everything, it communicates with father(App.vue)
        when this button is clicked the father will listen and start another function getMovie(data)
        where data is in fact searchKey-->
      <button @click ="$emit('search',searchKey)" class="btn btn-outline-secondary" type="button">Search</button>
      </div>
      <input @keyup.enter="$emit('search',searchKey)" v-model.trim="searchKey" type="text" class="form-control" placeholder="Search" aria-label="" aria-describedby="basic-addon1">
      </div>
      <i class="far fa-bell"></i>
      <img class="user" src="../assets/user.png" alt="">
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
@import '@/styles/variables';

.navbar {
background-color: black;
padding-right:20px;
color:$primary-col;
}
  .logo img{
    width:150px;
    }
  button{
  color:$primary-col;
  }
  .tool-box *{
    margin-left:20px;
  }  
  .filter-bar{
  width: 300px;
  }
  .fa-bell{
    font-size: 30px;
  }
  .user{
    width:40px;
    height:40px;
    border-radius:10px;
  }
  

</style>