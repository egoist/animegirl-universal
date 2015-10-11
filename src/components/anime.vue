<template>

  <div class="anime">
    <div class="anime-header">
      <h2 v-class="green: updated, red: !updated">{{anime.titleCN}}</h2>
    </div>
    <div class="anime-time">
      <span >{{ anime | time }}</span>
    </div>
  </div>
</template>

<script>
const moment = require('moment')
  export default {
    props: ['anime'],
    computed: {
      updated () {
        const cn = parseInt(this.anime.timeCN)
        const jp = parseInt(this.anime.timeJP)
        if (!cn && !jp)
          return false
        const time = require('../helpers/time')(this.anime)
        const now = moment().hour() * 100 + moment().minute()
        if (time <= now)
          return true
        else 
          return false
      }
    },
    methods: {
    },
    filters: {
      time: require('../filters/time')
    }
  }
</script>
