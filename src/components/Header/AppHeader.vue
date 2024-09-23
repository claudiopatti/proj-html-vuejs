<script>
import singleComponentHeaderUp from './singleComponentHeaderUp.vue';
import singleComponentHeaderBottom from './singleComponentHeaderBottom.vue';

export default {
    data() {
        return { 
            originalDepartmens: [
                'General Pratice',
                'Cardiology',
                'Pediatrics',
                'Diabetes Care',
                'Pre-natal Care',
                'Ultrasound Echocardiogram'
            ]
        
        }
    },
    components: {
        singleComponentHeaderUp,
        singleComponentHeaderBottom

    }
}
</script>

<template>
    <div class="backgroundHeader">
        <div class="container-fluid">
            <div class="d-flex justify-content-between align-items-center pt-2 px-3">

                <singleComponentHeaderUp :departments="originalDepartmens" />

            </div>

            <div class="textHeaderBottom container px-5">
                
                <singleComponentHeaderBottom />
                
            </div>

        </div>
        
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

.backgroundHeader {
    background-image: url(../../assets/img/header-image-homepage.jpg);
    width: 100%;
    height: 650px;
    background-position: center;
    background-position-y: top;
    background-size: cover;
    
}


.textHeaderBottom {
    padding-top: 150px;
}

</style>
