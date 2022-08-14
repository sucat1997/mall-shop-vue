<template>
  <div id="app">
    <van-button @click="login">点击登录</van-button>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
        isLogin: false
    }
  },
  created() {
  },    
  methods: {
    login(){
        //登录后跳转首页
        this.$router.push({ name:'home', query:{ token:"123" } })
    }
  },
};
</script>
<style scoped>

</style>
