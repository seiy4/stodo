export const state = () => ({
  list: []
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text: text,
      id: state.list.length + 1
    })
  },
  remove(state, { i }) {
    state.list.splice(state.list.i, 1)
  }
}
