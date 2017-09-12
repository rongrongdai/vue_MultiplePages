<template>
  <header>
     <div class="header">
       <div class="head_al">
         <div class="head_left">
           <a href="">
             <img src="../assets/img/noavatar_small.gif">
           </a>
         </div>

         <div class="head_right">
           <ul>
             <!--<li class="selected" v-on:click="ListJump"><a href="">首页</a></li>-->
             <!--<li v-on:click="ListJump"><a href="">资讯</a></li>  @click="toggle(tab.index)"-->
             <!--<li v-on:click="ListJump"><a href="">论坛</a></li>  :class="{active:active===tab.index}" -->
             <li  v-for="(tab,index) in tabs" :class="{'active':chanceTip===tab.url}">
               <a :href="tab.url">{{tab.title}}</a>
             </li>



           </ul>
         </div>

       </div>
     </div>
    <div class="header_copy"></div>
  </header>
</template>

<script>
 export default {
    components: {
    },
    data() {
     return {
       tabs: [
         {
           title: '首页',
           url:'http://localhost:8181/module/index.html'
         },
         {
           title: '资讯',
           url:'http://localhost:8181/module/information.html'
         },
         {
           title: '论坛',
           url:'http://localhost:8181/module/forum.html'
         }
       ]
     }
   },

    computed:{
     chanceTip: chanceTip
    },
    methods:{
    },


  }
 function chanceTip(){
   return	window.location.href;
 }
</script>

<style  lang="scss">
  @import '../../src/assets/sass/_utilities.scss';
  @import '../../src/assets/sass/_rem.scss';
  @import '../../src/assets/sass/communal.scss';
  @include global-reset;
  $font-size-30     : 15px;
  $font-size-31     : 15.5px;
  $font-size-32     : 16px;
  $font-size-34     : 17px;
  .header{
    width: 100%;
    background: #323155;
    position: fixed;
    top: 0;
    left: 0;
    @include rem(( height:90px));
    z-index: 99;
    .head_al{
      @include flex-container();
      justify-content: flex-start;
      @include rem(( height:100px));
      .head_left{
          @include rem((margin-left:15px));
          width: 10%;
        a img{
          @include rem(( height:65px, width:65px));
          border-radius: 50%;
        }
      }

      .head_right{
        width: 84%;
         ul{
           @include flex-container();
           justify-content: flex-start;
           li{
             color:#ffffff;
             width:30%;
             text-align:center;
             a{ color:#ffffff; }
             @include font-dpr($font-size-31,2.8);
           }
           .active{
             a{ color: #f8b62d;}
           }
          }

      }
    }

  }
  .header_copy{  @include rem(( height:90px));}
</style>
