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
    <div class="backgroundComponentThirty">
        
        <div class="container px-5 py-5">
    
            <div class="text-center py-4 text-white">
    
                <div class="py-3">
                    <img src="../assets/img/icon-7.png" alt="logo-7">
                </div>
        
                <h2 class="text-uppercase fw-normal ">our health services</h2>

                <div class="d-flex justify-content-center">
                    <hr class="barMain">

                </div>

                <p class="pt-3">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br>
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo <br>
                    inventore veritatis et quasi architecto beatae
                </p>

                <button class="btn rounded-circle mt-3 mb-5 ">
                    <i class="fa-solid fa-play text-white text-center p-2"></i>
                </button>
    
            </div>

            
        </div>
    
    </div>
    
</template>

<style lang="scss" scoped>
@use "../assets/scss/main" as *;
@use '../assets/scss/partials/variables' as *;

.barMain {
    width: 200px;
}

.backgroundComponentThirty {
    background-image: url(../assets/img/paralax-bg-tour-facilities.jpg);
    width: 100%;
    background-position: center;
    background-size: cover;

    button {
        background: rgb(58,175,191);
        background: linear-gradient(90deg, rgba(58,175,191,1) 38%, rgba(53,151,195,1) 50%, rgba(50,126,199,1) 70%);
    }
}


</style>
