<template>
  <div class="wrapper">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>我是order界面</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
    <div class="flex-box">
      <h3>icons的使用</h3>
      <el-row class="flex1 margin-left10">
        <el-col :span="1"><i class="el-icon-edit"></i></el-col>
        <el-col :span="1"><i class="el-icon-share"></i></el-col>
        <el-col :span="1"><i class="el-icon-delete"></i></el-col>
        <el-col :span="1"><i class="el-icon-search"></i></el-col>
        <el-col :span="1"><el-button type="success" class="el-icon-search">搜索</el-button></el-col>
      </el-row>
    </div>
    <div class="flex-box">
      <h3>各种button</h3>
      <el-row class="flex1 margin-left10">
        <el-col :span="3"><el-button>默认按钮</el-button></el-col>
        <el-col :span="3"><el-button type="primary">主要按钮</el-button></el-col>
        <el-col :span="3"><el-button type="success">成功按钮</el-button></el-col>
        <el-col :span="3"><el-button type="warning">警告按钮</el-button></el-col>
        <el-col :span="3"><el-button plain>默认按钮</el-button></el-col>
        <el-col :span="3"><el-button round>默认按钮</el-button></el-col>
      </el-row>
    </div>

    <div class="flex-box">
      <h3>form表单</h3>
      <el-row class="flex1 margin-left10">
        <el-col :span="4">
          1、
          <el-radio v-model="radio" label="1">单选</el-radio>
          <el-radio v-model="radio" label="2">备选</el-radio>
        </el-col>
        <el-col :span="4">
          2、
          <el-radio disabled v-model="radio">禁用</el-radio>
        </el-col>
        <el-col :span="6">
          3、
          <el-radio-group v-model="radioValue">
            <el-radio :label="3">备选</el-radio>
            <el-radio :label="6">备选</el-radio>
            <el-radio :label="9">备选</el-radio>
          </el-radio-group>
        </el-col>
        <el-col :span="6">
          <el-radio-group v-model="radioValue2">
            <el-radio-button :label="3">备选</el-radio-button>
            <el-radio-button :label="6">备选</el-radio-button>
            <el-radio-button :label="9">备选</el-radio-button>
          </el-radio-group>
        </el-col>
      </el-row>
    </div>

    <div>
      <h3>Select</h3>
      <el-select v-model="baseValue">
        <el-option
          v-for="item in options"
          :value="item.value"
          :label="item.label"
          :key="item.value"
        ></el-option>
      </el-select>
    </div>
    <h1>{{countaaa}}</h1>
  </div>
</template>






<script>
  import ElRadio from "../../../../node_modules/element-ui/packages/radio/src/radio";
  import ElRadioGroup from "../../../../node_modules/element-ui/packages/radio/src/radio-group";
  import ElRadioButton from "../../../../node_modules/element-ui/packages/radio/src/radio-button";
  export default {
    components: {
      ElRadioButton,
      ElRadioGroup,
      ElRadio
    },
    data: function () {
      return {
        radio: '1',
        radioValue: 3,
        radioValue2: 6,
        options: [{
          value: '1',
          label: '中国人'
        },{
          value: '2',
          label: '美国人'
        },{
          value: '3',
          label: '德国人'
        }],
        baseValue:'1'
      }
    },
    computed: {
      countaaa: function () {
        return this.$store.state.acount
      }
    },
  }
</script>






<style rel="stylesheet/scss" lang="scss" scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
