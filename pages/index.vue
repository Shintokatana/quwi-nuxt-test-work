<template>
  <Projects />
</template>

<script>
import Projects from '~/components/Projects/Projects'

export default {
  components: {
    Projects
  },
  asyncData ({ store }) {
    store.dispatch('fetchProjects')
  }
}
</script>

<style>

</style>
