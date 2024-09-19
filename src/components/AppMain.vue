<script>
import singleTopMain from './singleTopMain.vue';
import singleComponentMain from './singleComponentMain.vue';


export default {
    data() {
        return {};
    },
    components: {
        singleTopMain,
        singleComponentMain,
    },
    methods: {
        
    },
};
</script>

<template>
    <singleTopMain />
    
    <singleComponentMain />
</template>

<style lang="scss">
@use "../assets/scss/main" as *;
</style>
