<template>
    <div class="demo-transition">
        <button class="btn btn-primary" v-on:click="show = !show">
            Kích hoạt
        </button>
        <transition name="fade">
            <p v-if="show">Xin chào</p>
        </transition>
        <input type="text" v-focus>
    </div>
</template>

<script>
export default {
    name: "demo-transition",
    data: function (){
        return{
            show: false
        }
    },
    directives: {
        focus: {
            // định nghĩa cho directive
            inserted: function (el) {
                el.focus()
            }
        }
    }
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
