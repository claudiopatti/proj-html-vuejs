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
    <div class="sectionComponentMain">
        
        <div class="container px-5 py-5">
    
            <div class="text-center py-4">
    
                <div class="py-3">
                    <img src="../assets/img/icon-5.png" alt="logo-5">
                </div>
        
                <h2 class="text-uppercase fw-normal ">meet our doctors</h2>

                <div class="d-flex justify-content-center">
                    <hr class="barMain">

                </div>

                <p class="pt-3">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium <br>
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo <br>
                    inventore veritatis et quasi architecto beatae
                </p>
    
            </div>

            <div class="row pb-4">
            <div class="col-12 col-sm-6 col-md-4 ">
                <div class=" ">
                    <img class="w-100" src="../assets/img/doctor-1.jpg" alt="logo-1">

                </div>

                <div class="ps-4 py-4 bg-white">
                    
                    <h5 class="py-2 text-uppercase">jhon show</h5>

                    <h6>Anesthesiologist</h6>

    
                    <p class=" textMainTopCard py-4 ">
                        At vero eos et accusamus et iusto odio <br>
                        dignissimos ducimus qui blanditiis <br>
                        praesentium voluptatum deleniti atque
                    </p>
                   
                    <div class="iconeCardMain">
                        <span class=" bg-facebook btn me-3"><i class="fa-brands fa-facebook-f"></i></span>
                        <span class=" bg-twitter btn me-3"><i class="fa-brands fa-twitter"></i></span>
                        <span class=" bg-instangram btn"><i class="fa-brands fa-instagram"></i></span>
                    </div>

                </div>

                

            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <div class=" ">
                    <img class="w-100" src="../assets/img/doctor-2.jpg" alt="logo-2">

                </div>

                <div class="ps-4 py-4 bg-white">
                    
                    <h5 class="py-2 text-uppercase">tony stark</h5>

                    <h6>Cardiologist</h6>
                    
                    <p class=" textMainTopCard py-4">
                        At vero eos et accusamus et iusto odio <br>
                        dignissimos ducimus qui blanditiis <br>
                        praesentium voluptatum deleniti atque
                    </p>

                    <div class="iconeCardMain">
                        <span class=" bg-facebook btn me-3"><i class="fa-brands fa-facebook-f"></i></span>
                        <span class=" bg-twitter btn me-3"><i class="fa-brands fa-twitter"></i></span>
                        <span class=" bg-instangram btn"><i class="fa-brands fa-instagram"></i></span>
                    </div>
                    
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
                <div class=" ">
                    <img class="w-100" src="../assets/img/doctor-3.jpg" alt="logo-3">

                </div>

                <div class="ps-4 py-4 bg-white">
                    
                    <h5 class="py-2 text-uppercase">anna smith</h5>

                    <h6>Nurse Practitioner</h6>
    
                    <p class=" textMainTopCard py-4">
                        At vero eos et accusamus et iusto odio <br>
                        dignissimos ducimus qui blanditiis <br>
                        praesentium voluptatum deleniti atque
                    </p>

                    <div class="iconeCardMain">
                        <span class=" bg-facebook btn me-3"><i class="fa-brands fa-facebook-f"></i></span>
                        <span class=" bg-twitter btn me-3"><i class="fa-brands fa-twitter"></i></span>
                        <span class=" bg-instangram btn"><i class="fa-brands fa-instagram"></i></span>
                    </div>

                </div>

            </div>
        </div>
    
        </div>
    </div>
    
</template>

<style lang="scss">
@use "../assets/scss/main" as *;
@use '../assets/scss/partials/variables' as *;


.sectionComponentMain {
    background-color: #f7f7f7;
}

.barMain {
    width: 200px;
}

#bgFacebook {
    background-color: blue;
}

.iconeCardMain {
    
    .bg-instangram {
        background-color: $colorGeneralLightBlu;
    }
    .bg-facebook {
        background-color: $colorGeneralBlu;
    }
    .bg-twitter {
        background-color: $colorGeneralAqua;
    }
}


</style>
