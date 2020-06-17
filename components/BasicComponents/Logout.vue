<template>
  <span class="logout-button" @click.prevent="logout">
    Logout
  </span>
</template>

<script>
export default {
  name: 'Logout',
  methods: {
    async logout () {
      try {
        await this.$auth.logout()
        this.$router.push('/login')
      } catch (e) {
      }
    }
  }
}
</script>

<style scoped lang="scss">

  .logout-button {
    cursor: pointer;
  }
</style>
