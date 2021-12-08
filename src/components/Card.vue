<template>
<div class="netflix_card">
  <!--Adding poster-->
          <img class="placeholder_image" v-if="poster == null" :src="placeholder" alt="">
          <img v-else class="poster" :src="`https://image.tmdb.org/t/p/w154/${poster}`" :alt="originalTitle">
          <!--Show only with hover-->
          <div class="description">
          <h3>Title:{{title}}</h3>
          <h3>Original Title:{{originalTitle}}</h3>
        <!--Using my flagAdd we should have a value true or false if true we have a flag-->
          <img class="flag" v-if="flagAdd(language)" :src="require(`../assets/${language}.png`)" :alt="language"> 
          <!--If not we only have the string language-->
          <h3 v-else>Language:{{language}}</h3>
          <!--for element (number) of vote, from 1 to 5-->
          <h3>Vote:</h3>
          <i v-for='(number,index) in roundNumber(vote)' :key="`movie-${index}`" class="fas fa-star"></i>
          <i v-for="(number, index) in 5 - roundNumber(vote) " :key="index" class="far fa-star"></i> 
          </div>
</div>
</template>

<script>
export default {
name: 'Card',
props: {
poster: String,
placeholder: String,
title: String,
originalTitle: String,
language:String,
vote: String,
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

h3{
    font-size:18px;
}

.netflix_card{
    height:200px;
    width:150px;
    position:relative;
    margin:20px;
    &:hover{
    cursor:pointer;
    }
    &:hover .description{
        display:block;
    }
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
    height:200px;
    display:none;
}
   
</style>