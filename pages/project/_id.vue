<template>
  <div class="single-project-container">
    <ProjectsSingleItemEditor :single-project="singleProject" />
  </div>
</template>

<script>
import ProjectsSingleItemEditor from '~/components/Projects/ProjectsSingleItemEditor'

export default {
  name: 'Id',
  components: {
    ProjectsSingleItemEditor
  },
  asyncData ({ store, params, redirect }) {
    const currentProjects = store.getters.getProjects
    const currentItem = currentProjects.find(item => item.id === parseInt(params.id))
    if (currentItem) {
      return { singleProject: currentItem }
    } else {
      redirect('/')
    }
  },
  data () {
    return {
      singleProject: {}
    }
  },
  created () {
    if (!this.singleProject) {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
