import { defineStore } from 'pinia';

// store 实例
export const useMainStore = defineStore('main', {
  state: () => {
    return {
      count: 0,
    };
  },
  getters: {},
  actions: {},
});
