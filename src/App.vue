<template>
  <div id="app">
    <navigator/>
    <div id="bg" class="bg">
      <router-view class="inner"/>
    </div>
    <router-view name="Index"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import url('https://fonts.googleapis.com/earlyaccess/notosanstc.css');
  .bg {
    background-color: black;
    background-image: url('../static/bg.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    height: 94.3vh;
    width: 100%;
    padding-top: 2%;
    padding-bottom: 2%;
  }
  #app {
    font-family: 'Noto Sans TC', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .inner {
    margin-left: 15%;
    margin-right: 15%;
    height: 100%;

    background-color: rgba(255, 255, 255, 0.75);
    border-style: solid;
    border-radius: 10px;
  }
  .inner.no-border {
    border-style: none;
    border-radius: 0px;
  }
  .inner.no-bg-color {
    background-color: rgba(255, 255, 255, 0);
  }
</style>
