<script>
import { store } from './store';

import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import FooterComp from './components/FooterComp.vue';
export default {
  data() {
    return { store };

  },

  components: { HeaderComp, MainComp, FooterComp },



};


</script>

<template>
  <HeaderComp></HeaderComp>
  <MainComp></MainComp>
  <FooterComp></FooterComp>
</template>

<style lang="scss">
@use './styles/general.scss';

body {
  width: 100%;
  height: 100vh;
  background-image: url(../src/assets/img/sfondoBoolFlix.webp);
  background-attachment: fixed;
  background-size: cover;
  scrollbar-width: none;

}
</style>
