<template>
  <div id="app"style="width: 100%">
      <div class="cont-head" style="box-shadow: 0 1px 0 0 " _v-144f76f9="">
          <ul class="cont-head-wrap" _v-144f76f9="">
            <li class="head-item head-active"><router-link :to="{'path':'/course_overview/'+ course_id }">课程概述</router-link></li>
            <li  class="head-item"><router-link to="">课程章节</router-link></li>
            <li class="head-item"><router-link to="">用户评价</router-link></li>
            <li class="head-item"><router-link to="">常见问题</router-link></li>
          </ul>
        </div>
    <router-view/>
  </div>
</template>

<script>


  export default {
    name: 'app',
    data() {
      return {
        login:"登录",
      }
    },
//    mounted: function () {
//      console.log(this.$store.state.username),
//        console.log(this.$store.state.token)
//    },
//    methods:{
//      logout:function () {
//        this.$store.commit("clearToken")
//      }
//    }



  }

</script>

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
    color: black;
  }

  th {
    text-align: center;
  }

  img {
    margin-right: 1000px;
    width: 80px;
    height: 80px;
  }
  .head-item{
        height: 80px;
    line-height: 80px;
    font-size: 16px;
    color: #555;
    cursor: pointer;
  }

  .cont-head
  {
        width: 100%;
    height: 80px;
    background: #fafbfc;

  }.cont-head-wrap{
        width: 590px;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
     }

</style>
