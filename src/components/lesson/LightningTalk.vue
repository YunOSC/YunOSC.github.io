<template>
  <div>
    <div v-for="(term, key) in lt" :key="key">
        <div>{{ term.datetime }}</div>
        <div v-for="article in term.article" :key="article" class="mdBlock">
          <div v-if="article.type == 'hackmd'">
            <div>{{ article.topic }} / {{ article.author }}</div>
            <iframe :src="article.url"/>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import lt from '../../assets/data/lt.json'
export default {
  name: 'LightningTalk',
  data () {
    return {
      lt
    }
  }
}
</script>

<style scoped>
  .termBlock {
    border-style: solid;
    border-radius: 10px;
    margin: 20px;
  }
  .mdBlock {
    display: inline-block;
    margin: 10px;
  }
</style>
