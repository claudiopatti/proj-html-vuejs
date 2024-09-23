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
    <div class="pt-5 ps-5">
        
        <h4 class="text-uppercase">
            contact information
        </h4>

        <hr class="barFooterAqua">

        <div class="iconeCenterFooter">
            <p><i class="fa-solid fa-location-dot ps-2 pe-3 fs-4"></i>  121 King Street, London United Kingdom</p>
            <p><i class="fa-solid fa-phone-flip ps-2 pe-3 fs-4"></i>  1.800.458.556</p>

        </div>

    </div>

</template>

<style lang="scss" scoped>
@use "../../assets/scss/main" as *;

.barFooterAqua {
    width: 40px;
    border: 2px solid $colorGeneralAqua;
    opacity: 1;
}

.iconeCenterFooter {
    padding-top: 30px;
    p {
        padding: 5px 0;
        i {
            color: $colorGeneralAqua;
        }
    }
}
</style>
