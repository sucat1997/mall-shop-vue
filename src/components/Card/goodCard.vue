<template>
  <div id="app">
    <element-card shadow="never">
      <van-image width="100%" height="10rem" fit="contain" :src="imgSrc" />
      <div style="padding: 14px">
        <span>{{text}}</span>
      </div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
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