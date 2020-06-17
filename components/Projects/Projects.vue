<template>
  <div class="projects-container">
    <div v-if="projects" class="projects-wrapper">
      <ProjectsSingleItem v-for="item in projects" :key="item.id" :single="item" />
    </div>
  </div>
</template>

<script>
import ProjectsSingleItem from '~/components/Projects/ProjectsSingleItem'

export default {
  name: 'Projects',
  components: {
    ProjectsSingleItem
  },
  computed: {
    projects () {
      return this.$store.getters.getProjects
    }
  }
}
</script>

<style scoped>

</style>
