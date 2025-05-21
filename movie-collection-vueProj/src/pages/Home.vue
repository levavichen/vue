<template>
    <h1>Home</h1>
    <p>{{ $store.state.counter }}</p>
    <button @click="onIncrement">+1</button>
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