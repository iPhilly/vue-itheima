<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <mt-header title="导航栏标题">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1" >
        <img slot="icon" src="./assets/logo.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="./assets/logo.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="./assets/logo.png">
        朋友圈
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img slot="icon" src="./assets/logo.png">
        设置
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      selected: "tab1"
    }
  },
  created(){
    this.$ajax('http://127.0.0.1:8080')
      .then(res => {
        console.log(res)
      })
  },
  methods: {
    handleClose() {
      Toast("fuck")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
