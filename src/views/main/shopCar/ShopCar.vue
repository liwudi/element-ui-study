<template>
  <div class="wrapper">
    <div class="wrapper flex-box">
      <div class="flex1">
        <!--<el-cascader-->
          <!--:options="options"-->
          <!--v-model="selectedOptions"-->
          <!--@change="handleChange">-->
        <!--</el-cascader>-->
        <el-time-select
          v-model="value1"
          :picker-options="{
          start:'08:30',
          step:'00:15',
          end:'18:30'
      }"
          placeholder="选择时间"
        ></el-time-select>
        <div>
          <h3>起止时间：</h3>
          <el-time-select
            v-model="start"
            :picker-options="{
          selectableRange:'18:30:00 - 20:30:00'
        }"
            placeholder="选择时间点"
          ></el-time-select>
          <el-time-select
            v-model="end"
            :picker-options="{
          selectableRange:'18:30:00 - 20:30:00'
        }"
            placeholder="选择时间点"
          ></el-time-select>
        </div>
        <div>
          选择日期
          <el-date-picker
            v-model="valueDate"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
        <el-date-picker
          v-model="value1"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
      </div>
      <div class="flex1">

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>

          <el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForm.region">
              <el-option
                label="北京"
                value="beijing"
              ></el-option>
              <el-option
                label="上海"
                value="shanghai"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="活动时间" required>
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
            ></el-date-picker>
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date2"
            ></el-date-picker>
          </el-form-item>

          <el-form-item label="即时配送" prop="delivery">
            <el-switch v-model="ruleForm.delivery"></el-switch>
          </el-form-item>

          <el-form-item label="活动性质" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="特殊资源" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="活动形式" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit(('ruleForm'))">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>

        </el-form>

      </div>
    </div>

  </div>
</template>

<script>
  import ElForm from "../../../../node_modules/element-ui/packages/form/src/form";
  import ElFormItem from "../../../../node_modules/element-ui/packages/form/src/form-item";
  import ElRadio from "../../../../node_modules/element-ui/packages/radio/src/radio";
  import ElSwitch from "../../../../node_modules/element-ui/packages/switch/src/component";
  import ElCheckboxGroup from "../../../../node_modules/element-ui/packages/checkbox/src/checkbox-group";
  import ElCheckbox from "../../../../node_modules/element-ui/packages/checkbox/src/checkbox";
  export default{
    components: {
      ElCheckbox,
      ElCheckboxGroup,
      ElSwitch,
      ElRadio,
      ElFormItem,
      ElForm,
    },
    name: 'ShopCar',
    data: function () {
      return {
        labelPosition: 'left',
        ruleForm:{
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        },
        valueDate: new Date(),
        start:'',
        end:'',
        value1:'',
        selectedOptions:'',
        options: [{
          value:'1',
          label:'components',
          children: [{
            label:'input'
          },{
            label:'swiper'
          }]
        },{
          value:'1',
          label:'views'
        },{
          value:'1',
          label:'actions'
        }]
      }
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      onSubmit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>


<style rel="stylesheet/scss" lang="scss" scoped>

</style>
