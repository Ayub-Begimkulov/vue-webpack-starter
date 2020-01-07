<template>
  <div>
    <router-link to="/about">About</router-link>
    <p>This is an svg icon and should be loaded as utf-8 encoded.</p>
    <img src="../assets/img/arrow.svg" />
    <p>This is a png img and it's less 10kb so it should be loaded as base64.</p>
    <img src="../assets/img/tree.png" />
    <p>This is an 8k jpg image and should be loaded as a file.</p>
    <img src="../assets/img/greenbridge.jpg" />
  </div>
</template>

<style lang="scss" scoped>
div {
  margin-left: 10px;

  img {
    display: block;
    width: 100px;
  }
}
</style>
