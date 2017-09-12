<template>
  <div class="swiper-container">

    <ul class="swiper-wrapper">
      <li class="swiper-slide">
        <a href="" title="">
          <img src="../../src/assets/img/ban1.jpg" alt="">
        </a>
      </li>
      <li class="swiper-slide" v-for="">
        <a href="" title="">
          <img src="../../src/assets/img/ban2.jpg" alt="">
        </a>
      </li>
      <li class="swiper-slide" v-for="">
        <a href="" title="">
          <img src="../../src/assets/img/ban3.jpg" alt="">
        </a>
      </li>

    </ul>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>

</template>

<script>
  import swiper from 'swiper';
  export default {
    components: {
      swiper
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    // 挂载完毕
    mounted() {
       console.log('mounted', this);
       var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        speed: 900,
        autoplay: 4000,
        onTouchEnd: function() {
          swiper.startAutoplay()
        }
      });
    },


  }
</script>

<style  lang="scss">
  @import '../../src/assets/sass/_utilities.scss';
  @import '../../src/assets/sass/_rem.scss';
  @import '../../src/assets/sass/communal.scss';
  @import '../../src/assets/sass/swiper.scss';
  @include global-reset;

 .swiper-container {
       padding-top:0;
       margin-bottom: 0;
       width: 100%;
       height: 4.5rem;
     .swiper-wrapper {
       width: 100%;
       height: 100%;
      }
     .swiper-slide {
       background-position: center;
       background-size: cover;
       width: 100%;
       height: 100%;
       position: relative;
       z-index: 0;

      a{
        display: block;
        height: 4.5rem;
        img {
          width: 100%;
          height: 100%;
        }
      }

    }

    .swiper-pagination-bullet-active{
      background: #f20c11 !important;
    }

    .swiper-pagination-bullet{
      display: inline-block;
      width: 10px;
      height: 10px;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      background: rgba(242, 12, 17, 0.49);
      text-indent: -9999px;
      overflow: hidden;
      margin: 0 2px;
    }
  }

  .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
    border: none;
    background: rgba(242, 12, 17, 0.49);
  }



</style>
