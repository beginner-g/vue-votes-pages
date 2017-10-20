<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from './components/Home'
export default {
  name: 'app',
  components:{Home}
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #00bcd4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#app{
  width: 100%;
}
</style>
