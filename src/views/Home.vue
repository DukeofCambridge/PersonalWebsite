<template>
<!-- 首页顶部-->
  <div class="header" id="top">
<!--    <div class="icon">-->
      <a href="https://github.com/DukeofCambridge">
        <img src="../assets/github.png" style="transform:scale(0.1);position:absolute;top: -160px;right: -35px;display: flex;" alt="github"/>
      </a>
      <a href="https://space.bilibili.com/436137288">
        <img src="../assets/bilibili.png" style="transform:scale(1.3);position:absolute;top: 32px;right: 105px;display: flex;" alt=""/>
      </a>
      <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkwMzIyMTE2NQ==&scene=124#wechat_redirect">
        <img src="../assets/wechat_BTN.png" style="transform:scale(1.1);position:absolute;top: 32px;right: 45px;display: flex;" alt=""/>
      </a>

    <div class="blank">
      <div style="margin-top: 0; width: 40%;  text-align: center">
        <h1 style="color: aliceblue; font-size: 40px; font-family: Tahoma, Helvetica, Arial, 宋体, sans-serif; margin-bottom: 40px;">邵国诚</h1>
        <blockquote>“只要不失去你的崇高，整个世界都会向你敞开”</blockquote>
      </div>
    </div>

    <svg class="WaveMultiGroup" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <path fill="rgba(255,255,255,0.7)"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
      <path fill="rgba(255,255,255,0.5)"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
      <path fill="rgba(255,255,255,0.3)"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
      <path fill="rgba(255,255,255,1)"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
    </svg>
  </div>

<!-- 侧边导航-->
  <Sidemenu style="position: fixed;right:0; top:35%;z-index: 100; border-radius: 20px"></Sidemenu>

<!-- 主体内容 -->
  <div style="margin: 0 50vh;">
    <div class="title" id="footprint">
      <label class="linear-gradient-text" > 足 迹 </label><br/><br/>
      <label class="desc" > 旅程总有一天会迎来终点，所以，不必匆忙</label>
    </div>
    <Timeline></Timeline>
  </div>

  <div style="margin: 10vh 30vh;">
    <div class="title" id="collection">
      <label class="linear-gradient-text" > 撷 英 </label><br/><br/>
      <label class="desc" > 无论当下的境遇如何，那些闪耀的回忆永远是你最珍贵的东西</label>
    </div>
    <Carousel></Carousel>
  </div>

  <div style="margin: 10vh 25vh;">
    <div class="title" id="writing">
      <label class="linear-gradient-text" > 墨 痕  </label><br/><br/>
      <label class="desc" > 信息熵即为灵魂</label>
    </div>
    <el-row>
      <el-col
          v-for="(item,index) in blogContent"
          :key="item"
          :span="6"
          :offset="index %3 !==0 ? 1 : 2"
          >
        <el-card shadow="hover" :body-style="{ padding: '0px' }"  style="margin-bottom: 5vh;" @click="this.$router.push(item.turnRoute)">
          <img
              :src="item.picPath"
              class="image"
          />
          <div style="padding-bottom: 14px; text-align: center">
            <h3>{{item.text}}</h3>

          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import Timeline from "@/components/Timeline";
import Carousel from "@/components/Carousel";
import Sidemenu from "@/components/Sidemenu";
export default {
  name: "Home",
  components: {Sidemenu, Carousel, Timeline},
  data(){
    return {
      ns: 1,

      blogContent:[
          {picPath: require("../assets/Respiratory.png"), text:"语音分类", turnRoute:"/projects/Respiratory"},
          {picPath: require("../assets/FetalLung.png"), text:"医学影像处理", turnRoute:"/projects/FetalLung"},
          {picPath: require("../assets/Baijuan.png"), text:"全栈开发", turnRoute:"/blog"},

      ],

    }
  },
  methods:{
    goAnchor (selector) {
      document.querySelector(selector).scrollIntoView({
        behavior:"smooth"
      })
    }

  }
}

</script>

<style scoped>
/* 背景 */
.header {
  background-image: url("../assets/London.png") ;
  background-size: 100%;
  position: relative;
  /*background: linear-gradient(60deg,rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);*/
}
.blank {

  height: 85vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}


.WaveMultiGroup {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  min-height: 100px;
  max-height: 150px;
}

.WaveMultiGroup path {
  animation: multiwavemove 30s cubic-bezier(.55,.5,.45,.5) infinite;
}

.WaveMultiGroup path:nth-child(1) {
  transform: translateY(0px);
  animation-delay: -2s;
  animation-duration: 7s;
}
.WaveMultiGroup path:nth-child(2) {
  transform: translateY(1px);
  animation-delay: -3s;
  animation-duration: 10s;
}
.WaveMultiGroup path:nth-child(3) {
  transform: translateY(2px);
  animation-delay: -4s;
  animation-duration: 13s;
}
.WaveMultiGroup path:nth-child(4) {
  transform: translateY(3px);
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes multiwavemove {
  0% {
    transform: translate3d(-30px,0,0);
  }
  60% {
    transform: translate3d(80px,0,0);
  }
  100% {
    transform: translate3d(-30px,0,0);
  }
}
@media (max-width : 768px) {
  .waves-multi {
    height: 40px;
    min-height: 40px;
  }
}

/* 信息卡片 */
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
blockquote{
  font-style: italic;
  font-size: 20px;
  font-weight: 450;
  line-height: 1.5;
  opacity: 1;
  color: hsla(0,0%,100%,.9);
}


.icon{
  position: absolute;
  z-index: 10;

  top: .19rem;
  right: .45rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.icon .btn {
  height: .26rem;
  margin-left: .26rem;
  cursor: pointer;
  position: relative;
}

.linear-gradient-text {
  font-size: 60px;
  margin-bottom: 500px;
  background: linear-gradient(125deg, rgb(243, 95, 178) 0%, rgb(16, 199, 248) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.desc{
  margin: 0 auto;
  font-size: 15px;
  letter-spacing: 10px;
  text-align: center;
  color: rgba(0,0,0,.5);
}
.title{
  text-align: center;
  margin-bottom: 30px;
}
</style>
