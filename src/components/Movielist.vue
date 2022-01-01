<template>
  <section>
      <!--MOVIE LIST-->
      <h1 class="text-center">Movies</h1>
      <div v-if="movieList !== null" class="d-flex flex-wrap container">

      <!--Loopin our prop movieList that expects an array(that array is in Header,
       it's our "movieList" (our array in API)-->
      
      <div v-for='(movie,index) in movieList' :key="`movie-${index}`">
          <Card 
            :poster='movie.poster_path'
            :placeholder='"https://www.auroraviaggi.com/media/1009/sm-placeholder-1024x512.png"'
            :title='movie.title'
            :originalTitle='movie.original_title' 
            :language='movie.original_language'
            :vote='movie.vote_average'
            :popularity='movie.popularity'
            />
      </div>

      </div>

      <Loader v-else />

  </section>
</template>

<script>
//IMPORTS
import Loader from '@/components/Loader.vue'
import Card from '@/components/Card.vue'
//EXPORTS
export default {
name:'Movielist',
components:{
    Loader,
    Card,
},
//Import of movie list in App.vue with props( expects an array)
props:{
    movieList: Array
},
}

</script>

<style scoped lang="scss">

h1{
    color:rgb(255, 255, 255);
}

</style>

