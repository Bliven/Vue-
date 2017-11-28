<template xmlns="http://www.w3.org/1999/html">
  <div class="python">
    <div class="container-fluid">
      <div class="row">
        <div class="course-algorithm-banner" style="display: flex" _v-144f76f9="">
          <div style="width: 1200px; display: flex; margin: 0 auto; padding-top: 140px" _v-144f76f9="">
            <div style="margin: 47px 0 0; text-align: left; width: 670px" _v-144f76f9=""><h1
              style="font-size: 48px; color: #4A4A4A; letter-spacing: 1.99px" _v-144f76f9="">{{coursename}}</h1> <span
              style="display: block; margin-top: 18px; font-size: 24px; color: #4A4A4A; letter-spacing: 0.99px"
              _v-144f76f9="">{{course_slogan}}</span>
              <ul style="padding: 0; margin: 72px 0 0; display: flex; align-items: center" _v-144f76f9="">
                <li class="algorithm-detail-item" style="padding: 0 20px 0 0" _v-144f76f9=""> 难度：{{course_level}} </li>
                <li style="width: 1px; height: 14px; border-left: 1px solid #979797" _v-144f76f9=""></li>
                <li class="algorithm-detail-item" _v-144f76f9=""> 时长：{{hours}}小时 </li>
                <li style="width: 1px; height: 14px; border-left: 1px solid #979797" _v-144f76f9=""></li>
                <li class="algorithm-detail-item" _v-144f76f9=""> 学习人数：220人 </li>
                <li style="width: 1px; height: 14px; border-left: 1px solid #979797" _v-144f76f9=""></li>
                <li class="algorithm-detail-item" style="border-right: none" _v-144f76f9="">
                  <div style="display: flex; align-items: center" _v-144f76f9=""><span _v-144f76f9="">评分10.0</span>
                    <div class="atar_Show" style="margin-left: 23px" _v-144f76f9=""><p class="course-evaluation-score"
                                                                                       _v-144f76f9=""
                                                                                       style="width: 80px;"></p> <span
                      _v-144f76f9=""></span></div>
                  </div>
                </li>
              </ul>
            </div>
            <div style="margin-left: auto; margin-right: -55px" _v-144f76f9="">
            </div>
          </div>
        </div>
        <div class="cont-head" style="box-shadow: 0 1px 0 0 " _v-144f76f9="">
          <ul class="cont-head-wrap" _v-144f76f9="">
            <li  :class="{ 'head-item': head, 'head-active':isactive ,Addactive }" @click="addshow"><a>课程概述</a></li>
            <li  :class="{ 'head-item': head, 'head-active':Addactive}" @click="addshow"><a>课程章节</a></li>
            <li :class="{ 'head-item': head, 'head-active':Addactive}" @click="addshow"><a>用户评价</a></li>
            <li :class="{ 'head-item': head, 'head-active':Addactive}" @click="addshow"><a>常见问题</a></li>
          </ul>
        </div>
      </div>
    </div>
       <overview :brief="brief" v-show="isshow"></overview>
  </div>

</template>

<script>
  import overview from "../components/course_overview/overview.vue"
  export default {
    name:"python",
    components:{
      overview
    },
    data() {
      return {
        msg: '人生苦短,我用python!',
        arr: [],
        coursename: "",
        course_level: "",
        hours: "",
        course_slogan: "",
        course_id:"",
        head:true,
        isactive:true,
        Addactive:false,
        isshow:true,
        brief:"",

      }
    },
    mounted: function () {
      this.showlist()
    },
    methods: {
      showlist: function () {
        var url = "http://127.0.0.1:8000/api/v1/course/" + this.$route.params.id
        console.log(url)
        var self = this;
        this.axios.get(url, {
          headers: {"Content-Type": "application/json"},
        }).then(function (response) {
          var arr = response.data.data;
          console.log(arr.course_id)
          self.course_slogan = arr.course_slogan;
          self.coursename = arr.name;
          self.course_level = arr.course_level;
          self.hours = arr.hours;
          self.course_id=arr.course_id
          self.brief=arr.course_brief
//          self.$store.commit("addbrief",self.brief)
        }).catch(function (err) {
        })
      },
      addshow: function () {
        if (this.isshow){
          this.isshow=false

        }
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
  .head-active{
    border-bottom: 2px solid #78c63f;

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
