<template>
  <nav class="main_nav">
    <ul>
      <li>
        <router-link :to="{name:'Index.blank'}" id="home">
          <i class="fa fa-home" aria-hidden="true"></i>
          <span>Home</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'Index.about'}" id="about">
          <i class="fa fa-user" aria-hidden="true"></i>
          <span>About</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'Index.skills'}" id="skills">
          <i class="fa fa-graduation-cap" aria-hidden="true"></i>
          <span>Skills</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'Index.blog'}" id="blog">
          <i class="fa fa-bullhorn" aria-hidden="true"></i>
          <span>Blog</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'Index.pin'}" id="pin">
          <i class="fa fa-thumb-tack" aria-hidden="true"></i>
          <span>Pin</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'Index.upload'}" id="upload">
          <i class="fa fa-upload" aria-hidden="true"></i>
          <span>Upload</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'Index.contact'}" id="contact">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <span>Contact</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
  export default {}
</script>
