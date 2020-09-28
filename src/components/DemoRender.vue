
<script>
export default {
    name: 'demo-render',
    render(createElement){
        return createElement(
            'h' + this.level,   // tên thẻ
            this.$slots.default 
        )
    },
    props:{
        level:{
            type: Number,
            default: 0
        }
    }
}
</script>

<style>

</style>