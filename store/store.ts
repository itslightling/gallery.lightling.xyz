export const state = () => ({
  darkMode: false,
})

export const getter = {
  getDarkMode (state: any) {
    return state.darkMode
  },
}

export const mutations = {
  toggleDarkMode (state: any) {
    state.darkMode = !state.darkMode

    if (state.darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  },
}
