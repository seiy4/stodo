export const state = () => ({
  list: []
})

export const getters = {
  list: state => state.list
}

export const mutations = {
  add (state, text) {
    let last = 0
    if (state.list.length > 0) {
      last = Math.max(...state.list.map((p) => p.id))
    }

    state.list.push({
      text: text,
      id: last + 1
    })
  },
  remove (state, todo) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  saveOrder (state, list) {
    state.list = list
  }
}

export const actions = {
  add ({ commit }, text) {
    commit('add', text)
  },
  remove ({ commit }, todo) {
    commit('remove', todo)
  },
  saveOrder ({ commit }, list) {
    commit('saveOrder', list)
  }
}
