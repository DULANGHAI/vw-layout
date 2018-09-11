const app = {
  state: {
    deviece: 'desktop'
  },
  mutations: {
    TOGGLE_DEVICE(state, device) {
      state.device = device
    }
  },
  actions: {
    ToogleDivice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    }
  }
}

export default app