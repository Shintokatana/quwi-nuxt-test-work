<template>
  <div class="single-time-wrapper">
    <span class="single-time-label">{{ timer.label }}</span>
    <!--  unknown type of time in projects  -->
    <span class="single-time-value">{{ timer.value }}</span>
  </div>
</template>

<script>
export default {
  name: 'ProjectsSingleItemTimer',
  props: {
    timer: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

  .single-time-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;

    > * {
      flex: 0 1 50%
    }
  }
</style>
