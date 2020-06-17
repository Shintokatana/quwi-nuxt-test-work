<template>
  <div class="logo-wrapper">
    <nuxt-link to="/">
      <img src="~/assets/logo.png" alt="" class="logo-image">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style scoped lang="scss">

  .logo-wrapper {
    display: block;
    .logo-image {
      width: auto;
    }
  }

</style>
