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

    <div class="container-fluid g-0 ">
        <div class="row g-0">
            <div class="col-12 col-lg-4 text-center emergencyCard text-white py-4">
                <h5 class="pt-3">
                    Emergency Care
                </h5>

                <div class="py-3">
                    <img src="../assets/img/wave-divider.png" alt="wave-icone">
                </div>

                <p class="py-2 lh-lg">
                    Sed sut perspiciatis unde omnis iste natus error sit voluptatem accusantium dotorem laudantium. totam rem aperiam. eaque
                </p>

                <button class="text-uppercase btn  border-white rounded-0 px-4 mb-3 ">
                    learn more
                </button>
            </div>
            <div class="col-12 col-lg-4 text-center expertCard text-white py-4">
                <h5 class="pt-3">
                    Expert Diagnostics
                </h5>

                <div class="py-3">
                    <img src="../assets/img/wave-divider.png" alt="wave-icone">
                </div>

                <p class="py-2 lh-lg">
                    Sed sut perspiciatis unde omnis iste natus error sit voluptatem accusantium dotorem laudantium. totam rem aperiam. eaque
                </p>

                <button class="text-uppercase btn border-white rounded-0 px-4 mb-3 ">
                    learn more
                </button>
            </div>
            <div class="col-12 col-lg-4 text-center superbCard text-white py-4">
                <h5 class="pt-3">
                    Superb Rehabilitation
                </h5>

                <div class="py-3">
                    <img src="../assets/img/wave-divider.png" alt="wave-icone">
                </div>

                <p class="py-2 lh-lg">
                    Sed sut perspiciatis unde omnis iste natus error sit voluptatem accusantium dotorem laudantium. totam rem aperiam. eaque
                </p>

                <button class="text-uppercase btn border-white rounded-0 px-4 mb-3 ">
                    learn more
                </button>
            </div>
        </div>
    </div>
     
</template>

<style lang="scss" scoped>
@use "../assets/scss/main" as *;
@use '../assets/scss/partials/variables' as *;

.emergencyCard {
    background-color: $colorGeneralAqua;
    p {
        font-size: 13px;
    }
    button {
        color: white;
        &:hover {
            background-color: white;
            color:  $colorGeneralAqua;
        }
    }
}

.expertCard {
    background-color: $colorGeneralLightBlu;
    p {
        font-size: 13px;
    }
    button {
        color: white;
        &:hover {
            background-color: white;
            color:  $colorGeneralLightBlu;
        }
    }
}

.superbCard {
    background-color: $colorGeneralBlu;
    p {
        font-size: 13px;
    }
    button {
        color: white;
        &:hover {
            background-color: white;
            color:  $colorGeneralBlu;
        }
    }
}


</style>
