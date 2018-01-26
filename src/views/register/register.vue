<template>
  <div class="wrapper center login-wrap color-white flex-direction">
    <h2>电商后台管理系统</h2>
    <form ref="loginForm" :model="loginForm" v-bind:loginRules="loginRules" class="login-container bg-whire margin-top20">

      <InputComponent
        :value="loginForm.userName"
        placeholder="用户名"
        type="text"
        v-on:blur="blurUserEvent"
        v-on:input="inputUserEvent"
      />
      <p v-if="userTips" class="tips">请检查您的用户名是否正确输入</p>

      <InputComponent
        :value="loginForm.passWord"
        placeholder="密码"
        type="password"
        v-on:blur="blurPassEvent"
        v-on:input="inputPassEvent"
      />
      <p v-if="pswTips" class="tips">请检查您的密码是否正确输入</p>

      <InputComponent
        :value="loginForm.confirm"
        placeholder="确认密码"
        type="password"
        v-on:blur="blurConfirmEvent"
        v-on:input="inputConfirmEvent"
      />
      <p v-if="confirmTips" class="tips">请您确保您的两次密码输入都是一致的</p>

      <button @click="formSubmit" type="button" class="pure-button input-box margin-top10">注册</button>
      <p>
        <a href="javascript:;" @click="goRigister">去登录</a>
      </p>
    </form>
    <Tips v-bind:tips="tipsConfig"></Tips>

  </div>
</template>

<script>
  import { isvalidUsername, isvalidPass } from '../../utils/validate'
  import { LoginByEmail } from '../../services/userService'
  import { isEqual } from '../../utils/difFunction'

  import InputComponent from '../../components/inputComponent.vue'
  import Tips from '../../components/Tips.vue';
  export default {
    name:'Login',
    components: {
      Tips,
      InputComponent
    },
    data: function () {
      return {
        mytestValue:'',
        userTips: false,
        pswTips: false,
        confirmTips: false,
        loginForm: {
          userName: '',
          passWord: '',
          confirm: ''
        },
        loginRules: {
          username: [{ required: true, trigger: 'blur', validator: isvalidUsername }],
          password: [{ required: true, trigger: 'blur', validator: isvalidPass }]
        },
        tipsConfig: {
          isShow: false,
          time: new Date().getTime()
        }
      }
    },
    created: function () {

    },
    methods:{
      myblur(value){
          console.log(value);
      },
      myinput(value){
          console.log(value)
      },


      /**
       * 获取userName的值
       *
       */
      inputUserEvent(e){
        this.loginForm.userName = e.target.value
      },

       /**
       * 判断用户名是否合法
       * @param e
       */
      blurUserEvent(e){
        const username = e.target.value;
        if(!isvalidUsername(username)){
          this.userTips = true
        }else {
          this.userTips = false
        }
      },
      /**
       * 获取passWord的值
       */
      inputPassEvent(e){
        this.loginForm.passWord = e.target.value
      },
      /**
       * 判断密码是否符合规范
       * @param e
       */
      blurPassEvent(e){
        const password = e.target.value;
        if(!isvalidPass(password)){
          this.pswTips = true
        }else {
          this.pswTips = false
        }
      },
      /**
       * 获取passWord的值
       */
      inputConfirmEvent(e){
        this.loginForm.passWord = e.target.value
      },
      /**
       * 判断确认密码是否符合规范
       * @param e
       */
      blurConfirmEvent(e){
        const confirm = e.target.value;
        if(!isvalidPass(confirm) && !isEqual(this.loginForm.passWord,this.loginForm.confirm)){
          this.confirmTips = true
        }else {
          this.confirmTips = false
        }
      },
      configTips(){
        this.tipsConfig = {
          isShow: true,
          time: new Date().getTime()
        }
      },
      formSubmit(){
        let _this = this;

        if(this.loginForm.userName == ''){
          this.userTips = true;
          return
        }
        if(!this.loginForm.passWord){
          this.pswTips = true;
          return
        }
        if(!this.pswTips && !this.userTips){
          let email = this.loginForm.userName,
            password = this.loginForm.passWord;
          LoginByEmail(email, password)
            .then(function (res) {
              console.log(res);
            })
            .catch(function (err) {
              console.log(err);
              _this.configTips()
            })
        }
      },
      goRigister(){
        this.$router.replace('./')
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .color-white{
    color: white;
  }
  .flex-direction{
    flex-direction: column;
  }
  .input-box{
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #cccccc;
    input{
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border: none;
      outline: none;
      border-radius: 5px;
      padding-left: 5px;
    }
  }
  .login-container{
    padding: 20px;
  }

  .bg-whire{
    background: white;
  }
</style>
