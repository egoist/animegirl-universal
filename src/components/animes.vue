<template>
  <div class="animes">
    <div class="anime-section" v-repeat="anime in animes">
      <Anime anime="{{anime}}"></Anime>
    </div>
  </div>
</template>

<script>
export default {
  props: ['animes'],
  data () {
    return {}
  },
  components: {
    Anime: require('./anime')
  }
}
</script>