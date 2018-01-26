<template>
  <div id="app" class="center">
    <router-view/>

    <!--全局的封装的一个组件-->
    <Tips></Tips>
  </div>
</template>

<script>
  import * as CommonFilter from './filter/CommonFilter';
  import Tips from './components/Tips.vue';
  import ElButton from "../node_modules/element-ui/packages/button/src/button";

  export default {
    name: 'app',
    components: {
      ElButton,
      Tips
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "./css/common.scss";

</style>
