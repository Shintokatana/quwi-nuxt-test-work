export const state = () => ({
  projects: []
})

export const getters = {
  getProjects (state) {
    return state.projects
  },
  getAuthStatus (state) {
    return state.auth.loggedIn
  }
}

export const mutations = {
  setProjects (state, projects) {
    state.projects = projects
  },
  updateProjectName (state, project) {
    const singleProjectIndex = state.projects.findIndex(item => item.id === project.id)
    state.projects[singleProjectIndex].name = project.name
  }
}

const fetchProjectsData = async (commit, target) => {
  const { projects } = await target.$axios.$get('projects-manage')
  commit('setProjects', projects)
  return projects
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    if (this.getters.getAuthStatus) {
      await fetchProjectsData(commit, this)
    }
  },
  async fetchProjects ({ commit }) {
    await fetchProjectsData(commit, this)
  },
  async updateProjectName ({ commit }, { id, name }) {
    await this.$axios.$post('projects-manage/update', {
      name
    },
    {
      params: {
        id
      }
    })
    commit('updateProjectName', { id, name })
  }
}
