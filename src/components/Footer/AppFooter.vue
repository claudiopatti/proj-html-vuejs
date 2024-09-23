<script>
import componentTopFooter from './componentTopFooter.vue';
import singleComponentBottomFooter from './singleComponentBottomFooter.vue';



export default {
    data() {
        return {};
    },
    components: {
        componentTopFooter,
        singleComponentBottomFooter,
    },
    methods: {
        
    },
};
</script>

<template>
    <componentTopFooter />

    <singleComponentBottomFooter />

</template>

<style lang="scss" scoped>
@use "../../assets/scss/main.scss" as *;
</style>
