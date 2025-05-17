<template>
    <input @input="onSetFilter" v-model="filterBy.txt" type="text" placeholder="Search"/>
    <input @input="onSetFilter" v-model="filterBy.maxRunningTime" type="number" placeholder="Max running time"/>
</template>

<script>
export default {
    data() {
        return {
            filterBy: {
                txt: '',
                maxRunningTime:0
            }
        }
    },
    methods: {
        onSetFilter() {
            this.$emit('filter', this.filterBy)
        }
    }
}
</script>

<style lang="scss">

</style>