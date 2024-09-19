<script>
import singleComponentTopMain from './singleComponentTopMain.vue';
import singleComponentFirstMain from './singleComponentFirstMain.vue';
import singleComponentSecondMain from './singleComponentSecondMain.vue';



export default {
    data() {
        return {};
    },
    components: {
        singleComponentTopMain,
        singleComponentFirstMain,
        singleComponentSecondMain
    },
    methods: {
        
    },
};
</script>

<template>
    <singleComponentTopMain />
    
    <singleComponentFirstMain />

    <singleComponentSecondMain />
</template>

<style lang="scss">
@use "../assets/scss/main" as *;
</style>
