<template>
    <div id="app">
        <div class="container">
            <h1>Router Link</h1>
                <p>
                    <!-- use router-link component for navigation. -->
                    <!-- specify the link by passing the `to` prop. -->
                    <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
                    <router-link to="/home">Home | </router-link>
                    <router-link to="/about">About | </router-link>
                    <router-link to="/contact">Contact | </router-link>
                    <router-link to="/demoref">Demo Ref | </router-link>
                    <router-link to="/demorender">Demo Render | </router-link>
                    <router-link to="/demoslot">Demo Slot | </router-link>
                </p>
                <!-- route outlet -->
                <!-- component matched by the route will render here -->
                <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "app",
    components: {
    },
    data() {
        return {
        };
    },
    methods: {
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.container {
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
    min-height: 3000px;
}
</style>
