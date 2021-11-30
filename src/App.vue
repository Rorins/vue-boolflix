<template>
  <div id="app">
   <!--Header-->
   <!--This is like getMovie(data) it has a parameter we don't see-->
  <Header @search="getMovies" />

  <!--Main-->
  <main>
    <!--Our movieList PROP was expecting an array in Movielist COMPONENT, this array is in fact
    our "movieList" (our array in API) this can help us add logic(card generation to Movielist)
    while fetching the data from the API here -->
    <Movielist :movieList = "movieList"/>
  </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Movielist from '@/components/Movielist.vue';
//axios will stay here so it's easier to communicate with Movielist(emit thing)
import axios from 'axios';

export default {
  name: 'App',
  components: {
  Header,
  Movielist,
  },
  data(){
    return {
        //result.data.results, our array will be here
        movieList: null,
        
    }
},

//This is the function that will keep hearing the son in case event from son happens
//the data is in fact the parameter(searchKey) from son(Header.vue), so this searchKey or data here
// will change query according to what the user writes
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
