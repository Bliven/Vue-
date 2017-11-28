import Vue from "vue"
import Vuex from "vuex"
import cookie from "vue-cookies"

Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    username:cookie.get("user"),
    token:cookie.get("tk"),
    brief:"",
  },

  mutations : {
  saveToken:function (state,token_dict) {
    state.username=token_dict["user"]
    cookie.set("tk",token_dict["tk"],"20min")
    cookie.set("user",token_dict["user"],"20min")
  },
    clearToken:function (state) {
      state.username=null
      cookie.remove("user")
       cookie.remove("token")
    },
    addbrief:function (state,brief) {
      state.brief=brief
    }
}})
