<template>
  <div class="login">
    <div class="container">
       <div class="row">
                <div class="col-md-offset-4 col-md-4" style="height: 320px;margin-top: 80px">
                        <span class="heading">用户登录</span>
                        <div class="form-group">
                            <input type="text" class="form-control" id="inputEmail3" placeholder="用户名" v-model="user">
                            <i class="fa fa-user"></i>
                        </div>
                        <div class="form-group help">
                            <input type="password" class="form-control" id="inputPassword3" placeholder="密  码" v-model="pwd">
                            <i class="fa fa-lock"></i>
                            <a href="#" class="fa fa-question-circle"></a>
                        </div>
                        <div class="form-group" >
                            <button type="submit" class="btn btn-default" v-on:click="login">登录</button>
                        </div>

                </div>
            </div>


      </div>


    </div>

</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      user: '',
      pwd:"",
    }
  },
  methods:{
    login:function () {
                var url="http://127.0.0.1:8000/api/v1/auth/"
                var self=this
                this.axios.post(url,{
                    user:this.user,
                    pwd:this.pwd,
                },{
                    headers:{"Content-Type":"application/json"}
                }).then(function (response) {
                        console.log(response.data["code"])
                        console.log(response.data["token"])
                        console.log(response.data["user"])
                    if (response.data["code"] == 1001){
                         var  token=response.data["token"]
                        var token_dict={"user":response.data["user"],"tk":token}
                        console.log(token_dict)
                     self.$store.commit("saveToken",token_dict)
                      self.$router.push({ path: '/',})

                    }
//                    console.log(response.data)
                }).catch(function (err) {

                })
            }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  h3{
    margin-left: 800px;
  }
</style>
