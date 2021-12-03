<template>
  <section>
      <!--TV LIST-->
      <h1 class="text-center">Tv series</h1>
      <div v-if="tvList !== null" class="d-flex flex-wrap container">
      <!--Loopin our prop tvList that expects an array(that array is in Header,
       it's our "tvList" (our array in API)-->

      <div class="netflix_card" v-for='(series,index) in tvList' :key="`tv-${index}`">
          <!--Adding poster-->
          <img class="placeholder_image" v-if="series.poster_path == null" src="https://www.auroraviaggi.com/media/1009/sm-placeholder-1024x512.png" :alt="series.original_name">
          <img v-else class="poster" :src="`https://image.tmdb.org/t/p/w154/${series.poster_path}`" :alt="series.original_name">
          
          
         
         <!--Show only with hover-->
         <div class="description">
          <h3>Title:{{series.name}}</h3>
          <h3>Original Title:{{series.original_name}}</h3>
        <!--Using my flagAdd we should have a value true or false if true we have a flag-->
          <img class="flag" v-if="flagAdd(series.original_language)" :src="require(`../assets/${series.original_language}.png`)" :alt="series.original_language">
          <!--If not we only have the string language-->
          <h3 v-else>Language:{{series.original_language}}</h3>
          <!--for element (number) of vote, from 1 to 5-->
          <h3>Vote:</h3>
          <i v-for='(number,index) in roundNumber(series.vote_average)' :key="`movie-${index}`" class="fas fa-star"></i>
          </div>
          </div>

      </div>
      <Loader v-else />

  </section>
</template>

<script>
import Loader from '@/components/Loader.vue'
export default {
name: 'Tvlist',
components:{
    Loader,
},
//Import of tv list in App.vue with props( expects an array)
props:{
    tvList: Array
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
    color:rgb(189, 3, 3);
}
h3{
    font-size:18px;
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

   

</style>