<template>
  <div>
    <timeline timeline-theme="lightblue">
      <timeline-title>2018</timeline-title>
      <timeline-item>
        <div>107級 新生招募</div>
        <div></div>
      </timeline-item>
      <timeline-title>2017</timeline-title>
    </timeline>
  </div>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
export default {
  name: 'history',
  components: { Timeline, TimelineItem, TimelineTitle }
}
</script>
