<script>
import componentTopFooter from './componentTopFooter.vue';
import singleComponentBottomFooter from './singleComponentBottomFooter.vue';



export default {
    data() {
        return {
            originalDataMedical: [
        
                {
                    category : 'Cardiology',
                    info1: [
                       'Carlos Santos', 
                       'Stain Midol', 
                       'Gerard Nicols', 
                       'Piera Minor', 
                    ],
                },
                {
                    category : 'Pediatrics',
                    info1: [
                       'Lina Carta', 
                       'Giolli Viola', 
                       'Mara Mina', 
                       'Cava Tello', 
                    ],
                },
                {
                    category : 'Diabetes Care',
                    info1: [
                       'Search', 
                       'Application', 
                       'Pharmacy', 
                    ],
                },
                {
                    category : 'Pre-natel Care',
                    info1: [
                       'Adoption', 
                       'Pre-Hospital', 
                       'Curation', 
                    ],
                },
                {
                    category : 'Ultrasound Echocardiogram',
                    info1: [
                       'Echocardiogram', 
                       'Radioactive', 
                       'Test Cardio', 
                    ],
                },
            ]
        };
    },
    components: {
        componentTopFooter,
        singleComponentBottomFooter,
    },
    methods: {
        
    },
};
</script>

<template>
    <componentTopFooter :dataMedical="originalDataMedical"/>

    <singleComponentBottomFooter />

</template>

<style lang="scss" scoped>
@use "../../assets/scss/main.scss" as *;
</style>
