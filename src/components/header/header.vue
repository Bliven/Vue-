<template>
  <div id="app"style="width: 100%">
    <nav class="navbar navbar-default"style="width: 100%">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header " style="height: 80px;line-height: 80px;overflow:hidden;padding-right:80px">
      <img src="/src/assets/wolf-logo.jpg" style="width: 50px;height: 80px;">
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><router-link to="/python" >python <span class="sr-only">(current)</span></router-link></li>
        <li><router-link to="/linux" >linux</router-link></li>
        <li><router-link to="" >GO语言</router-link></li>
        <li><router-link to="" >云计算</router-link></li>
        <li><router-link to="" >大数据</router-link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li v-if="this.$store.state.username"><a href="#">欢迎您！{{this.$store.state.username}}</a></li>
        <li v-else><router-link to="/login">登录</router-link></li>
        <!--<li><a href="#">注册</a></li>-->
        <li><a href="#" @click="logout">注销</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>



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
    mounted: function () {
      console.log(this.$store.state.username),
        console.log(this.$store.state.token)
    },
    methods:{
      logout:function () {
        this.$store.commit("clearToken")
      }
    }



  }

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
