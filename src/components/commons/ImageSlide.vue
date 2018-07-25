<template>
    <div class="main_slide">
        <ul>
            <li v-for="(img,index) in imgs" class="slide_shortcut_item" :key="index" @click="sendBackground(img)">
                <img :src="img">
                
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [
        "https://i.imgur.com/FZZGhEk.jpg",
        "https://i.imgur.com/79QJ0Iz.jpg",
        "https://i.imgur.com/UyZC2mI.jpg",
        "https://i.imgur.com/zL7SYHl.jpg",
        "https://i.imgur.com/mMdeMF6.jpg",
        "https://i.imgur.com/sZSZeHz.jpg"
      ]
    };
  },
  methods: {
    sendBackground(img) {
      this.$emit("sendBackground", img);
    }
  }
};
</script>

<style>
.main_slide {
  height: 100vh;
  position: fixed;
  width: 65px;
  /* height: 75px;  */
  left: 0;
  top: 40px;
}
.slide_shortcut_item {
  height: 75px;
  width: inherit;
  overflow: hidden;
  margin: 2px 0;
}
.slide_shortcut_item img {
  object-fit: contain;
  height: 75px;
}
</style>
