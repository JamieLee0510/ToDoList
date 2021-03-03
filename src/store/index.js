import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoJobs: [],
    doneJobs: [],
  },
  mutations: {
    //操作 todoJobs
    pushTodoJobs(state, payload) {
      state.todoJobs.push(payload);
    },
    finishJob(state, payload) {
      const doneJob = state.todoJobs[payload];
      state.doneJobs.push(doneJob);
      setTimeout(() => {
        state.todoJobs.splice(payload, 1);
      }, 0);
    },

    //操作doneItems
    recoverJob(state, payload) {
      const recoverJob = state.doneJobs[payload];
      state.todoJobs.push(recoverJob);
      setTimeout(() => {
        state.doneJobs.splice(payload, 1);
      });
    },
    deleteJob(state, payload) {
      state.doneJobs.splice(payload, 1);
    },
  },
  actions: {},
  modules: {},
});
