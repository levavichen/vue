<template>
	<footer>
        <p>Coffee Rights 2024</p>
        <p>-</p>
        <p>Num of visits: {{ $store.state.counter }}</p>
	</footer>
</template>

<script>
export default {
    computed: {
        counter() {
            return this.$store.getters.counter
        }
    }
}
</script>

<style lang="scss">
footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6vh;
    gap: 1em;

    padding: 10px;
    background-color: #f9c9b7;
}
</style>
