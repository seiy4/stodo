export const state = () => ({
  list: []
})

export const getters = {
  list: state => state.list
}

export const mutations = {
  add (state, text) {
    state.list.push({
      text: text,
      id: state.list.length + 1
    })
  },
  remove (state, todo) {
    state.list.splice(state.list.indexOf(todo), 1)
  }
}

export const actions = {
  add ({ commit }, text) {
    commit('add', text)
  },
  remove ({ commit }, todo) {
    commit('remove', todo)
  }
}
