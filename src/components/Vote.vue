<template>
  <div class="vote">
    <div class="add">
      <!-- <input v-model="topic" class='input-vote'>
      <button @click='handleTopic' class="add-vote">新建投票主题</button>
      <h1>{{add}}</h1> -->
      <div class="vote-img">
        <input class='add-input' v-model='title'>
        <button @click='handleAdd' class="add-img">添加美食</button>
      </div>
      <options></options>
    </div>
  </div>
</template>
<script>
  import Options from './Options'
  export default {
    name:'vote',
    components:{Options},
    data:()=>({
      topic:'',
      title:''
    }),
    computed:{
      add:function(){
        return this.$store.state.vote.topic
      }
    },
    methods:{
      // handleTopic:function(){
      //   if(this.topic!==''){
      //     this.$store.commit({type:'addTitle',topic:this.topic})
      //     this.topic=''
      //   }
      // },
      handleAdd:function(){
        if(this.title!==''){
          // this.$store.dispatch({type:'addImg',title:this.title})
          this.$store.commit({type:'addTitle',title:this.title})
          this.title=''
        }
      }
    }
  }
</script>
<style scoped>
  .vote{
    background-color: #ccc;
    width: 100%;
  }
  .input-vote{
    line-height: 25px;
    border: 1px solid red;
  }
  .add-vote{
    background-color: lightgreen;
    line-height: 30px;
    width: 100px;
  }
  .vote-img{
    margin-top: 20px;
  }
  .add-input{
    width: 180px;
    line-height: 25px;
    border: 0;
    border-bottom: 3px solid red;
    background-color: #ccc;
    font-size: 20px;
    text-indent: 40px;
  }
  .add-input:focus{
    outline: 0;
  }
  .add-img{
    width: 80px;
    line-height: 40px;
    text-align: center;
    background-color: #fff;
    margin-top: 10px;
    font-weight: 500;
    font-size: 16px;
    border-radius: 12px;
    box-shadow: 0 2px 10px yellow;
  }
</style>
