<script>
export default {
    data() {
        return {};
    },
    components: {
    },
    methods: {
        
    },
};

</script>

<template>
    <div class="container-fluid px-5 pt-4 d-flex backgroundBottomFooter justify-content-between">
        <div class="d-flex">
            <p class="border-end border-secondary pe-3 text-secondary">
                <i class="fa-regular fa-copyright"></i> Copyright 2012 - 2020
            </p>

            <p class="border-end border-secondary px-3 text-secondary">
                <span>Avada Theme by</span> <a class="text-decoration-none text-black" href="#">Theme Fusion</a>
            </p>

            <p class="border-end border-secondary px-3 text-secondary">
                All Rights Reserved
            </p>

            <p class="border-end border-secondary px-3 text-secondary">
                <span>Powered by</span> <a class="text-decoration-none text-black" href="#"> WordPress</a>
            </p>
        </div>

        <div class="buttonForReturnUp">
            <a href="AppHeader"> <i class="fa-solid fa-chevron-up"></i> </a>
            
        </div>
        

    </div>
    
</template>

<style lang="scss" scoped>
@use "../../assets/scss/main.scss" as *;

.backgroundBottomFooter {
    background-color: #f7f7f7;
    
    
    .buttonForReturnUp {
        position: relative;
        
        a {
            position: absolute;
            right: 20px;
            bottom: 0;
            background-color: #474747;
            color: white;
            padding: 5px 15px 10px;
            border-radius: 5px;
        }

    }
}
</style>