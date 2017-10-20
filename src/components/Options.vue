<template>
  <div class="options">
    <div v-for='option in options' class="vote-title">
      <vote-option :option='option'></vote-option>
    </div>
    <result></result>
  </div>
</template>
<script>
  import VoteOption from './VoteOption'
  import Result from './Result'
  export default{
    name:'options',
    components:{VoteOption,Result},
    computed:{
      options:function(){
        return this.$store.state.vote.all
      }
    }
    // created:function(){
    //   this.$store.dispatch({type:'loadOptions'})
    //   this.$store.dispatch({type:'loadVotes'})
    // }
  }
</script>
<style scoped>
  .vote-title{
    background-color: lightblue;
    margin: 10px;
  }
</style>
