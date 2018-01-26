<template>
  <div class="wrapper flex-box flex-column">
    <div class="flex1">
      <router-view></router-view>
    </div>
    <ul class="flex-box nav border">
      <li class="flex1 center"><router-link to="/main/app">首页</router-link></li>
      <li class="flex1 center"><router-link to="/main/shopcar">购物车</router-link></li>
      <li class="flex1 center"><router-link to="/main/order">订单管理</router-link></li>
      <li class="flex1 center"><router-link to="/main/usercenter">个人中心</router-link></li>
    </ul>
  </div>
</template>






<script>
  export default{
      name:'Main'
  }
</script>






<style rel="stylesheet/scss" lang="scss" scoped>
  .nav{
    width: 100%;
    height: 50px;
  }
</style>
