<template>
  <div id="app">
    <Header></Header>
    <ul class="news_ul">
      <li class="selected">全部</li>
      <li>本周</li>
      <li>今天</li>
    </ul>
    <News></News>

    <div class="tail">
      <div class="tail_v"></div>
      <div class="tail_cont">
         <span></span>
      </div>

    </div>


  </div>
</template>

<script>
  import Header from '../../components/header_v.vue'
  import News from '../../components/list_news.vue'
  export default {
    components: {
      Header,
      News
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
  .news_ul{
    @include rem((height:70px));
    @include flex-container();
    border-bottom: 1px solid #dedede;
    justify-content: flex-start;
    li{
      width: 33%;
      text-align: center;
      @include rem((height:70px));
      @include font-dpr($font-size-30,2.5);
    }
    .selected{
      border-bottom: 2px solid #f7b52c;
    }

  }

  .tail{
    .tail_v{@include rem((height:100px));}
    .tail_cont{
      @include rem((height:100px));
      width: 100%;
      background: #323155;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 99;
      span{
        width:100%;
        @include rem((height:100px));
        background: #323155;
        background: url(../../assets/img/del.png) no-repeat;
        background-position: 50% 50%;
        display: inline-block;
      }
    }

  }

</style>


