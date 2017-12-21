<template>
  <div class="right_social">
    <a :href="messenger" target="_blank"><i class="fa fa-comments" aria-hidden="true"></i></a>
    <a :href="facebook" target="_blank"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
    <a :href="github" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
    <a :href="twitter" target="_blank"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
  </div>
</template>
<script>
  export default{
    data:function () {
      return {
        messenger:`http://m.me/100002857163708`,
        facebook:`http://fb.com/0.anhsang.0`,
        github:`https://github.com/my0sot1s`,
        twitter:`https://twitter.com/my0sot1ss`,
      }
    }
  }
</script>
