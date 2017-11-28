<template xmlns="http://www.w3.org/1999/html">
  <div class="python container">
    <div style="border-bottom: 1px solid rgba(242,242,242,0.50);float: left">
      <img src="../assets/book.png"style="width:20px; height:24px;display: inline-block" >
      <h3 class="section-tit"  id="0" style="display: inline-block">{{name}}</h3>
    </div>
    <ul v-for="i in arr">
      <li class="project_li" id="1"><h4 class="section-period v-class">{{i.vc_name}}</h4>
        <div class="progress-wrap v-class" style="margin-left: auto"><i style="margin-right: 10px; color: #CCC"
                                                                        class="glyphicon glyphicon-facetime-video"
                                                                        aria-hidden="true"></i>
          <time class="period-time">{{i.vc_time}}</time>
        </div>
      </li>
    </ul>


  </div>
</template>

<script>
  export default {
    name: 'python_list',
    data() {
      return {
        arr: [],
        name: ""
      }
    },
    mounted: function () {

      console.log(this.$route.query.id)
      this.showlist()
    },
    methods: {
      showlist: function () {
        var url = "api/course.json/" + this.$route.query.id;
        console.log(url)
        var self = this;
        this.axios.get(url).then(function (response) {
          self.arr = response.data;
          console.log(self.arr)
          for (var item in self.arr) {
            self.name = self.arr[item].vc_title__v_name
            console.log(self.name)
          }
        }).catch(function (err) {
        })
      },
      push: function () {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
    text-align: left;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    /*display: inline-block;*/
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  th {
    text-align: center;
  }

  img {
    /*margin-right: 1000px;*/
    width: 80px;
    height: 80px;
  }

  .project_li {
    cursor: pointer;
    width: 1200px;
    height: 64px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #fff;
    box-shadow: 0 1px 0 0 #f2f2f2;
    border-bottom: 1px solid #f8f8f8
  }

  .section-tit{
    font-size: 20px;
    color: #78c63f;
    letter-spacing: .32px;
    margin: 0 0 0 26px;
  }
</style>
