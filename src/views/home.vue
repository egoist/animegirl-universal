<template>
  <div v-repeat="anime in animes" class="day">
    <Animes animes="{{anime.animes}}"></Animes>
  </div>
  {{json}}
</template>

<script>
var fetch = require('bgm-fetch')

export default {
  data () {
    return {
      animes: [],
      date: '1510'
    }
  },
  methods: {
    fetchAnimes (date) {
      fetch 
        .get(date, true)
        .then(data => {
          this.animes = data
        })
    }
  },
  ready () {
    this.fetchAnimes('1510')
  },
  components: {
    Animes: require('../components/animes')
  }
}
</script>