import Vuex from '@wepy/x';

export default new Vuex.Store({
  state: {
    counter: 0,
    item:{}
  },
  mutations: {
    increment (state) {
      state.counter++;
    },
    decrement (state) {
      state.counter--;
    },
    setItem(state,item){
      console.log("mutation...",item)
      state.item = item
    }
  },
  actions: {
    increment ({ commit }) {
      commit('increment');
    },
    decrement ({ commit }) {
      commit('decrement');
    },
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
    setItem({ commit },item){
      console.log("setItem..........",item)

      commit('setItem',item);
      
    }
  }
});
