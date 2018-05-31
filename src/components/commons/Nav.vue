<template>
  <nav class="main_nav" v-if="isShowMenu">
    <ul>
      <li id="menu_ava" @click="clickNav">
        <img src="http://res.cloudinary.com/dux5eshko/image/upload/v1514773331/common/muox9hwdcksr1kpfs1qj.jpg" alt="">
      </li>
      <li>
        <router-link :to="{name:'Index.blank'}" id="home">
          <i class="fa fa-home" aria-hidden="true"></i>
          <span>Home</span>
        </router-link>
      </li>
      <li @click="clickNav">
        <router-link :to="{name:'Index.about'}" id="about">
          <i class="fa fa-user" aria-hidden="true"></i>
          <span>About</span>
        </router-link>
      </li>
      <li @click="clickNav">
        <router-link :to="{name:'Index.skills'}" id="skills">
          <i class="fa fa-graduation-cap" aria-hidden="true"></i>
          <span>Skills</span>
        </router-link>
      </li>
      <li @click="clickNav">
        <router-link :to="{name:'Index.blog'}" id="blog">
          <i class="fa fa-bullhorn" aria-hidden="true"></i>
          <span>Blog</span>
        </router-link>
      </li>
      <li @click="clickNav">
        <router-link :to="{name:'Index.pin'}" id="pin">
          <i class="fa fa-thumb-tack" aria-hidden="true"></i>
          <span>Pin</span>
        </router-link>
      </li>
      <!-- <li @click="clickNav">
        <router-link :to="{name:'Index.input'}" id="input">
          <i class="fa fa-pencil" aria-hidden="true"></i>
          <span>Input</span>
        </router-link>
      </li> -->
      <li @click="clickNav">
        <router-link :to="{name:'Index.upload'}" id="upload">
          <i class="fa fa-upload" aria-hidden="true"></i>
          <span>Upload</span>
        </router-link>
      </li>
      <li @click="clickNav">
        <router-link :to="{name:'Index.contact'}" id="contact">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <span>Contact</span>
        </router-link>
      </li>
    </ul>
  </nav>
  <p class="icon_menu" v-else>
    <i class="fa fa-bars" aria-hidden="true" @click="isShowMenu=true"></i>
  </p>
</template>
<script>
  export default {
    data: function () {
      return {
        isShowMenu: true
      }
    },
    methods: {
      clickNav: function () {
        setTimeout(() => {
          this.isShowMenu = false
        }, 1000)
      }
    }
  }
</script>
<style scoped>
  .icon_menu {
    position: fixed;
    top: 7px;
    left: 7px;
  }

  .icon_menu i {
    padding: 5px;
    font-size: 1.2em;
    border: 1px solid purple;
  }

  #menu_ava {
    display: flex;
    justify-content: center;
  }

  #menu_ava img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
</style>
