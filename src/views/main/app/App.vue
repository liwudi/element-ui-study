<template>
  <div class="wrapper flex-box">
    <div class="flex1">
      <h2 class="center">表单验证</h2>
      <div class="center padding">
        <el-form :model="formData" ref="myForm" :rules="rules" label-position="left" label-width="80px" size="medium">

          <el-form-item label="用户名" prop="username">
            <el-input v-model="formData.username"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input v-model="formData.password"></el-input>
          </el-form-item>

          <el-form-item label="确认密码" prop="confirm">
            <el-input v-model="formData.confirm"></el-input>
          </el-form-item>

          <el-form-item label="年龄" prop="age">
            <el-input v-model="formData.age"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button class="margin-left20" type="primary" @click="submitForm('myForm')">注册</el-button>
            <el-button class="margin-left40" @click="resetForm('myForm')">清空</el-button>
          </el-form-item>

        </el-form>
      </div>
      <h2 class="center">dialog</h2>
      <el-button type="text" @click="isVisible = true">点击打开 Dialog</el-button>
      <el-dialog
        title="提示"
        :visible.sync="isVisible"
        width="30%"
      >
        <span>这是一段信息</span>
        <span slot="footer">
          <el-button @click="isVisible = false">取消</el-button>
          <el-button type="primary" @click="isVisible = false">确认</el-button>
        </span>
      </el-dialog>

    </div>


    <!--第二部分-->
    <div class="flex1">
      <h2 class="center">Table 表格</h2>
      <el-table
        :data="tableData"
        style="width: 100%"
        height="200"
      >
        <el-table-column fixed width="120" label="日期" prop="date"></el-table-column>
        <el-table-column width="120" label="姓名" prop="name"></el-table-column>
        <el-table-column width="360" label="地址" prop="address"></el-table-column>
      </el-table>

      <div>
        <h2 class="center">Collapse 折叠面板</h2>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="一致性 Consistency" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item title="效率 Efficiency" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item title="可控 Controllability" name="4">
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
        </el-collapse>
      </div>

    </div>
    <div class="flex1">
      <h2 class="center">Carousel 走马灯</h2>
      <el-carousel height="150px">
        <el-carousel-item v-for="item in arr" :key="item">
          <h3>{{item}}</h3>
        </el-carousel-item>
      </el-carousel>
      <h1>{{count}}</h1>
      <el-button @click="addEvent" type="success">add</el-button>
      <el-button @click="decEvent" type="warning">dec</el-button>
    </div>
  </div>
</template>

<script>
  //import * as Element from 'element-ui'
  import ElForm from "../../../../node_modules/element-ui/packages/form/src/form";
  import ElFormItem from "../../../../node_modules/element-ui/packages/form/src/form-item";
  import ElInput from "../../../../node_modules/element-ui/packages/input/src/input";
  import ElCarousel from "../../../../node_modules/element-ui/packages/carousel/src/main";
  import ElCarouselItem from "../../../../node_modules/element-ui/packages/carousel/src/item";
  import ElCollapse from "../../../../node_modules/element-ui/packages/collapse/src/collapse";
  import ElDialog from "../../../../node_modules/element-ui/packages/dialog/src/component";
  import ElButton from "../../../../node_modules/element-ui/packages/button/src/button";
  //import ElTable from "../../../../node_modules/element-ui/packages/table/src/table";

  export default{
    components: {
      //ElTable,
      ElButton,
      ElDialog,
      ElCollapse,
      ElCarouselItem,
      ElCarousel,
      ElInput,
      ElFormItem,
      ElForm},
    data: function () {
        var checkAge = function (rule, value, callback) {
          if(!value){
              return callback(new Error('年龄不为空'))
          }
          setTimeout(() => {
            if (!Number.isInteger(value)) {
              callback(new Error('请输入数字值'));
            } else {
              if (value < 18) {
                callback(new Error('必须年满18岁'));
              } else {
                callback();
              }
            }
          }, 1000);
        };
        return {
          isVisible: false,
          activeNames: ['1'],
          arr: [1,2,3,4],
          formData: {
            username: '',
            password: '',
            confirm: '',
            age: ''
          },
          rules: {
            username: [
              { required: true, message: '请输入用户名', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            password: [
              { required: true, message: '密码不能为空', trigger: 'blur'},
              { min: 6, max: 10 ,message: '长度在 6 到 10 个字符', trigger: 'blur'}
            ],
            confirm: [
              { required: true, message: '密码不能为空', trigger: 'blur'},
              { min: 6, max: 10 ,message: '长度在 6 到 10 个字符', trigger: 'blur'}
            ],
            age: [
              { validator: checkAge, trigger: 'blur'}
            ]
          },
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 路'
          },{
            date: '2017-11-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 路'
          },{
            date: '2018-01-20',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 路'
          }]
        }
    },
    computed: {
        count: function () {
          return this.$store.state.acount
        }
    },
    methods: {
      addEvent(){
        console.log(this.$store);
        this.$store.commit('ADD')
      },
      decEvent(){
        this.$store.commit('DEC')
      },
      handleChange(val) {
        console.log(val);
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName){
        this.$refs[formName].resetFields();
      }
    }
  }
</script>






<style rel="stylesheet/scss" lang="scss" scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
