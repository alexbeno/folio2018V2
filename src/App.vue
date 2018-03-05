<template>
  <div id="app" class="app--first" data-project="bmw" data-number = "0">
    <headerNav></headerNav>
    <router-view></router-view>
  </div>
</template>

<script>

import headerNav from '@/components/partials/header/header';

export default {
  name: 'App',
  components: {
    headerNav,
  },
};
</script>

<style lang="scss">
  @import 'assets/sass/app';
  @import 'assets/sass/abstracts/config/_registerFont.scss';
  @import 'assets/sass/base/_reset';
  @import 'assets/sass/base/_Zbase';
</style>
