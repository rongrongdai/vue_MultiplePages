<template>
  <header>
     <div class="header">
       <div class="head_all">
          <div class="ha_left">
            <a href="javascript:history.go(-1);" class="return">
              <span class="b_text">返回</span>
            </a>
            <span class="close">关闭</span>
          </div>
          <div class="ha_right">
          </div>
       </div>
     </div>
    <div class="header_copy"></div>
  </header>
</template>

<script>
  export default {
    components: {

    },
    data() {
      return {

      }
    },
    methods:{

    },

  }


</script>

<style  lang="scss">
  @import '../../src/assets/sass/_utilities.scss';
  @import '../../src/assets/sass/_rem.scss';
  @import '../../src/assets/sass/communal.scss';
  @import '../../src/assets/sass/swiper.scss';
  @include global-reset;
  $font-size-30     : 15px;
  $font-size-31     : 15.5px;
  .header{
    @include rem(( height:100px));
    width: 100%;
    background: #323155;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    .head_all{
      @include flex-container();
      justify-content: space-between;

      .ha_left{
        @include rem((height:100px));
        position: relative;
        .return{
            @include rem((width:60px,  background-size:45px 30px !important, top:20px,left:20px));
            display: block;
            position: absolute;
            background: url(../assets/img/icon_back.png) no-repeat center center;
          .b_text{
            display: inline-block; position: relative; color:#fff;
            @include rem((width:140px, left:70px));
            @include font-dpr($font-size-31,2);
          }
        }
       .close{
         position: absolute; color:#fff;
         @include rem((width:160px, left:200px));
         @include font-dpr($font-size-31,3.3);
       }
      }

     .ha_right{
         @include rem((width:80px,height:100px,  background-size:40px 40px !important));
         background: url(../assets/img/set.png) no-repeat center center;

     }

    }
  }
  .header_copy{
    @include rem(( height:100px));
  }
</style>
