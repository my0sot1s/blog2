<template>
  <div>
    <div class="upload_search">
      <input type="text" placeholder="Search" id="txt_search">
    </div>
    <div class="upload_content">
      <div class="upload_content_item"
           @dragover.prevent ="isShowDragBox=true"
           @drop="onDrop"
           @dragleave="isShowDragBox=false"
      >
        <div class="upload_blank" v-if="!isShowDragBox">
          <input type="text" id="upload_with_url" placeholder="Add URL to upload ...">
          <i class="fa fa-upload" aria-hidden="true"></i>
          <p>Total size < 5mb || `reject` bitch</p>
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
          :src="img.url"
          alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    data: function () {
      return {
        isShowDragBox: false,
        isUploading: false,
        listImage: [],
        limit: 8,
        page: 1
      }
    },
    created: async function () {
      var images = await axios.get(`https://te-nguyen.herokuapp.com/api/storage/getAll?limit=${this.limit}&page=${this.page}`)
      images.data.data.map(val => {
        this.listImage.push(...val.media)
        this.limit = 6
      })
    },
    methods: {
      onDrop: function (e) {
        this.isShowDragBox = true
        e.stopPropagation()
        e.preventDefault()
        var files = e.dataTransfer.files
        this.checkFile(files)
      },
      checkFile: function (files) {
        var form = new FormData()
        this.isUploading = true
        // fake uplload
        Array.from(files).forEach(file => {
          if (/\.(jpe?g|png|gif|bmp)$/i.test(file.name))
            form.append('file', file, file.name)
        })
        axios.post(`https://te-nguyen.herokuapp.com/api/storage/upload`, form, {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
          }
        }).then(({data}) => {
          this.listImage.unshift(...data.data.media)
          this.isShowDragBox = false
        })
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
    flex-basis: 32.5%;
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

  .upload_content_item img:hover {
    border-radius: 1px;
    box-shadow: 2px 4px 2px #a3a3a3;
  }

</style>
