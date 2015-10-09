<template>
  
  <div class="anime">
    {{anime.titleCN}}
    <div class="anime-time">
      {{ anime.timeCN ? anime.timeCN : '' }}{{ anime.timeJP && !anime.timeCN ? '日本时间: ' + anime.timeJP : '' }}
    </div>
  </div>
</template>

<script>
  
  export default {
    props: ['anime'],
    ready () {
      console.log(JSON.stringify(this.anime))
    }
  }
</script>