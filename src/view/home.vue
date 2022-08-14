<template>
  <div id="app">
    <van-popup
      v-model="show"
      position="left"
      duration="0.2"
      :transition-appear="true"
      round
      :style="{ width: '70%', height: '100%' }"
    >
      <van-cell is-link>展示弹出层</van-cell>
      <van-cell is-link>展示弹出层</van-cell>
      <van-cell is-link>展示弹出层</van-cell>
      <van-cell is-link>展示弹出层</van-cell>
      <van-cell is-link>展示弹出层</van-cell>
    </van-popup>

    <div>
      <!-- 顶部导航栏 -->
      <van-tabs
        v-model="activeName"
        :animated="true"
        duration="0.5"
        sticky
        swipeable
      >
        <template slot="nav-left">
          <van-icon
            class="v-tab-left"
            name="https://b.yzcdn.cn/vant/icon-demo-1126.png"
            size="28"
            @click="openLeftPopup"
          />
        </template>
        <van-tab title="关注" name="follow"><follow /></van-tab>
        <van-tab title="发现" name="find"><find /></van-tab>
        <van-tab :title="localCity" name="city"><local-city-message /></van-tab>
        <template slot="nav-right">
          <van-icon class="v-tab-right" name="search" size="28" />
        </template>
      </van-tabs>
    </div>
    <!-- 底部导航栏 -->
    <bottom-tabbar />
  </div>
</template>

<script>
import Follow from "@/components/Follow";
import Find from "@/components/Find";
import LocalCityMessage from "@/components/LocalCityMessage";
import BottomTabbar from "@/components/BottomTabbar";

// document.body.addEventListener('touchmove', function (e) {
//   e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
// }, {passive: false});

export default {
  name: "home",
  components: {
    Follow,
    Find,
    LocalCityMessage,
    BottomTabbar,
  },
  data() {
    return {
      show: false,
      leftShow: false,
      activeName: "发现",
      localCity: "大连",
    };
  },
  methods: {
    openLeftPopup() {
      this.show = true;
    },
    showPopup() {
      this.show = true;
    },
  },
};
</script>
<style scoped>
.v-tab-left {
  margin-top: 8px;
  margin-left: 12px;
  padding-right: 70px;
}
.v-tab-right {
  margin-top: 8px;
  margin-right: 12px;
  padding-left: 70px;
}
</style>
