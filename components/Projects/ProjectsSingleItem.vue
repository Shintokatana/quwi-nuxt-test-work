<template>
  <n-link :to="{ path: `/project/${single.id}` }">
    <div class="single-project">
      <div class="single-project-info-wrapper">
        <img v-if="single.logo_url" class="single-project-image" :src="single.logo_url" alt="">
        <img v-else class="single-project-image" src="~/assets/vue-logo.png" alt="">
        <span class="single-project-name">{{ single.name }}</span>
      </div>
      <div class="single-project-status-wrapper">
        <span class="single-project-status" :class="single['is_active'] ? 'active' : 'inactive'">
          {{ single['is_active'] ? 'Active' : 'Inactive' }}
        </span>
      </div>
      <div class="single-project-times-wrapper">
        <ProjectsSingleItemTimer v-for="(singleTimer, index) in timers" :key="index" :timer="singleTimer" />
      </div>
    </div>
  </n-link>
</template>

<script>
import ProjectsSingleItemTimer from './ProjectsSingleItemTimer'

export default {
  name: 'ProjectsSingleItem',
  components: {
    ProjectsSingleItemTimer
  },
  props: {
    single: {
      type: Object,
      required: true
    }
  },
  computed: {
    timers () {
      return [
        {
          label: 'time this week',
          value: this.single.spent_time_week
        },
        {
          label: 'time this week',
          value: this.single.spent_time_month
        },
        {
          label: 'total',
          value: this.single.spent_time_all
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

  .single-project {
    min-height: 150px;
    margin-bottom: 20px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 5px;

    @media (max-width: 767px) {
      padding: 10px;
      flex-direction: column;
    }

    > * {
      flex: 0 1 33%;

      @media (max-width: 767px) {
        flex: 0 1 100%;
        margin-bottom: 20px;
      }
    }

    &-status-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 767px) {
        justify-content: flex-start;
      }

      .single-project-status {
        &.active {
          color: #41B883
        }

        &.inactive {
          color: #34495E
        }
      }
    }

    &-times-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &-info-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;

      .single-project-image {
        width: 60px;
        margin: 0 10px;
      }
    }
  }

</style>
