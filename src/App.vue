<template>
  <div>
    <h1>Hello {{ bundler }}</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      bundler: 'webpack'
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  h1 {
    color: red;
  }
}
</style>
