<template>
  <div id="app">
    <!--头部-->
    <Header_m></Header_m>

    <!--中间的内容-->
    <div class="section_po">
       <a href="" class="set">
         <img class="section_img" src="../../assets/img/noavatar_small.gif" >
       </a>
       <p>
        <span class="my_name">admin</span>
        <span class="my_type">管理员</span>
       </p>
    </div>

    <div class="content_p">
        <div class="cot_left">
          <p>
            <span class="my_name">1</span>
            <span class="my_type">关注</span>
          </p>
        </div>
        <div class="cot_right">
          <p>
            <span class="my_name">0</span>
            <span class="my_type">粉丝</span>
          </p>
        </div>
    </div>
    <div class="line"></div>


    <div class="content_Icon">
      <div class="cot_left">
           <a href="">
             <img src="../../assets/img/his.png">
             <p>历史</p>
           </a>
      </div>
      <div class="cot_left">
        <a href="">
          <img src="../../assets/img/coll.png">
          <p>收藏</p>
        </a>
      </div>
      <div class="cot_left">
        <a href="">
          <img src="../../assets/img/msg.png">
          <p>消息</p>
        </a>
      </div>
    </div>


    <ul class="content_ui">
      <li class="selected">主贴</li>
      <li>回复</li>
    </ul>


    <!--贴子list-->
    <ListCop></ListCop>
    <!--回复list-->
    <Reply></Reply>


  </div>
</template>

<script>
  import Header_m from '../../components/header_m.vue'
  import ListCop from '../../components/list_cop.vue'
  import Reply from '../../components/reply.vue'
  export default {
    components: {
      Header_m,
      ListCop,
      Reply
    },
    data() {
      return {
       tabs:[]
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

  .section_po{
    background-color: #fff;
    @include rem((height:400px));
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #dedede;
    .set{
      display: inline-block;
      @include rem((margin-top:30px, margin-bottom:20px));
      .section_img{
        border-radius: 50%;
        @include rem((width:170px,height:170px));
      }
    }
    p{
      .my_name{
        display: block;
        color: #333;
        @include font-dpr($font-size-34);
      }
      .my_type{
        display: block;
        color: #a6a6a6;
        @include font-dpr($font-size-24);
      }
    }
  }

  .content_p{
    @include rem((height:150px));
    @include flex-container();
    justify-content: flex-start;
    .cot_left{
      width: 50%;
      text-align: center;
      p{
        .my_name{
          display: block;
          color: #333;
          @include font-dpr($font-size-30);
        }
        .my_type{
          display: block;
          color: #333;
          @include font-dpr($font-size-30);
        }
      }
    }
    .cot_right{
      width: 50%;
      text-align: center;
      p{
        .my_name{
          display: block;
          color: #333;
          @include font-dpr($font-size-30);
        }
        .my_type{
          display: block;
          color: #333;
          @include font-dpr($font-size-30);
        }
      }
    }

  }

  .line{
    width: 100%;
    @include rem((height:25px, margin-top:20px));
    background: #dedede;
  }

  .content_Icon{
    @include flex-container();
    justify-content: flex-start;
    @include rem((padding:30px 0));
    border-bottom: 1px solid #dedede;
    .cot_left{
      width: 33%;
      text-align: center;
      img{
        @include rem((width:50px, height:50px));
      }
      p{
        color: #333;
        @include font-dpr($font-size-30);
        @include rem((margin-top:5px));
        font-weight: 800;
      }
    }
  }

  .content_ui{
    @include flex-container();
    justify-content: flex-start;
    @include rem((height:80px, line-height:80px));
    border-bottom: 1px solid #cccccc;
    .selected{  border-bottom: 2px solid rgb(247, 181, 44);}
    li{
      @include font-dpr($font-size-30,2.7);
      width: 50%;
      text-align: center;
    }
  }

</style>


