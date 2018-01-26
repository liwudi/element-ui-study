<template>
  <div class="input-box margin-top10">
    <input
      v-bind:placeholder = 'placeholder'
      v-bind:value = 'value_'
      v-bind:type = 'type'
      @input = 'inputEvent'
      @blur = 'blurEvent'
      @focus = 'focusEvent'
    />
  </div>
</template>

<script>
  export default {
      name:'InputComponent',
      props: ['placeholder','value','type'],
      data: function () {
          return {
            name:'1234',
            value_: this.value
          }
      },
      methods:{
        inputEvent(e){
          e.target.value && this.$emit('input', e)
        },
        blurEvent(e){
          this.$emit('blur', e)
        },
        focusEvent(e){
          this.$emit('focus', e)
        }
      }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped >
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
</style>
