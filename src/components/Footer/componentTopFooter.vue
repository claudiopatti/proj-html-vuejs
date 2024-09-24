<script>
import singleComponentTopRight from './singleComponentTopRight.vue';
import singleComponentTopCenter from './singleComponentTopCenter.vue';
import singleComponentTopEnd from './singleComponentTopEnd.vue';




export default {
    data() {
        return {};
    },
    components: {
        singleComponentTopRight,
        singleComponentTopCenter,
        singleComponentTopEnd
    },
    props: {
        dataMedical: Array
    },
    methods: {
        
    },
};
</script>

<template>

    <div class="conatiner">
        <div class="row g-0">
            <div class="col-4">
                <singleComponentTopRight />

                
            </div>
            <div class="col-4">
                <singleComponentTopCenter />
                
            </div>
            <div class="col-4">
                
                <singleComponentTopEnd :finalDataMedical="dataMedical" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/main" as *;
</style>
