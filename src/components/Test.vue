<template>
    <div>
        <h1>{{msg}}</h1>
        <div v-for="(item, index) in items" v-bind:key="index">
            Name: {{item.name}} - Age: {{item.age}} 
        </div>
    </div>
</template>

<script>
export default {
    name: 'test',
    data(){
        return {
            msg: 'Test component',
            items: [
                {name: "name 1", age: 38},
                {name: "name 2", age: 39},
                {name: "name 3", age: 40},
            ]
        }
    }
}
</script>

<style scoped>

</style>