<template>
  <div id="app">
    <van-pull-refresh
      v-model="isLoading"
      :head-height="80"
      @refresh="onRefresh"
      v-if="!isIos"
       style="padding-left: 5px; padding-right: 5px"
    >
      <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
      <template #pulling="props">
        <img
          class="doge"
          src="https://img01.yzcdn.cn/vant/doge.png"
          :style="{ transform: `scale(${props.distance / 80})` }"
        />
      </template>

      <!-- 释放提示 -->
      <template #loosing>
        <img class="doge" src="https://img01.yzcdn.cn/vant/doge.png" />
      </template>

      <!-- 加载提示 -->
      <template #loading>
        <img class="doge" src="https://img01.yzcdn.cn/vant/doge-fire.jpg" />
      </template>
      <!-- <p>刷新次数: {{ count }}</p> -->
      <div style="height: 100%">
        <follow-content />
      </div>
    </van-pull-refresh>
    <div style="padding-left: 5px; padding-right: 5px" v-if="isIos" >
      <follow-content />
    </div>
  </div>
</template>

<script>
import FollowContent from "@/components/Content/followContent"

export default {
  name: "Follow", //关注页组件
  components: {
    FollowContent,
  },
  data() {
    return {
      count: 0,
      isLoading: false,
      isIos: false,
    };
  },
  created() {
    //ios防止页面意外滚动方案待研究
    let u = navigator.userAgent;
    if (u.indexOf("iPhone") > -1) {
      this.isIos = true;
    } else {
      this.isIos = false;
    }
  },  
  methods: {
    onRefresh() {
      if (!this.isIos) {
        setTimeout(() => {
          //this.$toast('刷新成功');
          this.isLoading = false;
          this.count++;
        }, 500);
      }
    },
  },
};
</script>

<style scoped>
.doge {
  width: 140px;
  height: 72px;
  margin-top: 8px;
  border-radius: 4px;
}
</style>