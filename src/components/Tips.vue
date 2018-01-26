<template>
  <div v-if="isShowTips"
       class="tips-model btn-danger"
       v-bind:style="{ height: height + 'px', overflow: 'hidden' }"
  >
    <div class="icon">!</div><span>{{message}}</span>
    <div class="progress">
      <transition name="fade">
        <div class="inner"></div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Tips',
    data: function () {
      return {
        message: '服务器错误',
        isShowTips: true,
        time: new Date().getTime(),
        height: 0
      }
    },
    props:['tips','isShow'],
    created: function () {
        this.changeState();
        setTimeout(()=>{
            this.height = 50;
        },3000)
    },
    mounted: function () {

    },
    beforeUpdate: function () {

        // 取消this.time该表的影响
        if(new Date().getTime() - this.time < 3000){
            return
        }

        if(this.tips && this.time && (this.tips.time - this.time > 3100)){
            this.isShowTips = this.tips.isShow;
            this.changeState();
            this.time = new Date().getTime();
        }

    },
    upDated: function () {

    },
    beforeDestroy: function () {
      this.clearTimer();
    },
    methods: {
        clearTimer(){
          this.timer && clearTimeout(this.timer);
        },
        changeState(){
          this.clearTimer();
          this.timer = setTimeout(() => {
            this.closeTips();
          },3000)
        },
        closeTips(){
          this.isShowTips = false
        }
    }
  }
</script>

<style>
  .active{
    height: 0;
    overflow: hidden;
  }
  .tips-model{
    position: fixed;
    left: 50%;
    top: 10%;
    transform: translate(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 50px;
    background: red;
    color: white;
  }
  .btn-success {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
  }

  .btn-success:hover {
    color: #fff;
    background-color: #218838;
    border-color: #1e7e34;
  }

  .btn-success:focus, .btn-success.focus {
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
  }


  .btn-warning {
    color: #212529;
    background-color: #ffc107;
    border-color: #ffc107;
  }

  .btn-warning:hover {
    color: #212529;
    background-color: #e0a800;
    border-color: #d39e00;
  }

  .btn-warning:focus, .btn-warning.focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
  }


  .btn-danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #c82333;
    border-color: #bd2130;
  }

  .btn-danger:focus, .btn-danger.focus {
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
  }

  .icon{
    position: absolute;
    width: 50px;
    height: 50px;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff3300;
    box-sizing: border-box;
  }
  .progress{
    width: 400px;
    height: 4px;
    background: #555555;
    position: absolute;
    left: 0;
    top: 0;
  }
  .inner{
    position: absolute;
    left: 0;
    top: 0;
    animation: widthChange 3s;
    animation-timing-function: linear;
    width: 400px;
    height: 4px;
    background: green;
  }
  @keyframes widthChange
  {
    from {width: 400px;}
    to {width: 0;}
  }
</style>
