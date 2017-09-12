<template>
  <div id="app">
    <Header></Header>
    <div class="set_bg"></div>
    <div class="cont">
       <span class="cont_left">版本信息</span>
       <span class="cont_right1">1.0.0</span>
    </div>

    <div class="cont">
      <span class="cont_left">意见反馈</span>
      <span class="cont_right"></span>
    </div>

    <div class="cont">
      <span class="cont_left">修改密码</span>
      <span class="cont_right"></span>
    </div>

    <div class="set_tail">
      <p>退出登录</p>
    </div>


  </div>
</template>

<script>
  import Header from '../../components/header_v.vue'
  export default {
    components: {
      Header,
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style  lang="scss">
  @import '../../assets/sass/_utilities.scss';
  @import '../../assets/sass/_rem.scss';
  @import '../../assets/sass/communal.scss';
  @import '../../assets/sass/swiper.scss';
  @include global-reset;
  $font-size-24     : 12px;
  $font-size-30     : 15px;
  $font-size-34     : 17px;
  $font-size-31     : 15.5px;
  .set_bg{
    @include rem((height:60px));
    width: 100%;
    background-color: #ddd;
  }
  .cont{
    @include flex-container();
    justify-content: space-between;
    border-bottom: 1px solid #dbdcdc;
    @include font-dpr($font-size-31,3.5);
    .cont_left{
       @include rem(( margin-left:14px));

    }
    .cont_right1{
      @include rem(( margin-right:14px));
    }
    .cont_right{
      @include rem(( margin-right:14px, background-size:40px 40px !important, width:60px,height:60px));
      background: url(../../assets/img/rd.png) no-repeat center center;
    }
  }

  .set_tail{
    width: 100%;
    @include rem((height:100px));
    background: #323155;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
    text-align: center;
    color: #ffffff;
    @include font-dpr($font-size-31,3.2);
  }

</style>


