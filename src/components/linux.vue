<template>
  <div class="hello">

  </div>
</template>

<script>
export default {
  name: 'linux_list',
  data () {
    return {
    }
  },
  mounted:function () {
    this.showlist()
  },
  methods:{
    showlist:function () {
    var url="api/comm.json";
    var self=this;
    this.axios.get(url).then(function (response) {
      console.log(response);
    }).catch(function (err) {
    })
    },
    push:function () {

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
</style>
