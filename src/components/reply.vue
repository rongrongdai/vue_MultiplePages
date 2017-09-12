<template>
  <div class="reply">
      <div class="reply_cot">
         <div class="reply_top">
             <div class="t_left">
               <img src="../assets/img/noavatar_small.gif">
             </div>
             <div class="t_cont">
               <p class="p1">简贤</p>
               <p class="p2">07-12 16:07</p>
             </div>
         </div>

         <div class="reply_eric">
           <div class="eric">
             <p>回复：几点几分的垃圾分类</p>
             <p>回复：几点几分的垃圾分类</p>
             <p>回复：几点几分的垃圾分类</p>
           </div>
           <p><a href="">原贴：中国有多少湖泊，已经彻底死去</a></p>
         </div>

        <div class="reply_lok">
           <p class="fr">
           <img src="../assets/img/icon2.png">
           <span>2</span>
           </p>
        </div>


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
  $font-size-28     : 14px;
  $font-size-30     : 15px;
  $font-size-31     : 15.5px;
  $font-size-32     : 16px;
  $font-size-34     : 17px;
  .reply{
    .reply_cot{
      @include rem(( margin:0 20px));
    .reply_top{
      @include flex-container();
      justify-content: flex-start;
      @include rem(( padding: 30px 0 20px 0));
      .t_left{
        width: 17%;
        img{ @include rem((width:100px, height:100px)); border-radius: 50%;}
      }

      .t_cont{
        @include rem((line-height:45px, margin-top:4px));
        .p1{  @include font-dpr($font-size-30); color:#333;}
        .p2{  color: #a6a6a6;}
      }
    }

    .reply_eric{
      @include rem((padding-bottom:30px));
      .eric{
        p{
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          word-wrap: break-word;
          border-bottom: 1px solid #dbdcdc;
          color: #333!important;
          @include font-dpr($font-size-28,2.8);
        }
      }
      p a{
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-wrap: break-word;
        border-bottom: 1px solid #dbdcdc;
        color: #333!important;
        @include font-dpr($font-size-28,2.8);
      }
    }

    .reply_lok:after{
      content: "."; display: block; clear: both; visibility: hidden; line-height: 0; height: 0;
    }
   .reply_lok{
      p{
        img{
          @include rem((width:40px, height:35px));
        }
      }
    }


  }

  }


</style>
