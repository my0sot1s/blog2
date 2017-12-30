<template>
  <!--<loader v-if="loader" style="display: block;"></loader>-->
  <div style="margin-top: 10px;min-height: 2000px">
    <span class="create_pen">Pin Note<span> &#9998;</span></span>
    <div class="form_pin">
      <input type="text"
             v-model="title"
             placeholder="Title..">
      <textarea v-model="content"
                placeholder="Content..."
                cols="60" rows="10"></textarea>
      <button @click="saveNote">Save Note</button>

    </div>
    <div :id="item.id" class="myDiv" v-for="(item,key) in data" :key="key">
      <div :id="`${item.id}header`" class="myDivHeader">
        {{item.title}} - {{new Date(item.created).toISOString().slice(0, 10).replace(/-/g, "-")}} <span> &#9998;</span>
        <span @click="popupDelete(item.id)"> &#10005;</span>
      </div>
      <p v-html="item.content"></p>
      <!--<div class="myDivFoot">Click here to delete <span @click="popupDelete(item.id)"> &#10005;</span></div>-->
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import Loader from './commons/Loader.vue'
  export default{
    data: function () {
      return {
        header: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: [],
        title: '',
        content: '',
        loader: true
      }
    },
    components: {Loader},
    methods: {
      dragElement: (elmnt, po1, po2) => {
        var pos1 = po1, pos2 = po2, pos3 = 20, pos4 = 220
        if (document.getElementById(elmnt.id + 'header')) {
          // set to default
          elmnt.style.top = (elmnt.offsetTop + pos2) + 'px'
          elmnt.style.left = (elmnt.offsetLeft + pos1) + 'px'
          document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown
        } else {
          elmnt.onmousedown = dragMouseDown
        }

        function dragMouseDown (e) {
          e = e || window.event
          // get the mouse cursor position at startup:
          pos3 = e.clientX
          pos4 = e.clientY
          document.onmouseup = closeDragElement
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag
        }

        function elementDrag (e) {
          e = e || window.event
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX
          pos2 = pos4 - e.clientY
          pos3 = e.clientX
          pos4 = e.clientY
          // set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + 'px'
          elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px'
        }

        function closeDragElement () {
          document.onmouseup = null
          document.onmousemove = null
        }
      },
      saveNote: function () {
        if (this.title && this.content) {
          axios.post(`https://kutekiu.herokuapp.com/api/Pin/createNewPin`,
            `title=${encodeURIComponent(this.title)}&content=${encodeURIComponent(this.content)}`,
            {
              header: this.header
            })
            .then(({data}) => {
              this.data.unshift(data.data)
            })
        } else {
          alert(`Thieu!!`)
        }
      },
      popupDelete: function (id) {
        let conf = confirm(`Delete??`)
        if (conf) {
          axios.delete(`https://kutekiu.herokuapp.com/api/Pin/deletePin`, {
            header: this.header,
            data: `id=${encodeURIComponent(id)}`
          })
            .then(() => {
              this.data.map((val, index) => {
                if (val.id === id) {
                  this.data.slice(index, 1)
                }
              })
            })
        }
      }
    },
    created: function () {
      axios.get(`https://kutekiu.herokuapp.com/api/Pin/getPin`)
        .then(({data}) => {
          this.data = data.data
        })
        .then(() => {
          this.data.map((val, index) => {
            var n = Math.floor(index / 2)
            if (index % 2 === 0)
              this.dragElement(document.getElementById((val.id)), 200, -250 + (375 * n))
            else {
              this.dragElement(document.getElementById((val.id)), 200 + 400, -250 + (375 * n))
            }
          })
        })
    }
  }
</script>

<style scoped>
  .form_pin {
    max-height: 500px;
    max-width: 200px;
    display: block;
  }

  .form_pin input[type=text] {
    padding: 5px;
    margin-top: 20px;
    margin-bottom: 10px;
    width: 200px;
  }

  .form_pin textarea {
    padding: 5px;
    max-width: 200px;
    resize: none;
    border: none;
  }

  .form_pin button {
    padding: 10px;
    color: #eeeeee;
    background: #e74c3c;
  }

  .create_pen {
    padding: 10px;
    z-index: 10;
    background-color: #2196F3;
    color: #fff;
    cursor: pointer;
    margin-top: 30px;
  }

  /*#mydiv {*/
  /*position: absolute;*/
  /*z-index: 9;*/
  /*background-color: #f1f1f1;*/
  /*text-align: center;*/
  /*max-width: 300px;*/
  /*max-height: 400px;*/
  /*border: 1px solid #d3d3d3;*/
  /*overflow: auto;*/
  /*}  */
  .myDiv {
    position: absolute;
    z-index: 9;
    background-color: #f1f1f1;
    text-align: center;
    /*min-width: 350px;*/
    width: fit-content;
    max-height: 375px;
    border: 1px solid #d3d3d3;
    overflow: auto;
    margin-right: 10px;
  }

  .myDivHeader {
    padding: 5px;
    cursor: move;
    z-index: 10;
    background-color: #2196F3;
    color: #fff;
  }

  /*#mydivheader {*/
  /*padding: 10px;*/
  /*cursor: move;*/
  /*z-index: 10;*/
  /*background-color: #2196F3;*/
  /*color: #fff;*/
  /*}*/

  /*#mydivfoot {*/
  /*padding: 10px;*/
  /*z-index: 10;*/
  /*background-color: #e74c3c;*/
  /*color: #fff;*/
  /*}*/
  .myDivFoot {
    padding: 10px;
    z-index: 10;
    background-color: #e74c3c;
    color: #fff;
  }
</style>
