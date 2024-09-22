<script>
export default {
    data() {
        return { 
        
        }
    }
}
</script>

<template>
    <div class="backgroundHeader">
        <div class="container-fluid">
            <div class="d-flex justify-content-between align-items-center pt-2 px-3">
                <div>
                    <a href="#">
                        <img src="../assets/img/medical_logo_1x_light.png" alt="logo-medical">
                        
                    </a>
                </div>
                <div class="linkNav d-flex ">
                    <ul class="navbar-nav d-flex flex-row p-3">
                        <li class="nav-item px-3">
                            <a class="nav-link textColorAqua" href="#">Home</a>
                            
                        </li>
                        <li class="nav-item px-3">
                            <a class="nav-link text-white" href="#">About</a>

                        </li>
                        <li class="nav-item px-3">
                            <a class="nav-link text-white" href="#">Department</a>

                        </li>
                        <li class="nav-item px-3">
                            <a class="nav-link text-white" href="#">Articles</a>

                        </li>
                    </ul>

                    <button class="btn my-3 text-uppercase">
                        make appointment
                    </button>
                </div>
            </div>

            <div class="textHeaderBottom container px-5">
                <h1 class="text-white fw-normal">
                    Caring <span >For Life</span>
                </h1>

                <p class="text-white">
                    Kind words can be ShorûhduSftospeaklbut their echoes are truly <br>
                    endless. Avada Health focuses on you as if it was our own family.
                </p>

                <button class="btn text-uppercase">
                    learn more
                </button>
            </div>

        </div>
        
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.backgroundHeader {
    background-image: url(../assets/img/header-image-homepage.jpg);
    width: 100%;
    height: 650px;
    background-position: center;
    background-position-y: top;
    background-size: cover;
    .textColorAqua{
        color: $colorGeneralAqua;
    }
    button {
        background-color: $colorGeneralAqua;
    }
}

.textHeaderBottom {
    padding-top: 150px;
    h1 {
        span {
            color: $colorGeneralAqua;
        }
    }
}

</style>
