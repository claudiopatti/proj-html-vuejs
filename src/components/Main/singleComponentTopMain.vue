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
    <div class="container py-5">
        <h1 class="text-center py-2 fw-normal">
            Welcome to Avada Health
        </h1>

        <p class="text-center pb-2">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br>
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
        </p>

        <div class="row pb-4 text-center ">
            <div class="col-12 col-sm-6 col-lg-3 cardInfo">
                <div class="pb-3">
                    <img src="../../assets/img/icon-1.png" alt="logo-1">

                </div>

                <h5 class=" py-2 text-uppercase">same day appointments</h5>

                <p class="textMainTopCard">
                    Sed ut perspiciatis unde omnis iste <br>
                    natus error sit voluptam accusantim
                </p>

            </div>
            <div class="col-12 col-sm-6 col-lg-3 cardInfo ">
                <div class="pb-3">
                    <img src="../../assets/img/icon-2.png" alt="logo-2">

                </div>

                <h5 class=" py-2 text-uppercase">world class facilities</h5>

                <p class="textMainTopCard">
                    Sed ut perspiciatis unde omnis iste <br>
                    natus error sit voluptam accusantim
                </p>
            </div>
            <div class="col-12 col-sm-6 col-lg-3 cardInfo">
                <div class="pb-3">
                    <img src="../../assets/img/icon-3.png" alt="logo-3">

                </div>

                <h5 class=" py-2 text-uppercase">expert doctors</h5>

                <p class="textMainTopCard">
                    Sed ut perspiciatis unde omnis iste <br>
                    natus error sit voluptam accusantim
                </p>
            </div>
            <div class="col-12 col-sm-6 col-lg-3 cardInfo">
                <div class="pb-3">
                    <img src="../../assets/img/icon-4.png" alt="logo-4">

                </div>

                <h5 class=" py-2 text-uppercase">complementary therapies</h5>

                <p class="textMainTopCard">
                    Sed ut perspiciatis unde omnis iste <br>
                    natus error sit voluptam accusantim
                </p>
            </div>
        </div>

    </div>
    
</template>

<style lang="scss" scoped>
@use "../../assets/scss/main" as *;

.textMainTopCard {
    font-size: 14px;
}

.row {
    .cardInfo{
        &:hover h5 {
            color: $colorGeneralAqua;
        }
    }
}
</style>
