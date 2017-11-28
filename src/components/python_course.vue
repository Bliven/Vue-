<template xmlns="http://www.w3.org/1999/html">
  <div class="python">
    <img src="../assets/python.jpg" style="width: 80px;height: 80px;display:inline-block;float: left">
    <h2>{{msg}}</h2>
    <div class="container">
      <div class="row">
    <div style="width:350px;margin: 20px;"v-for="item in course_list" :key="item.id"class="col-lg-4">
      <router-link :to="{'path':'/python_detail/'+item.id}" >
        <div style="width:350px; height:238px">
          <div style="width:350px; height:238px; clear: both;overflow: hidden; zoom: 1"><img
            :src=" item.course_img " width="350" height="238" ></div>
        </div>
        <div style="width:350px; height: 284px;  background: #FFFFFF; box-shadow: 0 4px 2px 0 #E9E9E9">
          <div style="width: 281px; text-align: left; margin: 0 auto" >
            <h4 class="course-tit" style="margin: 30px 0 0; color: #000">{{item.name}}</h4>
            <p class="course-dec" style="margin: 15px auto 0; text-align: left">{{item.brief}}</p>
            <span class="course-lever" style="display: block; margin-top: 11px">难度：{{item.level}}</span>
          </div>
        </div>
      </router-link>
    </div>
      </div>
      </div>
  </div>

</template>

<script>
  export default {
    name: 'python_list',
    data() {
      return {
        msg: '人生苦短,我用python!',
        course_list: [],
        name: "",
      }
    },
    mounted: function () {
      this.get_course()
    },
    methods: {
      get_course: function () {
        var url = "http://127.0.0.1:8000/api/v1/course/"
        var self = this;
        this.axios.get(url, {
          headers: {"Content-Type": "application/json"},
        }).then(function (response) {
          var arr = response.data.data;
          self.course_list = arr
          console.log(arr)
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
  color: #333;
  }

  th {
    text-align: center;
  }

  img {
    width: 350px;
    height: 238px;
  }

  .python {
    width: 1500px;
  }

  .course-tit {
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #333;
    letter-spacing: .54px;
    line-height: 25px;
    /*padding-top: 78px;*/
    margin: 0;
  }

  .course-dec {
       font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #4a4a4a;
    letter-spacing: .27px;
    line-height: 25px;
    text-align: center
  }

  .course-lever {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    letter-spacing: .27px;
  }

</style>
