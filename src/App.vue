<template>
  <div id="app">
   <!--Header-->
  <Header @search="getMovies" />

  <!--Main-->
  <main>
    <Movielist :movieList = "movieList"/>
  </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Movielist from '@/components/Movielist.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
  Header,
  Movielist,
  },
  data(){
    return {
        movieList: null,
        
    }
},
//getting getMovies function from my methods and injecting it right away with created

//Sending request to api with query of title
methods:{
    getMovies(data){

    axios.get('https://api.themoviedb.org/3/search/movie',{
        params:{
            api_key: '5ac3e59b84003d2645abcdbaac824d36',
            query: data

        }
    })
    .then(result=>{
        console.log(result.data.results);
        //assigning data of API to movielist, we can refer to the array as movieList now
        this.movieList = result.data.results
    })
    .catch(error => console.log(error));
    }
}

}

</script>

<style lang="scss">
@import '@/styles/globals';
</style>
