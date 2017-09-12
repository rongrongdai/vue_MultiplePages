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
          </div>
          <div class="ha_right"><span>发表</span></div>
        </div>
      </div>
      <div class="header_copy"></div>
    </header>

    <div class="post_content">
      <h2>标题: <input type="text"  name="subject" placeholder="请输入标题" class="input_tit"></h2>
      <textarea rows="10" cols="20" tabindex="2" id="needmessage" name="message" class="txtarea" placeholder="来贴吧，尽情发挥吧！……"></textarea>
      <p class="lab">上传图片</p>

      <div class="file_part">
        <a href="javascript:;" class="file">
          <span>+</span>
          <input type="file" name="Filedata" id="filedata"></a>
        <span class="e_img">
          <a href="javascript:;"  class="del">
            <img src="../../assets/img/icon_del.png">
          </a>
          <img style="height:74px;width:74px;" id="aimg_76" title="note.png" src="../../assets/img/ban1.jpg">
          <input type="hidden" name="attachnew[76][description]">
        </span>
        <span class="e_img">
          <a href="javascript:;"  class="del">
            <img src="../../assets/img/icon_del.png">
          </a>
          <img style="height:74px;width:74px;" id="aimg_77" title="ban1.jpg" src="../../assets/img/ban1.jpg">
          <input type="hidden" name="attachnew[77][description]">
        </span>
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
  $font-size-26     : 13px;
  $font-size-28     : 14px;
  $font-size-30     : 15px;
  $font-size-34     : 17px;
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
      }

      .ha_right{
        @include rem((width:80px,height:100px));
        span{ color: #ffffff;  @include font-dpr($font-size-31,3.3);}

      }

    }
  }
  .header_copy{
    @include rem(( height:100px));
  }

  .post_content{
    margin: 0px 10px 5px 10px;
    h2{
      @include rem((margin:40px 0 20px 0));
      display:block;   border-bottom: 1px solid #dedede;
      @include font-dpr($font-size-31,2);
      .input_tit{
        color: #a6a6a6;
        text-align: justify;
        min-width: 84%;
        border: none;
        outline: none;
        -webkit-appearance: none;
      }
    }
    .txtarea{
      width: 100%;
      @include rem(( height:400px, padding:10px 0 0 0));
      color: #a6a6a6;
      text-align: justify;
      outline: none;
      @include font-dpr($font-size-26);
    }

    .lab{
      /*<!--@include rem((margin:40px 0));-->*/
      @include font-dpr($font-size-31,2.8);
      color: #a6a6a6;
    }
  }

</style>


