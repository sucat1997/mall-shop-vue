<template>
  <div id="app">
    <form action="/">
      <van-search
        v-model="searchValue"
        show-action
        shape="round"
        :placeholder="hotWord"
        @search="onSearch"
        @cancel="onCancel"
      >
        <template slot="action">
          <van-icon
            name="shopping-cart-o"
            size="21"
            style="padding-left: 6px; padding-right: 5px"
          />
        </template>
        <template slot="action">
          <van-icon
            name="notes-o"
            size="21"
            style="padding-left: 5px; padding-right: 5px"
          />
        </template>
        <template slot="action">
          <van-icon name="ellipsis" size="21" style="padding-left: 5px" />
        </template>
      </van-search>
    </form>
    <div style="padding-left: 10px; padding-right: 10px">
      <van-swipe
        :autoplay="2000"
        style="background-color: red; border-radius: 10px"
      >
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <van-image width="100%" height="10rem" fit="contain" :src="image" />
        </van-swipe-item>
      </van-swipe>

      <van-grid :border="false" :column-num="5">
        <van-grid-item v-for="(image, index) in images2List" :key="index">
          <van-image :src="image" />
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 底部导航栏 -->
    <bottom-tabbar />
  </div>
</template>

<script>
import BottomTabbar from "@/components/BottomTabbar";
export default {
  name: "shopping",
  components: {
    BottomTabbar,
  },
  data() {
    return {
      images: [
        require('@/assets/img/lunbo/1.png'),
        require('@/assets/img/lunbo/3.png'),
        require('@/assets/img/lunbo/2.png'),
        require('@/assets/img/lunbo/1.png'),
        require('@/assets/img/lunbo/4.png'),
        require('@/assets/img/lunbo/3.png'),
      ],
      images2List:[
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
      ],
      searchValue: "",
      hotWord: "香水小样",
    };
  },
  methods: {
    onChange(index) {},
    onSearch(val) {
      this.$toast(val);
    },
    onCancel() {
      this.$toast("取消");
    },
  },
};
</script>
<style scoped>
</style>
