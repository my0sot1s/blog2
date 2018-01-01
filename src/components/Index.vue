<template>

  <div class="main_page">
    <!-- nav bar -->
    <navigation></navigation>
    <!-- end nav bar -->
    <!-- content page -->
    <section class="main_content">

      <div class="cv_name">
        <div>Nguyễn Mạnh Tể</div>
      </div>
      <h4>Junior developer and full stack</h4>
      <p class="introduce">
        Tôi không sợ người luyện tập 10.000 cú đá chỉ một lần<br>Mà chỉ sợ người thực hành 1 cú đá 10.000 lần.
        <br> Nếu cho tôi 6 giờ để chặt một cái cây, <br> tôi sẽ dành 4 tiếng để mài rìu
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
      CSS3,JS,HTML5-<24/12/2017>~  - wkr:te-nguyen











    </div>
    <!-- end content page -->
    <!-- modal config -->
    <div id="myModal" class="modal" :style="isModalOpen? {display:'block'}:{display:'none'}">
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
        isModalOpen: false,
        modal: null,
        routerName: this.$router,
        modal_content: null,
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
//        modal.style.display = 'none'
        this.isModalOpen = false
        if (typeof cb === 'function') cb()
        modal_content.style['animation-name'] = name
        modal_content.style['-webkit-animation-name'] = name
      },
      _updateHeader: (modal, _name, _str, cb) => {
        setTimeout(() => {
          document.title = `${_name} - Nguyễn Mạnh Tể`
          document.querySelector('meta[name="description"]')['content'] = `${_name} - Nguyễn Mạnh Tể`
//          $("main_body").innerHTML = _str;
          cb()
//          this.$('myModal').style.display = 'block'
        }, 50)
      }
    },
    watch: {
      $route: function (newName) {
        if (newName.name === 'Index.blank') this.isModalOpen = false
        else {
          this._setAnimate(this.modal, this.modal_content, newName.meta.effect, () => {
            this._updateHeader(this.modal, newName.meta.title, '', () => {
              this.isModalOpen = true
            })
          })
        }
      }
    },
    mounted: function () {
      this.modal = this.$('myModal')
      this.modal_content = this.$('modal_content')
      var str = window.location.href
      var spliter = str.split('#')
      if (spliter[1] && spliter[1] !== '/') this.isModalOpen = true
      document.body.style =
        `background-image: url(${this.mang1[this.rand(this.mang1.length - 1)]});`
      var lich = this._('right_bar')[0]

      var _d = new Date()
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      lich.insertAdjacentHTML('beforeend', '<h2>' + days[_d.getDay()] + '</h2>')
      lich.insertAdjacentHTML('beforeend', '<h2>' + _d.getDate() + '</h2>')
      lich.insertAdjacentHTML('beforeend', '<h2>' + month[_d.getUTCMonth()] + '</h2>')
      lich.insertAdjacentHTML('beforeend', '<h2>' + _d.getFullYear() + '</h2>')
      //dong ho
      var dh = this._('right_clock')[0]
      setInterval(function () {
        var str, h = _d.getHours(), m = _d.getMinutes(), s = _d.getSeconds()
        h = h < 10 ? '0' + h : h
        m = m < 10 ? '0' + m : m
        s = s < 10 ? '0' + s : s
        str = '<h2>' + h + ':' + m + '</h2>'
        dh.innerHTML = str
        // dh.insertAdjacentHTML('beforeend', str)
      }, 1000)
    }
  }
</script>
