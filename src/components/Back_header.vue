<template>
   <div class="back">
      <div class="be_dian" v-on:click="BackHeader"></div>
   </div>
</template>

<script>
  import jquery from 'jquery';
  export default {
    components: {
      jquery
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
          BackHeader(){
            window.scrollTo(1,0);
          },
    },

  }


</script>

<style  lang="scss">
  @import '../../src/assets/sass/_utilities.scss';
  @import '../../src/assets/sass/_rem.scss';
  @import '../../src/assets/sass/communal.scss';
  @import '../../src/assets/sass/swiper.scss';
  @include global-reset;

  .back{
    .be_dian{
      @include rem((width:82px,height:82px, right:30px ,bottom: 95px));
      position:fixed;
      cursor: pointer;
      background: url(../assets/img/icon_topmom.png) center center no-repeat;
      border-radius: 50%;
      background-size: 100% 100%;
      z-index: 1000;
      /*display: none;*/
    }
  }
</style>
