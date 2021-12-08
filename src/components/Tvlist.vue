<template>
  <section>
      <!--TV LIST-->
      <h1 class="text-center">Tv series</h1>
      <div v-if="tvList !== null" class="d-flex flex-wrap container">
      <!--Loopin our prop tvList that expects an array(that array is in Header,
       it's our "tvList" (our array in API)-->

      <div  v-for='(series,index) in tvList' :key="`tv-${index}`">
          <Card 
            :poster='series.poster_path'
            :placeholder='"https://www.auroraviaggi.com/media/1009/sm-placeholder-1024x512.png"'
            :title='series.name'
            :originalTitle='series.original_name' 
            :language='series.original_language'
            :vote='series.vote_average'/>
         
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
name: 'Tvlist',
components:{
    Loader,
    Card,
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


   

</style>