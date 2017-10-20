<template>
  <div class="result">
    <div class="title">投票结果</div>
    <div class="vote-data">
      <ul>
        <li>排名</li>
        <li>票数</li>
        <li>占比</li>
      </ul>
        <div class="sort" v-for='option in options'>
          <chart :option='option'></chart>
        </div>
    </div>
  </div>
</template>
<script>
import Chart from './Chart'
  export default{
    name:'result',
    components:{Chart},
    computed:{
      options:function(){
        const optionss =this.$store.state.vote.all
        const votes =this.$store.state.vote.votes
        const result= optionss.map(t=>{
          const voteCount =votes.filter(i=>i.optionId==t.id).length
            return {
              title:t.title,
              optionId:t.id,
              voteCount
            }
          }
        )
        return result.sort(function(a,b){
          return b.voteCount-a.voteCount
        })
      }
    }
  }
</script>
<style scoped>
  .result{
    background-color: #fff;
    padding: 10px;
  }
  .title{
    color: #aaa;
    font-size: 26px;
  }
  .vote-data ul{
    display: flex;
    justify-content: space-around;
    list-style: none;
    color: #aaa;
  }
</style>
