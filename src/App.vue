<script>
import { store } from './store';
export default {
  data() {
    return { store };
  },


  created() {
    console.log(this.store.apiUri);

  },
};

</script>

<template></template>

<style lang="scss">
@use './styles/general.scss';
</style>
