<template>
  <div id="app">
    <Card shadow="never" :body-style="{ padding: '1px' }">
      <van-row style="height: 100%">
        <van-image width="100%" height="14rem" fit="contain" :src="imgSrc" />
      </van-row>

      <van-row style="padding: 4px">
        <span style="float: left">{{ text }}</span>
      </van-row>
      <van-row style="padding: 4px">
        <van-col span="12">
          <van-row>
            <van-col span="7">
              <div style="padding-top: 5px; float: left">
                <van-image
                  width="1.5rem"
                  height="1.5rem"
                  fit="scale-down"
                  :src="userSrc"
                  round
                />
              </div>
            </van-col>
            <van-col span="10">
              <div style="font-size: 12px; padding-top:8px">
                <span>{{ userName }}</span>
              </div>
            </van-col>
          </van-row>
        </van-col>
        <van-col span="12">
          <div style="padding-top: 7px; float: right">
            <van-icon name="like-o" style="padding-right: 1px" />
            <span>{{ like }}</span>
          </div>
        </van-col>
      </van-row>
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
  props: [
    "imgSrc",
    "text",
    "like",
    "userName",
    "userHomeUrl",
    "userSrc",
    "like",
  ],
  data() {
    return {
      currentDate: new Date(),
    };
  },
};
</script>