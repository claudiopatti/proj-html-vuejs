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
        <div class="container">
            <div class="d-flex justify-content-between">
                <div>
                    <img src="../assets/img/medical_logo_1x_light.png" alt="">
                </div>
                <div class="linkNav d-flex ">
                    <ul class="navbar-nav d-flex flex-row ">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Home</a>
                            
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">About</a>

                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Department</a>

                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Articles</a>

                        </li>
                    </ul>

                    <button class="btn btn-primary">
                        make appointment
                    </button>
                </div>
            </div>

        </div>
        
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.backgroundHeader {
    background-image: url(../assets/img/header-image-homepage.jpg);
}

</style>
