<script>

import AppHeader from "./components/Header/AppHeader.vue";
import AppMain from "./components/Main/AppMain.vue";
import AppFooter from "./components/Footer/AppFooter.vue";



export default {
    data() {
        return {};
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
    methods: {

    },
};
</script>

<template>
    <div class="containerGeneral">
        <div class="buttonForReturnUp position-fixed">
            <a href="appheader"> <i class="fa-solid fa-chevron-up"></i> </a>
        </div>

        <AppHeader />
    
        <AppMain />
    
        <AppFooter />

    </div>

</template>

<style lang="scss">
@use "assets/scss/main" as *;
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";

.containerGeneral {
    position: relative;
    .buttonForReturnUp {
        z-index: 2;
        right: 20px;
        bottom: 10px;

        
        a {
            background-color: #474747;
            color: white;
            padding: 5px 15px 20px;
            border-radius: 5px;
            
            &:hover {
                background-color: $colorGeneralAqua;
            }
        }
    
    }
}



</style>
