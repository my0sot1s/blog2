<template>
  <loader v-if="loader" style="display: block;"></loader>
  <div v-else>
    <div class="content_header">
      <h1><i class="fa fa-heartbeat" aria-hidden="true"></i> Blog <i class="fa fa-heartbeat"
                                                                     aria-hidden="true"></i><span><div
        class="th_hr"></div></span></h1>
    </div>
    <div class="introduce_note">
      Memory Post - Parallax ScrollView & Auto Scroll Load more &#9829




    </div>
    <div class="blog_container">
      <div class="block_main blog_main_bar" v-for="(item,key) in data"
           :key="key"
           :style="`background-image: url(${item.link})`">
        <div class="blog_time">Time: {{item.dateCreate}}</div>
        <div class="blog_big_text big_text_title">{{item.title}}</div>
        <router-link :to="{name:'Index.post',query:{id:item.id}}"
                     class="blog_readMore">
          Read more




        </router-link>
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
        data: [],
        limit: 5,
        page: 0,
        lock: false,
        loader: true
      }
    },
    components: {Loader},
    methods: {
      fetcher: function (type) {
        if (type !== `append`) this.loader = true
        axios.get(`https://te-nguyen.herokuapp.com/api/Blog/getBlogInfo?limit=${this.limit}&page=${this.page}`)
          .then(({data}) => {
            if (!data.data.length || data.data.length === 0) this.lock = true
            else {
              if (type === `append`) this.data.push(...data.data)
              else this.data = data.data
            }
          })
          .then(() => {
            setTimeout(() => {
              this.loader = false
            }, 500)
          })
        console.log(this.data)
      }
    },
    mounted: function () {
      this.fetcher()
      var element = document.getElementById('main_body')
      element.onscroll = () => {
        var a = element.scrollTop, b = element.scrollHeight - element.clientHeight
        var str = window.location.href
        var spliter = str.split('#')
        if (spliter.length === 2 && spliter[1] === '/blog') {
          if (a / b > 0.75 && !this.lock) {
            this.page++
            this.fetcher(`append`)
          }
        }
      }
    }
  }
</script>
