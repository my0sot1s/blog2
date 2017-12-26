<template>
  <div>
    <div class="content_header">
      <h1>♥ ♥ Blog ♥ ♥<span><div class="th_hr"></div></span></h1>
    </div>
    <div class="introduce_note">
      {{data.title}}
    </div>
    <div class="blog_container">
      <div class="block_main">
        <div class="per_blog" :style="`background:url(${data.link});background-size: cover;`">
        <div class="per_gradien"></div>
        </div>
        <div class="blog_big_text per_title">{{data.tag}}</div>
        <div style="padding-top:3px;padding-bottom:3px;"></div>
        <div class="blog_post" v-html="data.content">

        </div>
        <div class="end-post"></div>
        <!--<div class="fb-comments" :data-href="data.href" data-numposts="5"></div>-->
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data: function () {
      return {
        data: []
      }
    },
    methods: {
      fetcher: function (id) {
        axios.get(`https://kutekiu.herokuapp.com/api/Blog/getBlogById?id=${id}`)
          .then(({data}) => {
            debugger
            this.data = data.data
          })
      }
    },
    mounted: function () {
      this.fetcher(this.$route.query.id)
    }
  }
</script>
