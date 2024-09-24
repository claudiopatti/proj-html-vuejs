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
                       'Carlos Santos', 
                       'Carlos Santos', 
                       'Carlos Santos', 
                    ],
                },
                {
                    category : 'Pediatrics',
                    info1: [
                       'Carlos Santos', 
                       'Carlos Santos', 
                       'Carlos Santos', 
                       'Carlos Santos', 
                    ],
                },
                {
                    category : 'Diabetes Care',
                    info1: [
                       'Carlos Santos', 
                       'Carlos Santos', 
                       'Carlos Santos', 
                       'Carlos Santos', 
                    ],
                },
                {
                    category : 'Pre-natel Care',
                    info1: [
                       'Carlos Santos', 
                       'Carlos Santos', 
                       'Carlos Santos', 
                       'Carlos Santos', 
                    ],
                },
                {
                    category : 'Ultrasound Echocardiogram',
                    info1: [
                       'Carlos Santos', 
                       'Carlos Santos', 
                       'Carlos Santos', 
                       'Carlos Santos', 
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
