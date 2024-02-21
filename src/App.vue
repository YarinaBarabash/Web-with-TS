<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/timer">Timer</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { useTimerStore } from './store/TimerStore.ts'
import { mapActions, mapState } from 'pinia'

//const timerStore = useTimerStore()

export default {
  name: 'TimerView',
  mounted() {
    if (window.localStorage === undefined) {
      throw new Error('local storage is not defined')
    }

    const localStorageTime = Number(window.localStorage.getItem('time'))

    if (localStorageTime !== null) {
      this.setTime(localStorageTime)
    }

    setInterval(() => {
      this.setTime(this.time + 1)
    }, 1000);
  },
  methods: {
    ...mapActions(useTimerStore, ['setTime']),
  },
  computed: {
    ...mapState(useTimerStore, ['time'])
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #f60dcb;
}
</style>
