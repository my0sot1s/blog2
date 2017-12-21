<template>
  <nav class="main_nav">
    <ul>
      <li><a href="#" id="home">
        <i class="fa fa-home" aria-hidden="true"></i>
        <span>Home</span>
      </a></li>
      <li>
        <router-link :to="{name:'about'}" id="about">
          <i class="fa fa-user" aria-hidden="true"></i>
          <span>About me</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'skills'}" id="skills">
          <i class="fa fa-graduation-cap" aria-hidden="true"></i>
          <span>My Skills</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'blog'}" id="blog">
          <i class="fa fa-bullhorn" aria-hidden="true"></i>
          <span>Blog</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:'contact'}" id="contact">
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
