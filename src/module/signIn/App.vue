<template>
  <div id="app">
    <div class="login-top">
      <img src="../../assets/img/logo.png">
    </div>
    <div class="login_from">
      <div class="account">
        <input type="text" name="username"   class="account-input"  placeholder="请输入邮箱/手机/UID">
      </div>
      <div class="password">
        <input type="password"  name="password" class="password-input"  placeholder="密码">
      </div>
      <button  name="submit" type="submit" class="form_log"><span>登录</span></button>
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
  $font-size-34     : 17px;

  .login-top{
    background-color: #303055;
    width: 100%;
    @include rem((height:500px, line-height:800px));
    text-align: center;

  }

  .login_from{
    text-align: center;
    .account{
      border: solid 0px #ccc;
      width: 80%;
      @include rem((height:90px, margin:80px auto 0 auto));
      background: url(../../assets/img/login.png) no-repeat 20px 10px;
      input{
        @include rem((height:90px,border-radius: 50px));
        border: 1px solid #ccc;
        background: none;
        width: 100%;
        text-indent: 50px;
        outline: none;
        -webkit-appearance: none;
        @include font-dpr($font-size-30);
      }
    }

    .password{
      border: solid 0px #ccc;
      width: 80%;
      @include rem((height:90px, margin:60px auto 0 auto));
      background: url(../../assets/img/pwd.png) no-repeat 20px 10px;
      input{
        @include rem((height:90px,border-radius: 50px));
        border: 1px solid #ccc;
        background: none;
        width: 100%;
        text-indent: 50px;
        outline: none;
        -webkit-appearance: none;
        @include font-dpr($font-size-30);
      }
    }

    .form_log{
      width: 80%;
      @include rem((height:90px,border-radius: 50px, margin-top:90px));
      background: #303055;
      color: #fff;
      border: 0px;
      outline: none;
      @include font-dpr($font-size-30);
    }
  }
</style>


