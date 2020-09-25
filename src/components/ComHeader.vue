<template>
    <div>
        <h1>{{ headerText }}</h1>
        <input 
            type="button" 
            value="Change header"
            v-on:click="changeHeader"
        >
    </div>
</template>

<script>
export default {
    name: 'com-header',
    props: {
        headerText: {
            type: String,
            default: 'Header'
        }
    },
    data(){
        return {
        }
    },
    methods: {
        changeHeader(){
            console.log("changeheader from header component")
            this.$emit('change-header', {headerText: "header text change"});
        }
    }

};
</script>

<style></style>
