<template>
  <div>
    <div>
    </div>
  </div>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
export default {
  name: 'Cadre',
  data () {
    return {
      cadre: [
        {
          'name': '第二屆',
          'year': 2018,
          'member': [
            {
              'position': '社長',
              'name': '李政憲',
              'aka': 'None'
            },
            {
              'position': '副社長',
              'name': '蔡銘陽',
              'aka': 'None'
            },
            {
              'position': '教學長',
              'name': '墨格里',
              'aka': 'clooooode'
            },
            {
              'position': '教學',
              'name': '張郢展',
              'aka': 'stavhaygn'
            }
          ]
        },
        {
          'name': '第一屆',
          'year': 2017,
          'member': [
            {
              'position': '社長',
              'name': '劉孝忠',
              'aka': 'mino'
            },
            {
              'position': '副社長',
              'name': '黃彥璋',
              'aka': 'None'
            },
            {
              'position': '教學長',
              'name': '徐廷佑',
              'aka': '0夢'
            },
            {
              'position': '教學',
              'name': '墨格里',
              'aka': 'clooooode'
            },
          ]
        }
      ]
    }
  }
}
</script>
