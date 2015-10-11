<template>

  <div class="anime">
    <div class="anime-header">
      <h2>{{anime.titleCN}}</h2>
    </div>
    <div class="anime-time">
      {{ anime | time }}
    </div>
  </div>
</template>

<script>

  export default {
    props: ['anime'],
    ready () {

    },
    methods: {
    },
    filters: {
      time: require('../filters/time')
    }
  }
</script>
