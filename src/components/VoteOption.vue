<template>
  <div class="vote-action">
    <h1>{{option.title}}</h1>
    <div class="action" v-for='vote in votes'>
      {{vote.name}}
    </div>
    <div v-if='complated'>
      <button class='vote-btn complated' @click='handleDelete'>已投</button>
    </div>
    <div v-else>
      <button @click='handleName' class='vote-btn'>投票</button>
    </div>
  </div>
</template>
<script>
import shortid from 'shortid'
export default {
  name:'vote-action',
  props:['option','allVote'],
  computed:{
    votes:function(){
      const allVote =this.$store.state.vote.votes
      return allVote.filter(t=>t.optionId==this.option.id)
    },
    complated:function(){
      return this.votes.filter(t=>t.name===this.username).length
    },
    username:function(){
      return this.$store.state.auth.username
    }
  },
  methods:{
    handleName:function(){
      var shortid = require('shortid');
      console.log(shortid.generate())
      if(this.complated|| !this.username) return
      let vote ={
        name:this.username,
        optionId:this.option.id,
        id:shortid.generate()
      }

      this.$store.commit({type:'voteup',vote})
    },
    handleDelete:function(){
      const vote =this.votes.find(t=>t.name===this.username)
      this.$store.commit({type:'delete',id: vote.id})
    }
  }
}
</script>
<style scoped>
h1{
  color: #fff;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  border: 1px solid yellow;
}
.vote-btn{
  display: block;
  text-align: center;
  background-color: deeppink;
  margin: 20px auto;
  width: 80px;
  line-height: 40px;
}
.complated{
  background-color: lightgreen;
}
.delate{
  background-color: #64FFDA;
  width: 60px;
  line-height: 25px;
  color: #000;
}
</style>
