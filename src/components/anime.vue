<template>

  <div class="anime">
    <div class="anime-header">
      <h2>{{anime.titleCN}}</h2>
    </div>
    <div class="anime-time">
      {{ anime.timeCN ? anime.timeCN : '' }}{{ anime.timeJP && !anime.timeCN ? '日本时间: ' + anime.timeJP : '' }}
    </div>
  </div>
</template>

<script>

  export default {
    props: ['anime'],
    ready () {
      this.anime = this.parseAnime(this.anime)
      console.log(JSON.stringify(this.anime))
    },
    methods: {
      parseAnime (anime) {
        
      }
    }
  }
</script>
