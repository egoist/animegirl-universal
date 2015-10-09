<style lang="stylus">
@import './shared.styl'
</style>

<template>
  <router-view class="view" v-transition="test" transition-mode="out-in"></router-view>
  <footer class="footer">
    app
  </footer>
</template>