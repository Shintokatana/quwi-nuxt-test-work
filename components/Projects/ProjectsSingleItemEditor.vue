<template>
  <div class="single-project-editor">
    <div class="single-project-editor-top-wrapper">
      <button class="btn" @click.prevent="backButton">
        Back
      </button>
    </div>
    <div class="single-project-editor-bottom-wrapper">
      <form @submit.prevent="submitNme">
        <label for="single-project-name">Name
          <input id="single-project-name" v-model="name" class="single-project-editor-input" type="text">
        </label>
        <input type="submit" value="OK" class="btn">
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProjectsSingleItemEditor',
  props: {
    singleProject: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      name: this.singleProject.name
    }
  },
  methods: {
    submitNme () {
      this.$store.dispatch('updateProjectName', { id: this.singleProject.id, name: this.name })
      this.$router.push('/')
    },
    backButton () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">

  .single-project-editor {
    padding: 15px;

    &-top-wrapper {
      padding: 10px;
      background-color: #9b9b9b;
      border-radius: 3px;
    }

    &-bottom-wrapper {
      padding: 35px 15px;
      background-color: #ffffff;
      border: 1px solid #dedede;
      border-radius: 3px;
      margin-top: 25px;

      .single-project-editor-input {
        margin-left: 30px;
        width: auto;
        padding: 9px;
        box-shadow: none;
        border: 1px solid #ccc;
        outline: none;
        border-radius: 2px;
      }
    }
  }

</style>
