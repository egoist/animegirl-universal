<template>
  <div class="animes">
    <div class="anime-section" v-repeat="anime in orderedAnimes" v-show="isShowDay">
      <Anime anime="{{anime}}"></Anime>
    </div>
  </div>
</template>

<script>
const moment = require('moment')
const time = require('../helpers/time')
export default {
  props: ['animes', 'weekday', 'show-day'],
  data () {
    return {}
  },
  components: {
    Anime: require('./anime')
  },
  computed: {
    isShowDay () {
      return this.showDay == this.weekday
    },
    orderedAnimes () {
      return this.animes.sort((a, b) => {
        const timeA = time(a)
        const timeB = time(b)
        return timeA - timeB
      })
    }
  },
  filters: {
    weekday: require('../filters/weekday')
  }
}
</script>
