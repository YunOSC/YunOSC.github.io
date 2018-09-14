<template>
  <div>
    <div v-for="(value, key) in cadre" :key="key" v-if="!key.includes('//')" class="yearMenu">
      <a :href="'#/cadre/' + key" v-on:click="clickTerm(key)" class="btn btn-primary">{{ value.term }}</a>
    </div>
    <div v-if="selectTerm != null" style="position: relative;">
      <!--div>{{ cadre[selectYear].name }}</div>
      <div>{{ cadre[selectYear].year }}</div-->
      <info-card v-for="member in cadre[selectTerm].member" :key="member.id" :info="member"/>
    </div>
  </div>
</template>

<script>
import cadre from '../../assets/data/cadre.json'
import InfoCard from '@/components/about/InfoCard'
export default {
  name: 'Cadre',
  components: { InfoCard },
  mounted () {
    this.selectTerm = this.$route.params.term
    this.selectMember = this.$route.params.member
  },
  methods: {
    clickTerm: function (value) {
      this.selectTerm = value
    }
  },
  data () {
    return {
      selectTerm: null,
      selectMember: null,
      cadre
    }
  }
}
</script>

<style scoped>
  .yearMenu {
    display: inline-block;
    margin: 10px;
  }
</style>
