<template>
  <div class='demo-slot'>
      <ComTabs title="This is tab title">
          <div class="tab-header">
              <ul>
                  <li 
                    v-for="(tab, index) in tabHeaders" 
                    v-bind:key="index"
                    v-on:click="handleClick(index)"
                    v-bind:class="{active: isTabActive === index }"
                  >{{ tab }}</li>
              </ul>
          </div>
          <div class="tab-contents">
              <div class="content" v-if="isTabActive === 0">
                  <p>Tab 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ipsum delectus nihil eum nulla accusamus est aliquam sint? Libero cum ex voluptatum tenetur ullam quo saepe distinctio adipisci labore soluta.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ipsum delectus nihil eum nulla accusamus est aliquam sint? Libero cum ex voluptatum tenetur ullam quo saepe distinctio adipisci labore soluta.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ipsum delectus nihil eum nulla accusamus est aliquam sint? Libero cum ex voluptatum tenetur ullam quo saepe distinctio adipisci labore soluta.
                  </p>
              </div>
              <div class="content" v-if="isTabActive === 1">
                  <p>Tab 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ipsum delectus nihil eum nulla accusamus est aliquam sint? Libero cum ex voluptatum tenetur ullam quo saepe distinctio adipisci labore soluta.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ipsum delectus nihil eum nulla accusamus est aliquam sint? Libero cum ex voluptatum tenetur ullam quo saepe distinctio adipisci labore soluta.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ipsum delectus nihil eum nulla accusamus est aliquam sint? Libero cum ex voluptatum tenetur ullam quo saepe distinctio adipisci labore soluta.</p>
              </div>
              <div class="content" v-if="isTabActive === 2">
                  <p>Tab 3 
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ipsum delectus nihil eum nulla accusamus est aliquam sint? Libero cum ex voluptatum tenetur ullam quo saepe distinctio adipisci labore soluta.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ipsum delectus nihil eum nulla accusamus est aliquam sint? Libero cum ex voluptatum tenetur ullam quo saepe distinctio adipisci labore soluta.</p>
              </div>
          </div>
      </ComTabs>
  </div>
</template>

<script>
import ComTabs from './ComTabs'
export default {
    name: "demo-slot",
    components: {
        ComTabs
    },
    data(){
        return{
            tabHeaders: ["Tab 1", "Tab 2", "Tab 3"],
            isTabActive: 0
        }
    },
    methods:{
        handleClick(index){
            this.isTabActive = index;
        }
    }
}
</script>

<style>

</style>