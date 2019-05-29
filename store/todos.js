export const state = () => ({
  list: []
})

export const getters = {
  list: state => state.list
}

export const mutations = {
  add (state, text) {
    const last = state.list.slice(-1)[0] || { id: 0 }

    state.list.push({
      text: text,
      id: last.id + 1
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
