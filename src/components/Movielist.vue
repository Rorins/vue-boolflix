<template>
  <section>
      <!--Loopin our prop movieList that expects an array(that array is in Header,
       it's our "movieList" (our array in API)-->
      <div v-for='(movie,index) in movieList' :key="`movie-${index}`">
          <!--Adding poster-->
          <img class="poster" :src="`https://image.tmdb.org/t/p/w154/${movie.poster_path}`" :alt="movie.original_title">
          <h3>title:{{movie.title}}</h3>
          <h3>original title:{{movie.original_title}}</h3>
        <!--Using my flagAdd we should have a value true or false if true we have a flag-->
          <img class="flag" v-if="flagAdd(movie.original_language)" :src="require(`../assets/${movie.original_language}.png`)" :alt="movie.original_language">
          <!--If not we only have the string language-->
          <h3 v-else>language:{{movie.original_language}}</h3>
          <h3 >vote:{{roundNumber(movie.vote_average)}}</h3>
          
      </div>
  </section>
</template>

<script>


export default {
name:'Movielist',
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
div{
    margin-bottom: 40px;
}
   .flag{
       width:60px;
   }
</style>

