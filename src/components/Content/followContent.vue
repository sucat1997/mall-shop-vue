<template>
  <div id="app">
    <van-row type="flex">
      <van-col span="12">
        <info-card v-for="(item, index) in leftList" :key="index" style="padding-top:5px; padding-right:2.5px" :userName="'妲己'" 
        :userSrc="item.userSrc" :text="index%3 == 0? longText + longText + longText + longText + longText : longText" 
        :imgSrc="item.imgSrc" :like="Math.round(Math.random()*1000)" />
      </van-col>
      <van-col span="12">
        <info-card v-for="(item, index) in rightList" :key="index + 1" style="padding-top:5px; padding-left:2.5px" 
        :userName="'主人'" :userSrc="item.userSrc" :text="index%2 == 0 ? longText : longText + longText + longText" 
        :imgSrc="item.imgSrc" :like="Math.round(Math.random()*1000)" />
      </van-col>
    </van-row>
  </div>
</template>

<script>
import infoCard from "@/components/Card/infoCard";
export default {
  name: "followContent",
  components: {
    infoCard,
  },
  data() {
    return {
      longText: "测试标题",
      leftList: [
        {
          userName: "阿狸",
          userSrc: require("@/assets/img/avaterImg/11.jpg"),
          imgSrc: require("@/assets/img/infoImg/24.png"),
        },
        {
          userSrc: require("@/assets/img/avaterImg/11.jpg"),
          imgSrc: require("@/assets/img/infoImg/24.png"),
        },
        {
          userSrc: require("@/assets/img/avaterImg/12.png"),
          imgSrc: require("@/assets/img/infoImg/44.jpg"),
        },
        {
          userSrc: require("@/assets/img/avaterImg/12.png"),
          imgSrc: require("@/assets/img/infoImg/22.png"),
        },
        {
          userSrc: require("@/assets/img/avaterImg/11.jpg"),
          imgSrc: require("@/assets/img/infoImg/22.png"),
        },
        {
          userSrc: require("@/assets/img/avaterImg/12.png"),
          imgSrc: require("@/assets/img/infoImg/22.png"),
        },
        {
          userSrc: require("@/assets/img/avaterImg/12.png"),
          imgSrc: require("@/assets/img/infoImg/22.png"),
        },
        {
          userSrc: require("@/assets/img/avaterImg/12.png"),
          imgSrc: require("@/assets/img/infoImg/22.png"),
        },
      ],
      rightList: [
        {
          userSrc: require("@/assets/img/avaterImg/12.png"),
          imgSrc: require("@/assets/img/infoImg/24.gif"),
        },
        {
          userSrc: require("@/assets/img/avaterImg/12.png"),
          imgSrc: require("@/assets/img/infoImg/22.png"),
        },
        {
          userSrc: require("@/assets/img/avaterImg/12.png"),
          imgSrc: require("@/assets/img/infoImg/22.png"),
        },
        {
          userSrc: require("@/assets/img/avaterImg/12.png"),
          imgSrc: require("@/assets/img/infoImg/22.png"),
        },
        {
          userSrc: require("@/assets/img/avaterImg/12.png"),
          imgSrc: require("@/assets/img/infoImg/24.png"),
        },
        {
          userSrc: require("@/assets/img/avaterImg/12.png"),
          imgSrc: require("@/assets/img/infoImg/44.jpg"),
        },
        {
          userSrc: require("@/assets/img/avaterImg/11.jpg"),
          imgSrc: require("@/assets/img/infoImg/22.png"),
        },
        {
          userSrc: require("@/assets/img/avaterImg/11.jpg"),
          imgSrc: require("@/assets/img/infoImg/44.jpg"),
        },
        {
          userSrc: require("@/assets/img/avaterImg/11.jpg"),
          imgSrc: require("@/assets/img/infoImg/24.png"),
        },
      ],
    };
  },
};
</script>