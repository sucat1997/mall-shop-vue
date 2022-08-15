<template>
  <div id="app">
    <element-card shadow="never">
      <van-image width="100%" height="10rem" fit="contain" :src="imgSrc" />
      <div style="padding: 14px">
        <span>{{text}}</span>
      </div>
    </element-card>
  </div>
</template>

<script>
import { Card } from "element-ui";

export default {
  name: "GoodCard", //商品卡片组件页
  components: {
    ElementCard: Card,
  },
  props: ["imgSrc", "text"],
  data() {
    return {
      currentDate: new Date(),
    };
  },
};
</script>