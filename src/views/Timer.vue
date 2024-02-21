<template>
    <div class="timer">
        <p>Timers page</p>
        <div> {{ time }} </div>
        <button @click="reset" class="reset-button"> Сбросить время </button>
    </div>
</template> 

<script lang="ts">
import { mapState, mapActions } from 'pinia'
import { useTimerStore } from '../store/TimerStore.ts'

export default {
    name: 'TimerView',
    computed: {
        ...mapState(useTimerStore, ['time'])
    },
    methods: {
        ...mapActions(useTimerStore, ['setTime']),
        reset() {
            this.setTime(0)
        }
    }
}
</script>

<style>
.reset-button {
    color: #638ab1;
    border-radius: 20px;
    border: none;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    transition-duration: 0.8s;
}

.reset-button:hover {
    background-color: #f60dcb;
}
</style>