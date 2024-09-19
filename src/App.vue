<script>

import AppHeader from "./components/AppHeader.vue";

export default {
    data() {
        return {};
    },
    components: {
        AppHeader,
    },
    methods: {
        
    },
};
</script>

<template>
    <AppHeader />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";
</style>
