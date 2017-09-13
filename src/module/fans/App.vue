<template>
  <div id="app">
    <header>
      <div class="header">
        <div class="head_all">
          <div class="ha_left">
            <a href="javascript:history.go(-1);" class="return">
              <span class="b_text">返回</span>
            </a>
            <span class="close">关闭</span>
            <span class="content">admin的粉丝</span>
          </div>
          <div class="ha_right"></div>
        </div>
      </div>
      <div class="header_copy"></div>
    </header>

    <div></div>

    <div class="follow_cont">
      <div class="att_num">
        1人关注
      </div>

      <div class="fow_cont">
        <div class="fw_people">
           <div class="people_left">
            <img src="../../assets/img/noavatar_small.gif">
           </div>
           <div class="people_commt">
             <p class="p1">test</p>
             <p class="p2">耗费巨资拍出来像油画的照片</p>
           </div>
           <!--<div class="people_right">-->
             <!--<input type="button" class="btn_c" value="取消关注">-->
           <!--</div>-->
        </div>

      </div>


    </div>




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
  $font-size-28     : 14px;
  $font-size-30     : 15px;
  $font-size-34     : 17px;
  $font-size-31     : 15.5px;

  /*头部*/
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
          background: url(../../assets/img/icon_back.png) no-repeat center center;
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
        .content{
          position: absolute; color: #f8b62d;
          @include rem((width:260px, left:340px));
          @include font-dpr($font-size-28,3.6);
        }
      }

      .ha_right{
        @include rem((width:80px,height:100px,  background-size:40px 40px !important));
        background: url(../../assets/img/set.png) no-repeat center center;


      }

    }
  }
  .header_copy{
    @include rem(( height:100px));
  }







/*有关注人*/
  .follow_cont {
    .att_num {
      width: 100%;
      @include rem(( height:70px));
      background-color: #ddd;
      text-align: center;
      color: #a6a6a6;
      @include font-dpr($font-size-30,2.2);
    }

    .fow_cont{
      .fw_people{
        @include rem((padding:15px));
        @include flex-container();
        /*justify-content: space-between;*/
        justify-content: flex-start;
        border-bottom: 1px solid #dedede;
        .people_left{
          width: 16%;
          img{
            @include rem((width:100px,height: 100px));
            border-radius: 50%;
          }
        }
        .people_commt{
          width: 63%;
          p{
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            word-wrap: break-word;

          }
          .p1{ font-weight: 700;  @include font-dpr($font-size-30,1.8);}
          .p2{  @include font-dpr($font-size-24); color: #a6a6a6;}
        }
        .people_right{
          .btn_c{
            background: #F7B52C;
            color: #fff;
            border: 0px;
            @include rem((line-height:2em, border-radius:20px));
            outline: none;
            @include font-dpr($font-size-30,2.5);
          }
        }
      }
    }


  }







</style>


