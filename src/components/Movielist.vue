<template>
  <section>
      <!--MOVIE LIST-->
      <h1>Movies</h1>
      <div v-if="movieList !== null" class="d-flex flex-wrap container">

      <!--Loopin our prop movieList that expects an array(that array is in Header,
       it's our "movieList" (our array in API)-->

      <div class="netflix_card" v-for='(movie,index) in movieList' :key="`movie-${index}`">
          <!--Adding poster-->
          <img class="placeholder_image" v-if="movie.poster_path == null" src="https://www.auroraviaggi.com/media/1009/sm-placeholder-1024x512.png" alt="">
          <img v-else class="poster" :src="`https://image.tmdb.org/t/p/w154/${movie.poster_path}`" :alt="movie.original_title">
          
          <!--Show only with hover-->
          <div class="description">
          <h3>title:{{movie.title}}</h3>
          <h3>original title:{{movie.original_title}}</h3>
        <!--Using my flagAdd we should have a value true or false if true we have a flag-->
          <img class="flag" v-if="flagAdd(movie.original_language)" :src="require(`../assets/${movie.original_language}.png`)" :alt="movie.original_language"> 
          <!--If not we only have the string language-->
          <h3 v-else>language:{{movie.original_language}}</h3>
          <!--for element (number) of vote, from 1 to 5-->
          <i v-for='(number,index) in roundNumber(movie.vote_average)' :key="`movie-${index}`" class="fas fa-star"></i>
          </div>
          </div>

      </div>

      <Loader v-else />

  </section>
</template>

<script>
import Loader from '@/components/Loader.vue'
export default {
name:'Movielist',
components:{
    Loader,
},
//Import of movie list in App.vue with props( expects an array)
props:{
    movieList: Array
},
methods:{
    //Add flag function, 
    //it has a parameter(this parameter will be the string 'it' or 'eng' of our API array)
    flagAdd(language){
        const languages = ["it","en"];
        //it returns a value TRUE or FALSE , if the string in our API array includes elements
        //of my array languages, if yer it's TRUE, else it's FALSE
        return languages.includes(language) ? true : false;
    },
    //Round number
    roundNumber(number){
       return Math.ceil(number/2)
    }
}
}


</script>

<style scoped lang="scss">
h1{
    color:white;
}
h3{
    font-size:18px;
}
.netflix_card{
    min-height:200px;
    min-width:150px;
    position:relative;
    margin:20px;
        &:hover .description{
            display:block;
        }
}
.poster{
    height:100%;
    width: 100%;
    object-fit: cover;
}

.placeholder_image{
    height:100%;
    width:150px;
    object-fit: cover;
}

.description{
    background-color:black;
    position:absolute;
    top:0;
    width:160px;
    height:300px;
    display:none;
}
   .flag{
       width:60px;
   }

</style>

