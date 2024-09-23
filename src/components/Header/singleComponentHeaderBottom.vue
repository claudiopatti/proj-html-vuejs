<script>


export default {
    data() {
        return {};
    },
    components: {
    },
    methods: {
        
    },

    props: {
        departments: Array
    }
};
</script>

<template>
    <h1 class="text-white fw-normal">
        Caring <span >For Life</span>
    </h1>

    <p class="text-white">
        Kind words can be ShorûhduSftospeaklbut their echoes are truly <br>
        endless. Avada Health focuses on you as if it was our own family.
    </p>

    <button class="btn text-uppercase text-withe btn-primary border-0">
        learn more
    </button>

</template>

<style lang="scss" scoped>
@use "../../assets/scss/main" as *;

button {
        background-color: $colorGeneralAqua;
        
        &:hover {
            background-color: $colorGeneralBlu;
        }
    }
    
    h1 {
        span {
            color: $colorGeneralAqua;
        }
    }
</style>