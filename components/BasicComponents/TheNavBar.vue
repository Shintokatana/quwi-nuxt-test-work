<template>
  <header class="header nav">
    <div class="left-container">
      <Logo />
    </div>
    <div v-if="authState" class="right-container">
      <Projects />
      <Logout />
    </div>
  </header>
</template>

<script>
import Logo from '~/components/BasicComponents/Logo'
import Logout from '~/components/BasicComponents/Logout'
import Projects from '~/components/BasicComponents/Projects'

export default {
  name: 'TheNavBar',
  components: {
    Logo,
    Logout,
    Projects
  },
  computed: {
    authState () {
      return this.$store.state.auth.loggedIn
    }
  }
}
</script>

<style scoped lang="scss">

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 25px;
    background: #fafafa;
    box-shadow: 0 0 5px rgba(0,0,0,.25);

    .right-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      > * {
        margin-right: 5px;
      }
    }
  }

</style>
