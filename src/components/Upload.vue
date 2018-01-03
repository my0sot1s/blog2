<template>
  <loader v-if="loader" style="display: block;"></loader>
  <div v-else>
    <div class="upload_search">
      <input type="text" placeholder="Search" id="txt_search" v-model="txtSearch">
    </div>
    <div class="upload_content">
      <div class="upload_content_item"
           @dragover.prevent="isShowDragBox=true"
           @drop="onDrop"
           @dragleave="isShowDragBox=false"
      >
        <div class="upload_blank" v-if="!isShowDragBox">
          <input type="text" id="upload_with_url"
                 placeholder="Add URL to upload ..."
                 @keyup.enter="submitLink"
                 v-model="txtUrl">
          <i class="fa fa-upload" aria-hidden="true"></i>
          <p>1.Total size < 5mb || `reject` bitch</p>
          <p>2. Can upload with link || `reject` idiot</p>
          <p>3.Can upload single short video size < 7mb</p>
        </div>
        <div class="upload_blank2" v-else>
          <p>Just Drop here!! `stupid`</p>
          <i class="fa fa-plus-square-o" aria-hidden="true"></i>
        </div>
      </div>
      <div class="upload_content_item"
           v-for="(img,index) in listImage"
           :key="index">
        <img
          v-if="/(jpg)|(jpge)|(gif)|(bmp)|(png)/.test(img.format)"
          :src="img.url"
          alt="">
        <video width="320" height="240" controls v-else-if="/(mp4)|(mp3)|(3gp)|(ogg)/.test(img.format)">
          <source :src="img.url" :type="`video/${img.format}`">
          Your browser does not support the video tag.

























        </video>
        <p v-else>t chua check cai nay</p>
        <a :href="img.url" target="_blank" style="text-decoration: underline;"
           v-if="/(jpg)|(jpge)|(gif)|(bmp)|(png)/.test(img.format)">
          <p style="text-align: center">
            {{/.*\/(.*\.jpg)|(.*\.png)|(.*\.jpeg)|(.*\.bmp)$/.exec(img.url)[1] || `undefined`}}</p></a>
        <a :href="img.url" target="_blank" style="text-decoration: underline;"
           v-if="/(mp4)|(mp3)|(3gp)|(ogg)/.test(img.format)">
          <p style="text-align: center">{{/.*\/(.*\.mp4)|(.*\.mp3)|(.*\.ogg)|(.*\.3gp)$/.exec(img.url)[1] || `undefined`}}</p>
        </a>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Loader from './commons/Loader.vue'
  export default{
    data: function () {
      return {
        isShowDragBox: false,
        isUploading: false,
        listImage: [],
        limit: 3,
        page: 1,
        loader: true,
        txtUrl: null,
        txtSearch: null,
        lock: false
      }
    },
    components: {Loader},
    methods: {
      fetcher: async function (type) {
        if (type !== `append`) this.loader = true
        var images = await axios.get(`https://te-nguyen.herokuapp.com/api/storage/getAll?limit=${this.limit}&page=${this.page}`)
        if (!images.data.data.length || images.data.data.length === 0) this.lock = true
        else {
          if (type === `append`) {
            images.data.data.map(val => {
              this.listImage.push(...val.media)
            })
          } else {
            images.data.data.map(val => {
              this.listImage.push(...val.media)
            })
            this.loader = false
          }
        }
      },
      onDrop: function (e) {
        this.isShowDragBox = true
        e.stopPropagation()
        e.preventDefault()
        var files = e.dataTransfer.files
        this.checkFile(files)
      },
      submitLink: function () {
        if (this.txtUrl && /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/.test(this.txtUrl)) {
          axios.post(`https://te-nguyen.herokuapp.com/api/storage/uploadWithUrl`, `url=${encodeURIComponent(this.txtUrl)}`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).then(({data}) => {
            this.listImage.unshift(...data.data.media)
            this.isShowDragBox = false
            this.txtUrl = null
          }).catch(err => {
            debugger
            console.log(err)
          })
        } else {
          alert(`invalid data!`)
        }
      },
      checkFile: function (files) {
        var form = new FormData()
        var form2 = new FormData()
        var videos = 0, images = 0, arrProcess = []
        this.isUploading = true
        // fake uplload
        Array.from(files).forEach(file => {
          if (/\.(jpe?g|png|gif|bmp)$/i.test(file.name)) {
            form.append('file', file, file.name)
            images++
          } else if (/\.(mp3|mp4|ogg|3gp)$/i.test(file.name)) {
            form2.append('file', file, file.name)
            videos++
          }
        })
        if (images > 0) arrProcess.push(
          axios.post(`https://te-nguyen.herokuapp.com/api/storage/upload`, form, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Accept': 'application/json',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            }
          }))
        if (videos > 0) arrProcess.push(
          axios.post(`https://te-nguyen.herokuapp.com/api/storage/upload-video`, form2, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Accept': 'application/json',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            }
          })
        )
        Promise.all(arrProcess).then(arrRes => {
          for (var item of arrRes) {
            this.listImage.unshift(...item.data.data.media)
          }
        }).then(() => {
          this.isShowDragBox = false
        })
      }
    },
    mounted: function () {
      this.fetcher()
      var element = document.getElementById('main_body')
      element.onscroll = () => {
        var a = element.scrollTop, b = element.scrollHeight - element.clientHeight
        var str = window.location.href
        var spliter = str.split('#')
        if (spliter.length === 2 && spliter[1] === '/upload') {
          if (a / b > 0.75 && !this.lock) {
            this.page++
            this.fetcher(`append`)
          }
        }
      }
    }
  }
</script>

<style>
  .upload_search {
    width: 100%;
    height: 5%;
  }

  #txt_search {
    padding: 8px 30px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    background-image: url('~@/assets/searchicon.png');
    background-position: 5px 5px;
    background-repeat: no-repeat;
    width: 40%;
  }

  .upload_blank, .upload_blank2 {
    /*padding: 10px;*/
    display: flex;
    flex-direction: column;
    margin: 5px;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.49);
    min-height: 200px;
    box-shadow: 2px 4px 2px #a3a3a3;
    border: 4px dotted gray;
  }

  .upload_blank2 {
    border: 4px solid mediumvioletred;
  }

  .upload_blank i, .upload_blank2 i {
    font-size: 2.7em;
    margin-top: 10px;
    color: #969696
  }

  #upload_with_url {
    padding: 3px;
    min-width: 200px;
  }

  .upload_content {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .upload_content_item {
    flex-basis: 33%;
    padding: 5px 10px;
    height: 20%;
    /*padding: 2px;*/
  }

  .upload_content_item img {
    width: 100%;
    height: 100%;
    border-radius: 2px;
    box-shadow: 1px 3px 2px #a3a3a3;
  }

  p:hover {
    border-radius: 1px;
    box-shadow: 2px 4px 2px #a3a3a3;
  }

</style>
