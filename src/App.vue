<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <div id="footer">
      <ul class="clearfix">
        <li>
          <router-link to="/">
            <i class="iconfont icon-shouye i_col"></i>
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <router-link to="/producte/productIntroduction">
            <i class="iconfont icon-ziyuan i_col"></i>
            <p>产品介绍</p>
          </router-link>
        </li>
        <li>
          <router-link to="/news/newsIntroduction">
            <i class="iconfont icon-xinwen-dangqian i_col"></i>
            <p>新闻活动</p>
          </router-link>
        </li>
        <li>
          <router-link to="/contact/contactus">
            <i class="iconfont icon-wo1 i_col"></i>
            <p>联系我们</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import "../static/icon/base.css";
export default {
  name: 'App'
}
</script>

<style>
  html,body {
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
  height: 100%;
}
</style>
