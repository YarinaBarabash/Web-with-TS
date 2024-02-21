import { defineStore } from 'pinia'

interface State {
  time: number
}

export const useTimerStore = defineStore('timerStore', {
  state: (): State => ({
    time: 0,
  }),

  getters: {
    getTime: (state): number => state.time,
  },
  actions: {
    setTime(time: number) {
      this.time = time;

      if (window.localStorage === undefined) {
        throw new Error('local storage is not defined')
      }

      window.localStorage.setItem('time', String(this.time))
    },
  },
})