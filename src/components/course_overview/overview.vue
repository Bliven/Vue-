<template>
  <div class="overview">
    <div class="container">
      <div class="row">
    <div style="width: 1145px; margin: 80px auto 90px" _v-22aca6f5="">
      <div style="display: flex; text-align: left" _v-22aca6f5="">
        <div style="text-align: left" _v-22aca6f5=""><h3 class="sec-item-tit pad" _v-22aca6f5="">课程概述</h3> <em
          style="width: 46px; border-top: 2px solid #78C63F; margin: 18px 0 31px" _v-22aca6f5=""></em>
          <p class="sec-cont-dec finance-cont-right" style="width: 500px; height: 150px; overflow: hidden"
             _v-22aca6f5="">{{brief}} </p></div>
        <div
          style="margin-left: 130px; width: 326px; padding-left: 22px; border-top: 5px solid #84CC39; padding-top: 39px; height: 290px; background: #FFFFFF; box-shadow: 0 4px 8px 0 #E8E8E8; border-radius: 4px"
          _v-22aca6f5=""><span style="font-size: 24px; color: #4A4A4A; letter-spacing: 3.14px; display: block"
                               _v-22aca6f5="">IEEE 2017年编程排名</span> <span
          style="font-size: 18px; color: #4A4A4A; letter-spacing: 2.36px; display: block; margin-top: 14px"
          _v-22aca6f5="">NO.1</span> <span
          style="font-size: 18px; color: #4A4A4A; letter-spacing: 2.36px; display: block; margin-top: 13px"
          _v-22aca6f5="">Python相关职位薪酬</span> <span
          style="font-size: 18px; color: #4A4A4A; letter-spacing: 2.36px; display: block; margin-top: 14px"
          _v-22aca6f5="">80%起薪10K+</span> <span
          style="font-size: 12px; color: #4A4A4A; letter-spacing: 1.57px; display: block; margin-top: 38px"
          _v-22aca6f5="">来自IEEE SPECTRUM和拉勾网的公开数据</span></div>
      </div>
    </div>
  </div>
      </div>
    </div>
</template>

<script>
  export default {
    name:"overview",
    props:["brief"],
    data() {
      return {
//        brief:""
      }
    },
    mounted: function () {
//      this.push()
    },
    methods: {
//      showlist: function () {
//        var Cid =this.$store.state.Cid
//        var url = "http://127.0.0.1:8000/v1/course.json/"+Cid
//        console.log("-----url",Cid)
//        var self = this;
//        this.axios.get(url, {
//          headers: {"Content-Type": "application/json"},
//        }).then(function (response) {
//          var arr = response.data.data;
//          console.log("________AAA",arr)
//          self.brief=arr.brief
//        }).catch(function (err) {
//        })
//      },
//      push: function () {
//        this.brief=this.$store.state.brief
//        console.log(this.brief)
//      }
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
</style>
