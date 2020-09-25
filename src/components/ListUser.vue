<template>
    <div class="list-user">
        <User
            v-for="(user, index) in listUser"
            v-bind:key="index"
            v-bind:user="user"
        />
    </div>
</template>

<script>
import User from "./User";
export default {
    name: "list-user",
    props: {
        listUser: {
            type: Array,
            default: []
        }
    },
    data() {
        return {};
    },
    components: {
        User
    }
};
</script>

<style>
.list-user {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.list-user .user {
   padding: 30px;
   margin: 30px;
   border: 1px solid black;
   width: calc(33.333% -20px);
}
</style>
