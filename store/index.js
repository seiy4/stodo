const localStoragePlugin = store => {
  store.subscribe((mutation, { list }) => {
    window.localStorage.setItem('list', JSON.stringify(list))
  })
}

export const plugins = [ localStoragePlugin ]
