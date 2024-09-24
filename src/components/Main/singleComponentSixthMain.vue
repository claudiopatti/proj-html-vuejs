<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
    data() {
        return {};
    },
    components: {
        Swiper,
    SwiperSlide,
    },
    setup() {
    return {
      modules: [Autoplay],
        };
    },
    methods: {
        
    },
};
</script>

<template>
    <div class="sectionComponentSixtyMain">
        <div class="container">

            <swiper
                :spaceBetween="5"
                :centeredSlides="false"
                :slides-per-view="4"
                :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
                }"
                :pagination="{
                clickable: true,
                }"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide class="swiper-slide"><img src="../../assets/img/client-logos-1-200x188.png" alt=""></swiper-slide>
                <swiper-slide class="swiper-slide"><img src="../../assets/img/client-logos-2-200x188.png" alt=""></swiper-slide>
                <swiper-slide class="swiper-slide"><img src="../../assets/img/client-logos-3-200x188.png" alt=""></swiper-slide>
                <swiper-slide class="swiper-slide"><img src="../../assets/img/client-logos-4-200x188.png" alt=""></swiper-slide
                ><swiper-slide class="swiper-slide"><img src="../../assets/img/client-logos-1-200x188.png" alt=""></swiper-slide>
                <swiper-slide class="swiper-slide"><img src="../../assets/img/client-logos-2-200x188.png" alt=""></swiper-slide
                ><swiper-slide class="swiper-slide"><img src="../../assets/img/client-logos-3-200x188.png" alt=""></swiper-slide>
                <swiper-slide class="swiper-slide"><img src="../../assets/img/client-logos-4-200x188.png" alt=""></swiper-slide
                ><swiper-slide class="swiper-slide"><img src="../../assets/img/client-logos-1-200x188.png" alt=""></swiper-slide>
            </swiper>
            
           
        </div>
        
    </div>
    
</template>

<style lang="scss">
@use "../../assets/scss/main" as *;
@use '../../assets/scss/partials/variables' as *;


.sectionComponentSixtyMain {
    background: rgb(58,175,191);
    background: linear-gradient(90deg, rgba(58,175,191,1) 32%, rgba(53,151,195,1) 46%, rgba(50,126,199,1) 64%);
}




</style>
