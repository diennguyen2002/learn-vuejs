<template>
    <div>
        <h1>{{ footerText }}</h1>
    </div>
</template>

<script>
export default {
    name: 'com-footer',
    props: {
        footerText:{
            type: String,
            default: 'Footer'
        }
    },
    data(){
        return {
        }
    }
};
</script>

<style></style>
