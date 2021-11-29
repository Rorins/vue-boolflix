<template>
  <section>
      <div v-for='(movie,index) in movieList' :key="`movie-${index}`">
          <h3>title:{{movie.title}}</h3>
          <h3>original title:{{movie.original_title}}</h3>
          <img v-if="flagAdd(movie.original_language)" :src="require(`../assets/${movie.original_language}.png`)" alt="">
          <h3 v-else>language:{{movie.original_language}}</h3>
          <h3 >vote:{{movie.vote_average}}</h3>
          
      </div>
  </section>
</template>

<script>


export default {
name:'Movielist',
props:{
    movieList: Array
},
data(){
return{
    //Flags array
        // flags:[
        //   {
        //     lang:'it',
        //     src:'it.png'
        //   },
        //   {
        //     lang:'en',
        //     src:'en.png'
        //   },
        // ]
}
},
methods:{
    //Add flag
    flagAdd(language){
        const languages = ["it","en"];

        return languages.includes(language) ? true : false;
    
   
    },
}
}

//Inject movie list here

</script>

<style scoped lang="scss">
div{
    margin-bottom: 40px;
}
</style>