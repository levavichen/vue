<template>
    <div class="field">
        <input @input="onSetFilter" v-model="filterBy.txt" type="text" placeholder="Search a movie..." />
    </div>
    <div class="max-rating">
        <label>Max rating</label>
        <input @input="onSetFilter" v-model="filterBy.maxRunningTime" type="number" placeholder="Max running time" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            filterBy: {
                txt: '',
                maxRunningTime: 0
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
.max-rating{
    display: flex;
    align-items: center;
    gap: 0.5em;
}
</style>