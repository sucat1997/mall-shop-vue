<template>
  <div id="app">
    <Card shadow="never">
      <van-image width="100%" height="10rem" fit="contain" :src="imgSrc" />
      <div style="padding: 3px">
        <span>{{text}}</span>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from "element-ui";

export default {
  name: "InfoCard", //信息卡片组件页
  components: {
    Card,
  },
  props: ["imgSrc", "text", "like", "userName", "userHomeUrl"],
  data() {
    return {
      currentDate: new Date(),
    };
  },
};
</script>