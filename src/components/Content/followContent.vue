<template>
  <div id="app">
    <van-row type="flex">
      <van-col span="12">
        <info-card v-for="(item, index) in leftList" :key="index" style="padding-top:5px; padding-right:2.5px" :text="index + index + index +index+ index + index +index+ index + index +index+ index + index +index+ index + index +index+ index + index +index+ index + index +index+ index + index +index
        + longText + longText" :imgSrc="item.imgSrc" />
      </van-col>
      <van-col span="12">
        <info-card v-for="(item, index) in rightList" :key="index + 1" style="padding-top:5px; padding-left:2.5px" :text="longText" :imgSrc="item.imgSrc" />
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
      longText: "都完全解冻i请玩家都i全文见哦对不起我",
      leftList: [
        {
          imgSrc: require("@/assets/img/infoImg/24.png"),
        },
        {
          imgSrc: require("@/assets/img/infoImg/24.png"),
        },
        {
          imgSrc: require("@/assets/img/infoImg/44.jpg"),
        },
        {
          imgSrc: require("@/assets/img/infoImg/22.png"),
        },
        {
          imgSrc: require("@/assets/img/infoImg/22.png"),
        },
        {
          imgSrc: require("@/assets/img/infoImg/22.png"),
        },
        {
          imgSrc: require("@/assets/img/infoImg/22.png"),
        },
        {
          imgSrc: require("@/assets/img/infoImg/22.png"),
        },
      ],
      rightList: [
        {
          imgSrc: require("@/assets/img/infoImg/24.gif"),
        },
        {
          imgSrc: require("@/assets/img/infoImg/22.png"),
        },
        {
          imgSrc: require("@/assets/img/infoImg/22.png"),
        },
        {
          imgSrc: require("@/assets/img/infoImg/22.png"),
        },
        {
          imgSrc: require("@/assets/img/infoImg/24.png"),
        },
        {
          imgSrc: require("@/assets/img/infoImg/44.jpg"),
        },
        {
          imgSrc: require("@/assets/img/infoImg/22.png"),
        },
        {
          imgSrc: require("@/assets/img/infoImg/44.jpg"),
        },
        {
          imgSrc: require("@/assets/img/infoImg/24.png"),
        },
      ],
    };
  },
};
</script>