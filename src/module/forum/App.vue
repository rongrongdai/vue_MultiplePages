<template>
  <div id="app">
    <!--头部-->
    <HeaderBar></HeaderBar>

    <!--列表-->
    <List></List>
    <!--拖拽-->
    <Drag></Drag>
    <!--返回顶部-->
    <BackHeader></BackHeader>
  </div>
</template>

<script>
  import HeaderBar from '../../components/HeaderBar.vue'
  import List from '../../components/list.vue'
  import Drag from '../../components/Drag.vue'
  import BackHeader from '../../components/Back_header.vue'
  export default {
    components: {
      HeaderBar,
      List,
      Drag,
      BackHeader
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style  lang="scss">

</style>


