<template>
  <div id="myModal" class="modal">
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
</template>
<script>
  export default{
    data: function () {
      return {
        isModalOpen: false
      }
    }
  }
</script>
