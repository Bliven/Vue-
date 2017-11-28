<template>
  <div id="app"style="width: 100%">
    <heads></heads>
    <router-view/>
    <!--<router-view/>-->


  </div>
</template>

<script>
  import heads from "../src/components/header/header.vue"
  import overview from "../src/components/course_overview/overview.vue"
  export default {
    components:{
      heads,
      overview,
    },
    name: 'app',
//    data() {
//      return {
//        login:"登录",
//      }

    }
//    mounted: function () {
//      console.log(this.$store.state.username),
//        console.log(this.$store.state.token)
//    },
//    methods:{
//      logout:function () {
//        this.$store.commit("clearToken")
//      }
//    }



//  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*font-family: 微软雅黑;*/
    text-align: center;
    color: black;
    /*margin-top: 20px;*/
    width: 1300px;

  }

  #app a {
    height: 80px;
    line-height: 50px;
    text-decoration: none;
  }

  #app li {

  }
  img{
    width: 1138px;

  }
</style>
