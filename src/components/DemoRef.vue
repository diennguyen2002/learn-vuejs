<template>
    <div>
        <button class="avatar" v-on:click="handleClick">Change Avatar</button>
        <input ref="refFileInput" type="file" style="display: none" />
    </div>
</template>

<script>
export default {
    name: "demo-ref",
    methods: {
        handleClick() {
            this.$refs.refFileInput.click();
        }
    }
};
</script>

<style>
.avatar {
    padding: 10px 20px;
    background-color: black;
    color: white;
    border: 2px solid gray;
    transition: all 0.3s ease;
}
.avatar:hover {
    background-color: white;
    color: gray;
}
</style>
