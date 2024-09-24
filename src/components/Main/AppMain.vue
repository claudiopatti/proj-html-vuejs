<script>
import singleComponentTopMain from '../Main/singleComponentTopMain.vue';
import singleComponentFirstMain from '../Main/singleComponentFirstMain.vue';
import singleComponentSecondMain from '../Main/singleComponentSecondMain.vue';
import singleComponentThirtyMain from '../Main/singleComponentThirtyMain.vue';
import singleComponentFoutyMain from '../Main/singleComponentFourtyMain.vue';
import singleComponentFivetyMain from '../Main/singleComponentFivetyMain.vue';
import singleComponentSixthMain from '../Main/singleComponentSixthMain.vue';








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
@use "../../assets/scss/main" as *;

</style>
