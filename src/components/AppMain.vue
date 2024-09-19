<script>
import singleComponentTopMain from './singleComponentTopMain.vue';
import singleComponentFirstMain from './singleComponentFirstMain.vue';
import singleComponentSecondMain from './singleComponentSecondMain.vue';
import singleComponentThirtyMain from './singleComponentThirtyMain.vue';




export default {
    data() {
        return {};
    },
    components: {
        singleComponentTopMain,
        singleComponentFirstMain,
        singleComponentSecondMain,
        singleComponentThirtyMain
    },
    methods: {
        
    },
};
</script>

<template>
    <singleComponentTopMain />
    
    <singleComponentFirstMain />

    <singleComponentSecondMain />

    <singleComponentThirtyMain />

</template>

<style lang="scss" scoped>
@use "../assets/scss/main" as *;
</style>
