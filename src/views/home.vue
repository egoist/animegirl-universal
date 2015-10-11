<template>
  <div v-repeat="anime in animes" class="day">
    <Animes animes="{{anime.animes}}" weekday="{{anime.weekday}}" show-day="{{showDay}}"></Animes>
  </div>
  <footer class="footer">
    <div class="anime-showday clickable">{{showDay | weekday}}</div>
    <div class="anime-weekdays">
      <div class="anime-weekday clickable" v-on="click: switchDay(weekday)" v-class="current: weekday.current" v-repeat="weekday in weekdays">{{ weekday.day }}</div>
    </div>
  </footer>
</template>

<script>
const fetch = require('bgm-fetch')
const moment = require('moment')
export default {
  data () {
    return {
      animes: [],
      date: '1510',
      showDay: moment().day()
    }
  },
  computed: {
    weekdays () {
      const days = ['日', '一', '二', '三', '四', '五', '六']
      return days.map((d, i) => {
        return {
          day: d,
          current: i == this.showDay,
          index: i
        }
      })

    }
  },
  methods: {
    fetchAnimes (date) {
      fetch
        .get(date, true)
        .then(data => {
          this.animes = data
        })
    },
    switchDay (weekday) {
      this.showDay = weekday.index
      window.scrollTo(0, 0)
    }
  },
  ready () {
    this.fetchAnimes('1510')
  },
  components: {
    Animes: require('../components/animes')
  },
  filters: {
    weekday: require('../filters/weekday')
  }
}
</script>
