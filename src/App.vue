<script>

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";


export default {
    data() {
        return {};
    },
    components: {
        AppHeader,
        AppMain,
    },
    methods: {

    },
};
</script>

<template>
    <AppHeader />
    
    <AppMain />

</template>

<style lang="scss">
@use "assets/scss/main" as *;
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";
</style>
