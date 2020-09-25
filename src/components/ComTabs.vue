<template>
  <div class="com-tabs">
      <div class="tab-title">
          <span>{{ title }}</span>
      </div>
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'com-tabs',
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>
.com-tabs{
    border: 1px solid #333;
    height: 500px;
    padding: 2px;
}
.com-tabs .tab-title{
    padding: 15px 30px;
    border: 1px solid blue;
}

.com-tabs .tab-header {
    border: 1px solid blue;
    margin-top: 2px;
}

.com-tabs .tab-header ul{
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
}
.com-tabs .tab-header ul li {
    cursor: pointer;
    padding: 10px 20px;
    background-color: black;
    color: white;
    transition: all 0.3s ease;
}

.com-tabs .tab-header ul li:hover {
    background-color: white;
    color: #333;
}

.com-tabs .tab-header ul li.active {
    background-color: bisque;
    color: #333
}

.tab-contents{
    padding: 20px;
}
.tab-contents .content{
    text-align: left;
}

</style>