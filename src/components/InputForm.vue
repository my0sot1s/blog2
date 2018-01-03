<template>
  <div>
    <div class="content_header">
      <h1> Input <span><div
        class="th_hr"></div></span></h1>
    </div>
    <p class="form_tile">Nhập dữ liệu cho blog</p>
    <div id="pell"></div>
    <button @click="" class="saveBtn"> Save </button>
  </div>
</template>
<script>
  import { ensureHTTP, init } from 'pell'
  export default{
    methods: {
      initEditor: function () {
        init({
          // <HTMLElement>, required
          element: document.getElementById('pell'),

          // <Function>, required
          // Use the output html, triggered by element's `oninput` event
          onChange: html => console.log(html),

          // <boolean>, optional, default = false
          // Outputs <span style="font-weight: bold;"></span> instead of <b></b>
          styleWithCSS: false,

          // <Array[string | Object]>, string if overwriting, object if customizing/creating
          // action.name<string> (only required if overwriting)
          // action.icon<string> (optional if overwriting, required if custom action)
          // action.title<string> (optional)
          // action.result<Function> (required)
          // Specify the actions you specifically want (in order)
          actions: [
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'heading1',
            'heading2',
            'paragraph',
            'quote',
            'olist',
            'ulist',
            'code',
            'line',
            'link',
            'image'
          ],

          // classes<Array[string]> (optional)
          // Choose your custom class names
          classes: {
            actionbar: 'pell-actionbar',
            button: 'pell-button',
            content: 'pell-content'
          }
        })
      }
    },
    mounted: function () {
      this.initEditor()
    }
  }
</script>
<style>
  #pell {
    position: absolute;
    top: 15%;
    left: 5%;
    height: 70%;
    width: 90%;
  }

  .form_tile {
    position: absolute;
    top: 10%;
  }

  .pell-content {
    height: 90%;
    background: #fff;
    opacity: 0.85;
  }

  .saveBtn {
    padding: 10px;
    min-width: 85px;
    background: #48c6ef;
    color: #fff;
    position: absolute;
    top: 90%;
    left: 85%;
  }

</style>
