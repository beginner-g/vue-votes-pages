<template>
  <div class="chart">
    <h1>{{option.title}}</h1>
    <div class="pie-yum">
      <svg width="100" height="100" viewBox="0 0 32 32">
        <circle id="percent" r="16" cx="16" cy="16" fill="#fff" stroke="blue" stroke-width="12"/>
        <circle id="background" r="16" cx="16" cy="16" fill="#fff" fill-opacity="0.5" stroke="yellow" stroke-width="12" :stroke-dasharray='percentStr' />
      </svg>
    </div>
    <h1>{{ percent*100 + '%' }}</h1>
  </div>
</template>
<script>
  export default{
    name:'chart',
    props:['option'],
    computed:{
      totalVotes: function () {
        return this.$store.state.vote.votes.length
      },
      percent: function () {
        return (this.option.voteCount/this.totalVotes).toFixed(2)
      },
      percentStr: function () {
        return this.percent*100 + ' 100'
      }
    }
  }
</script>
<style scoped>
  .chart{
    display: flex;
    justify-content: space-between;
  }
  .chart h1{
    font-size: 20px;
    line-height: 20px;
    margin-top: 20px;
  }
  .pie-yum {
  margin: 20px 0;
  }

  svg {
  transform: rotate(-90deg);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  }

  .css-pie {
  border-radius: 50%;
  background: #5C63A9;
  background-image: linear-gradient(to right, transparent 50%, pink 0);
  width: 130px;
  height: 130px;
  }

  .css-pie:before {
  content: '';
  margin-left: 50%;
  display: block;
  border-radius: 0 100% 100% 0 / 50%;
  background-color: inherit;
  transform-origin: left;
  height: 100%;
  // to give active "percentage"
  transform: rotate(.2turn);
  }

  .css-pie-2 {
  border-radius: 50%;
  background: #221A46;
  background-image: linear-gradient(to right, transparent 50%, pink 0);
  width: 130px;
  height: 130px;
  }

  .css-pie-2:before {
  content: '';
  margin-left: 50%;
  display: block;
  border-radius: 0 100% 100% 0 / 50%;
  background-color: inherit;
  transform-origin: left;
  height: 100%;
  // to give active "percentage"
  transform: rotate(.45turn);
  }

  .value {
  padding: .6em;
  display: block;
  text-align: center;
  color: #333333;
  font-size: 1.5em;
  }
</style>
