<template>

  <div class="main_page">
    <!-- loader copy tại codepen -->
    <div class="loader">
      <div class="pacman"></div>
      <div class="dot"></div>
    </div>

    <!-- nav bar -->
    <navigation></navigation>
    <!-- end nav bar -->
    <!-- content page -->
    <section class="main_content">

      <div class="cv_name">
        <div>Nguyễn Mạnh Tể</div>
      </div>
      <h4>Junior developer and designer</h4>
      <p class="introduce">
        Tôi không sợ người luyện tập 10.000 cú đá chỉ một lần<br>Mà chỉ sợ người thực hành 1 cú đá 10.000 lần.
        <br> Những người không biết mình đang đi trong bóng tối <br>sẽ không bao giờ tìm thấy ánh sáng.
        <!-- <p>Lý Tiểu Long</p> -->
      </p>

      <ul class="phim_nhan">
        <li><a href="http://fb.com/0.anhsang.0" class="hire">Hire me</a></li>
        <li><a href="https://drive.google.com/open?id=0BxNx6QRuIMWaNFgwS0g1Mk1HVjg" target="_blank"
               class="hire">DOC CV</a></li>
      </ul>
    </section>
    <div class="right_bar"></div>
    <div class="right_clock"></div>
    <social></social>
    <div class="bottom_bar">
      CSS3,JS,HTML5 - wkr:kutekiu
    </div>
    <!-- end content page -->
    <!-- modal config -->
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content" id="modal_content">
        <div class="modal-header">
          <span class="close" @click="isModalOpen=false">&times;</span>
        </div>
        <div class="modal-body" id="main_body">
          <!-- template put to hear hihiu -->
          <router-view></router-view>
        </div>
        <div class="modal-footer">
          <!-- push comment -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Navigation from './commons/Nav.vue'
  import Social from './commons/Social.vue'

  export default {
    components: {Navigation, Social},
    data: function () {
      return {
        isModalOpen:false,
        modal:null,
        routerName:this.$router,
        modal_content:null,
        mang1: ['https://i.imgur.com/CxD4ZNw.jpg'
          , 'static/img/home_bg.jpg'
          , 'https://i.imgur.com/Ks44lpb.jpg'],//
        mang2: [
          'https://i.imgur.com/FZZGhEk.jpg'
          , 'https://i.imgur.com/79QJ0Iz.jpg'
          , 'https://i.imgur.com/UyZC2mI.jpg'
          , 'https://i.imgur.com/zL7SYHl.jpg'
          , 'https://i.imgur.com/mMdeMF6.jpg'
          , 'https://i.imgur.com/sZSZeHz.jpg'
        ],
      }
    },
    methods: {
      rand: function (num) {
        return Math.floor(Math.random() * (num - 0 + 1)) + 0
      },
      $: function (id) {
        return document.getElementById(id)
      },
      _: function (cl) {
        return document.getElementsByClassName(cl)
      },
      _setAnimate: function (modal, modal_content, name, cb) {
        modal.style.display = 'none'
        if (typeof cb === 'function') cb()
        modal_content.style['animation-name'] = name
        modal_content.style['-webkit-animation-name'] = name
      }
    },
    watch:{
      routerName:function (newName) {
        debugger
        this._setAnimate(this.modal,this.modal_content,'bounceIn')
      }
    },
    mounted: function () {
      this.modal = this.$('myModal')
      this.modal_content = this.$("modal_content")
      document.getElementsByTagName('body')[0].style
        = 'background-image: url(\''
        + this.mang1[this.rand(this.mang1.length - 1)] + '\');'
      document.body.onmouseenter = function () {
        setTimeout(function () {
          document.getElementsByTagName('body')[0].style =
            'background-image: url(\''
            + this.mang2[this.rand(this.mang2.length - 1)] + '\');'
        }, 1000)
      }
    }
  }
</script>
