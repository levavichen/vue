<template>
    <h1>Welcome dear visitor!</h1>
    <p>This app has been visited <strong>{{ $store.state.counter }}</strong> times</p>
    <button @click="onIncrement">Simulate a new visit</button>
</template>

<script>
export default {
    methods: {
        onIncrement() {
            this.$store.commit({ type: 'increment' })
        }
    },
    computed: {
        counter() {
            return this.$store.getters.counter
        }
    }
}
</script>