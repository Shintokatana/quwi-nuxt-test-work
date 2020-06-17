<template>
  <header class="header">
    <Logo />
  </header>
</template>

<script>
import Logo from '~/components/BasicComponents/Logo'

export default {
  name: 'TheNavBar',
  components: {
    Logo
  }
}
</script>

<style scoped lang="scss">
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: #eee;
  }
</style>
