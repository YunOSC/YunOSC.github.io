<template>
  <div class="box">
    <div v-if="!clicked" class="smallBoxContent">
      <img :src="info.avatar"/>
      <div>{{ info.name }}<div v-if="info.aka != 'None'">({{ info.aka }})</div></div>
    </div>
    <div v-else>
      <div>{{ info.position }}</div>
      <div>{{ info.name }}</div>
      <div v-if="info.aka !== 'None'">{{ info.aka }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info-card',
  props: [ 'info', 'clicked' ]
}
</script>

<style scoped>
  .box {
    display: inline-block;
    width: 150px;
    height: 150px;
    margin: 5px;
    overflow: auto;
    border-style: solid;
    border-radius: 10px 30px 10px 30px;
  }
  .smallBoxContent {
    position: relative;
    top: 15px;
  }
</style>
