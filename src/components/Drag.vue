<template>
   <div class="drag">
      <div class="suspension" id="suspension"></div>
   </div>
</template>

<script>

  export default {
    components: {
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    // 挂载完毕
    mounted() {

    },
  }

</script>

<style  lang="scss">
  @import '../../src/assets/sass/_utilities.scss';
  @import '../../src/assets/sass/_rem.scss';
  @import '../../src/assets/sass/communal.scss';
  @import '../../src/assets/sass/swiper.scss';
  @include global-reset;

  .drag{
    .suspension{
      @include rem((width:100px,height:100px, right:30px));
      position:fixed;
      top:40%;
      cursor: pointer;
      background: url(../assets/img/note.png) center center no-repeat;
      border-radius: 50%;
      background-size: 100% 100%;
    }
  }
</style>
