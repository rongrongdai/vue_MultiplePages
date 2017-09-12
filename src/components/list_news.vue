<template>
  <div class="list_news">
    <div class="news_text">
      <h2>万达电影停牌 百亿级万达影视并购案或将重启</h2>
      <p class="text_cont">
        <span>admin</span>
        <span>2017-09-07</span>
      </p>
    </div>


    <div class="news_text">
      <h2>万达电影停牌 百亿级万达影视并购案或将重启</h2>
      <p class="text_cont">
        <span>admin</span>
        <span>2017-09-07</span>
      </p>
    </div>








  </div>
</template>

<script>
  import axios from 'axios'
  import {QqwUtil} from '../assets/js/qqw_ultilities'

  export default {
    data(){
      return{

      }
    },
    // 挂载完毕
    mounted(){

    },
    //组件挂载
    components:{
      QqwUtil
    },
    //方法
    computed:{

    },
    //写方法
    methods: {
      handleTabChange(val) {
         QqwUtil.ajaxData();


      },

    }
  }
</script>

<style  lang="scss">
  @import '../../src/assets/sass/_utilities.scss';
  @import '../../src/assets/sass/_rem.scss';
  @import '../../src/assets/sass/communal.scss';
  @include global-reset;
  $font-size-26     : 13px;
  $font-size-28     : 14px;
  $font-size-30     : 15px;
  $font-size-31     : 15.5px;
  $font-size-32     : 16px;
  $font-size-34     : 17px;

  .list_news{
    .news_text{
      @include rem(( padding: 5px 15px 10px 15px));
      border-bottom: 1px solid #dedede;
      h2{
        @include rem((margin-top:14px));
        @include font-dpr($font-size-30,2);
        width: 100%;
        text-align: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-wrap: break-word;
      }
      .text_cont{
        @include flex-container();
        justify-content: space-between;
        span{
          @include font-dpr($font-size-26,2);
          color: #a6a6a6;
        }
      }
    }
  }



</style>
