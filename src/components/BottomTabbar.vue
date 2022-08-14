<template>
  <div id="app">
    <van-tabbar v-model="active" :safe-area-inset-bottom="true" @change="onChange">
      <van-tabbar-item replace to="/home" icon="wap-home">
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/shopping" icon="shop" dot>
        <span>购物</span>
      </van-tabbar-item>
      <van-tabbar-item>
        <template slot-scope="">
          <van-button
            icon="scan"
            style="
              margin-bottom: 5px;
              height: 40px;
              width: 50px;
              border-radius: 15px/15px;
            "
            color="linear-gradient(to right, #ff6034, #ee0a24)"
          />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/message" icon="friends" badge="99+">
        <span>消息</span>
      </van-tabbar-item>
      <van-tabbar-item replace to="/setting" icon="setting">
        <span>设置</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "bottomTabbar",
  data() {
    return {
    };
  },
  created(){
    let routeName= this.$route.name;
    if(routeName == "home"){
        this.active = 0;
    }else if(routeName == "shopping"){
        this.active = 1;
    }else if(routeName == "add"){
        this.active = 2;
    }else if(routeName == "message"){
        this.active = 3;
    }else if(routeName == "setting"){
        this.active = 4;
    }
  },
  methods: {
    onChange(index){
    }
  },
};
</script>
<style scoped>
</style>
