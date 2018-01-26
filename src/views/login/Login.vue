<template>
  <div class="wrapper center login-wrap color-white flex-direction">
    <h2>电商后台管理系统</h2>
    <form ref="loginForm" :model="loginForm" v-bind:loginRules="loginRules" class="login-container bg-whire margin-top20">

      <div class="input-box margin-top10">
        <input
          v-model.trim = "loginForm.userName"
          name="userName"
          placeholder="用户名"
          @blur="blurUserEvent"
        />
      </div>
      <p v-if="userTips" class="tips">请检查您的用户名是否正确输入</p>
      <div class="input-box margin-top10">
        <input
          v-model.trim = "loginForm.passWord"
          name="passWord"
          placeholder="密码"
          @blur="blurPassEvent"
        />
      </div>
      <p v-if="pswTips" class="tips">请检查您的密码是否正确输入</p>
      <button @click="formSubmit" type="button" class="pure-button input-box margin-top10">登录</button>
      <p>
        <a href="javascript:;" @click="goRigister">去注册</a>
      </p>
    </form>

    <Tips v-bind:tips="tipsConfig"></Tips>

  </div>
</template>

<script>
  import { isvalidUsername, isvalidPass } from '../../utils/validate'
  import { LoginByEmail } from '../../services/userService'

  import Tips from '../../components/Tips.vue';
  export default {
      name:'Register',
      components: {
        Tips
      },
      data: function () {
        return {
            userTips: false,
            pswTips: false,
            loginForm: {
              userName: 'admin',
              passWord: 123456
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
          blurUserEvent(e){
            const username = e.target.value;
            console.log(isvalidUsername(username))
            if(!isvalidUsername(username)){
                this.userTips = true
            }else {
                this.userTips = false
            }
          },
          blurPassEvent(e){
            const password = e.target.value;
            if(!isvalidPass(password)){
              this.pswTips = true
            }else {
              this.pswTips = false
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
                  this.$router.replace('/main')
//                  LoginByEmail(email, password)
//                    .then(function (res) {
//                      console.log(res);
//                    })
//                    .catch(function (err) {
//                      console.log('catcherr',err);
//                      _this.configTips()
//                    })
              }
          },
          goRigister(){
                this.$router.replace('/register')
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
