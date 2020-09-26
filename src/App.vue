<template>
    <div id="app">
        <div class="container">
            <!-- <ComHeader 
              v-bind:headerText="headerText" 
              v-on:change-header="handleChangeHeader"
            />
            <ListUser v-bind:listUser="listUser" />
            <ComFooter v-bind:footerText="footerText" /> -->
            <!-- <DemoRef /> -->
            <!-- <DemoSlot /> -->
            <DemoRender v-bind:level="1">
                Demo render H1
            </DemoRender>
            <DemoRender v-bind:level="2">
                Demo render H2
            </DemoRender>
        </div>
    </div>
</template>

<script>
import ComHeader from "./components/ComHeader";
import ListUser from "./components/ListUser";
import ComFooter from "./components/ComFooter";
import DemoRef from "./components/DemoRef";
import DemoSlot from "./components/DemoSlot";
import DemoRender from "./components/DemoRender"
export default {
    name: "app",
    components: {
        ComHeader,
        ListUser,
        ComFooter,
        DemoRef,
        DemoSlot,
        DemoRender
    },
    data() {
        return {
            headerText: "Welcome to Your Vue.js",
            footerText: "I am footer",
            listUser: [
                { email: "testmail1@gmail.com", active: false },
                { email: "testmail2@gmail.com", active: false },
                { email: "testmail3@gmail.com", active: true },
                { email: "testmail4@gmail.com", active: false },
                { email: "testmail5@gmail.com", active: true },
                { email: "testmail6@gmail.com", active: false }
            ]
        };
    },
    methods: {
        handleChangeHeader(event) {
            this.headerText = event.headerText;
            console.log("event from App component");
        }
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
