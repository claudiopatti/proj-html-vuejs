<script>
import singleComponentTopMain from './singleComponentTopMain.vue';
import singleComponentFirstMain from './singleComponentFirstMain.vue';
import singleComponentSecondMain from './singleComponentSecondMain.vue';
import singleComponentThirtyMain from './singleComponentThirtyMain.vue';
import singleComponentFoutyMain from './singleComponentFourtyMain.vue';
import singleComponentFivetyMain from './singleComponentFivetyMain.vue';
import singleComponentSixthMain from './singleComponentSixthMain.vue';








export default {
    data() {
        return {};
    },
    components: {
        singleComponentTopMain,
        singleComponentFirstMain,
        singleComponentSecondMain,
        singleComponentThirtyMain,
        singleComponentFoutyMain,
        singleComponentFivetyMain,
        singleComponentSixthMain
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

    <singleComponentFoutyMain />

    <singleComponentFivetyMain />
    
    <singleComponentSixthMain />


</template>

<style lang="scss" scoped>
@use "../assets/scss/main" as *;

</style>
