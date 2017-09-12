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
            <span class="content">我的资料</span>
          </div>
          <div class="ha_right"><span>保存</span></div>
        </div>
      </div>
      <div class="header_copy"></div>
    </header>

    <div class="edit_top">
       <img class="edit_img" src="../../assets/img/noavatar_small.gif">

      <div class="camera" id="camera" onClick="$('#imageFileId').click();">
      </div>
      <div style="display: none">
        <input id="imageFileId" type="file" />
      </div>
    </div>

    <form action="" method="POST">
      <div class="my_info">
        <div class="t_text">
          <span class="l_left">用户名字:</span>
          <span class="l_right">
            <input type="text" name="username" placeholder="请输入用户名字" class="input_style input_tes" value="admin" disabled="disabled">
          </span>
        </div>
        <div class="line_1"></div>
        <div class="t_text">
          <span class="l_left">用户昵称:</span>
          <span class="l_right">
          <input type="text" name="nickName" placeholder="请输入昵称" class="input_style" value="shhdh">
          </span>
        </div>

        <div class="line_1"></div>
        <div class="t_text">
           <span class="l_left">用户性别:</span>
          <span class="l_right">
           <select name="sex" class="input_style">
            <option value="0">请选择性别</option>
            <option value="0">保密</option>
            <option value="1">男</option>
            <option value="2" selected="selected">女</option>
            </select>
          </span>
        </div>
        <div class="line_1"></div>

        <textarea rows="10" cols="20" tabindex="2" name="sightml" class="text_area" placeholder="个性签名"></textarea>
        <div class="line_1"></div>


      </div>
    </form>



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
          @include rem((width:160px, left:350px));
          @include font-dpr($font-size-28,3.6);
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


  .edit_top{
    @include rem(( height:400px));
    border-bottom: 1px solid #dedede;
    background-color: #fff;
    width: 100%;
    text-align: center;
    position: relative;
    .edit_img{
      @include rem((width:180px, height:180px, margin-top:110px));
      border-radius: 50%;
    }
    .camera{
      position: absolute;
      background: url(../../assets/img/camera.png) no-repeat center center;
      @include rem((width:70px,height:70px,  background-size:70px 70px !important, top:40%, right:45%));
    }
  }

  .my_info{
     .t_text{
       @include rem(( padding: 15px));
       .l_left{
         width: 22%;
         display: inline-block;
         text-align: left;
         text-align: justify;
         color: #a6a6a6;
         @include font-dpr($font-size-31,2)
       }
       .l_right{
         width: 75%;
         height: auto;
         display: inline-block;
         text-align: left;
         .input_tes{ background-color: #ffffff;}
         .input_style{
           width: 100%;
           color: #a6a6a6;
           @include rem(( padding: 15px));
           border: none;
           outline: none;
           @include font-dpr($font-size-28)
         }
       }

     }
    .line_1{
      border-bottom: 1px solid #dedede;
    }

    .text_area{
      @include rem(( margin-top: 10px,padding: 0 0 0 10px));
      width:98%; border:none;    outline:none;
    }
  }
</style>


