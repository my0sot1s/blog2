<template>
  <div class="content_header">
    <h1><i class="fa fa-envelope-open" aria-hidden="true"></i> Contact <i class="fa fa-envelope-open" aria-hidden="true"></i><span><div class="th_hr"></div></span></h1>
  </div>

  <div class="contact">
    Liên Lạc với Tôi??
  </div>
  <table class="contact_table">
    <tr>
      <td><i class="fa fa-envelope-o" aria-hidden="true"></i></td>
      <td>SEND ME AN EMAIL</td>
      <td><i class="fa fa-map-marker" aria-hidden="true"></i></td>
      <td>PAY ME A VISIT</td>
      <td><i class="fa fa-phone" aria-hidden="true"></i></td>
      <td>MY NUMBER</td>
    </tr>
    <tr>
      <td></td>
      <td>manhte231@gmail.com</td>
      <td></td>
      <td>Ngõ 1-Phạm Văn Đồng- Nam Từ Liêm - Hà Nội</td>
      <td></td>
      <td>(+84) 167 314 0510</td>
    </tr>
  </table>

  <div class="contact_mail">
    Gửi Feedback cho tôi!!
    <\Lìn>
  </div>
  <div class="contact_form">
    <form class="cf">
      <div class="half left cf">
        <input type="text" id="input-name" placeholder="Name">
        <input type="email" id="input-email" placeholder="Email address">
        <input type="text" id="input-subject" placeholder="Subject">
      </div>
      <div class="half right cf">
        <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
      </div>
      <input type="button" value="Submit" onclick="sendAnEmail();" id="input-submit">
    </form>
  </div>
  <!-- <hr> -->
</template>
<script>
  export default {}
</script>
