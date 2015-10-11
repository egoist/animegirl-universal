<style lang="stylus">
@import './shared.styl'
</style>

<template>
  <router-view class="view" v-transition="test" transition-mode="out-in" show-day="{{showDay}}"></router-view>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>