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
            <span class="message">系统消息</span>
          </div>

        </div>
      </div>
      <div class="header_copy"></div>
    </header>


    <div class="section">
      <div class="section_cont">
         <div class="msg_time">2017-8-11 15:40</div>
         <div class="t_c_text">
          <h2>传统服饰的美你不知道</h2>
          <div class="pic5">
            文化的象征　这张1921年的照片拍摄于廊曼国际机场，画面中的女孩们正在举行欢迎仪式，迎接飞行员的到来。这
            些飞行员到访泰国，专门为《国家地理》撰写特稿：《从伦敦飞往澳大利亚：首次乘坐飞机环游半个世界的个人经历》。　摄影：THEODORE MACKLIN，国家地理
          </div>
         </div>
      </div>

      <div class="section_cont">
        <div class="msg_time">2017-8-11 15:40</div>
        <div class="t_c_text">
          <h2>传统服饰的美你不知道</h2>
          <div class="pic5">
            文化的象征　这张1921年的照片拍摄于廊曼国际机场，画面中的女孩们正在举行欢迎仪式，迎接飞行员的到来。这
            些飞行员到访泰国，专门为《国家地理》撰写特稿：《从伦敦飞往澳大利亚：首次乘坐飞机环游半个世界的个人经历》。　摄影：THEODORE MACKLIN，国家地理
          </div>
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
  $font-size-30     : 15px;
  $font-size-31     : 15.5px;
  $font-size-34     : 17px;
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
        .message{
          position: absolute;
          @include rem((width:160px, left:330px));
          color: #f8b62d;
          @include font-dpr($font-size-31,3.3);
        }

      }

    }
  }
  .header_copy{
    @include rem(( height:100px));
  }


  .section{
    .section_cont{
      background-color: #fff;
      width: 100%;
      border-bottom: 1px solid #dedede;
      @include rem((padding-bottom:10px));

      .msg_time {
        width: 100%;
        @include rem(());
        @include font-dpr($font-size-24,2.8);
        text-align: center;
        color: #a6a6a6;
        border-bottom: 1px solid #dedede;
      }
      .t_c_text{
        @include rem((padding: 10px 15px));
        h2{
          @include font-dpr($font-size-31,2.5);
          width: 100%;
          text-align: left;
          font-weight: 700;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          word-wrap: break-word;
        }
        .pic5{
          width: 100%;
          @include font-dpr($font-size-24,2);
          color: #a6a6a6;
          text-align: justify;
           }
        }
      }
    }







</style>


