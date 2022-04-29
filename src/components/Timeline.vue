<template>
  <el-timeline>
    <el-timeline-item timestamp="2018/4/12" placement="top"  color="#0bbd87">
      <div class="TagGroup">
        <div class="TagCard">
          <div class="TagCard-img-container">
            <img src="../assets/logo.png" style="transform: scale(0.6)" alt=""/>
          </div>
          <div class="Text">
            <h1>康杰中学</h1>
            <p>问渠那得清如许,为有源头活水来</p>
          </div>
        </div>
      </div>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/12" placement="top">
      <div class="TagGroup">
        <div class="TagCard">
          <div class="TagCard-img-container">
            <img src="../assets/logo.png" style="transform: scale(0.6)" alt=""/>
          </div>
          <div class="Text">
            <h1>同济大学</h1>
            <p>夫吴人与越人相恶也,当其同舟而济,遇风,其相救也,如左右手</p>
          </div>
        </div>
      </div>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/12" placement="top">
      <div class="TagGroup">
        <div class="TagCard">
          <div class="TagCard-img-container">
            <img src="../assets/logo.png" style="transform: scale(0.6)" alt=""/>
          </div>
          <div class="Text">
            <h1>同济大学学生会</h1>
            <p>自觉觉人</p>
          </div>
        </div>
      </div>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/12" placement="top">
      <div class="TagGroup">
        <div class="TagCard">
          <div class="TagCard-img-container">
            <img src="../assets/logo.png" style="transform: scale(0.6)" alt=""/>
          </div>
          <div class="Text">
            <h1>同济大学谷歌俱乐部</h1>
            <p></p>
          </div>
        </div>
      </div>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/12" placement="top">
      <div class="TagGroup">
        <div class="TagCard">
          <div class="TagCard-img-container">
            <img src="../assets/logo.png" style="transform: scale(0.6)" alt=""/>
          </div>
          <div class="Text">
            <h1>MoDI Lab</h1>
            <p></p>
          </div>
        </div>
      </div>
    </el-timeline-item>
  </el-timeline>
<!--  <el-timeline>-->
<!--    <el-timeline-item-->
<!--        v-for="(activity, index) in activities"-->
<!--        :key="index"-->
<!--        :icon="activity.icon"-->
<!--        :type="activity.type"-->
<!--        :color="activity.color"-->
<!--        :size="activity.size"-->
<!--        :hollow="activity.hollow"-->
<!--        :timestamp="activity.timestamp">-->
<!--      {{ activity.content }}-->
<!--    </el-timeline-item>-->
<!--  </el-timeline>-->
</template>

<script>
import { MoreFilled } from '@element-plus/icons-vue'

export default {
  name: "Timeline",
  data(){
    return{
      activities: [
        {
          content: 'Custom icon',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: MoreFilled,
        },
        {
          content: 'Custom color',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87',
        },
        {
          content: 'Custom size',
          timestamp: '2018-04-03 20:46',
          size: 'large',
        },
        {
          content: 'Custom hollow',
          timestamp: '2018-04-03 20:46',
          type: 'primary',
          hollow: true,
        },
        {
          content: 'Default node',
          timestamp: '2018-04-03 20:46',
        },
      ]
    }
  },
  methods:{

  }
}
</script>

<style scoped>
.TagGroup {
  margin: 20px auto 20px;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(1,1fr);
  grid-gap: 30px 45px;
}
.TagCard {
  --tagcard-height: 185px;
  width: 100%;
  height: var(--tagcard-height);
  margin: 0;
  border-radius: 30px;
  box-shadow: -3px -3px 7px #eee, 3px 3px 5px rgb(94 104 121);
  align-self: center;
  display: grid;
  grid-template-columns: .4fr 1fr;
  transition: .8s cubic-bezier(.2,.8,.2,1);
}
.TagCard-img-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.TagCard .Text {
  align-self: center;
  margin: 10px 30px;
  display: grid;
  grid-template-rows: .618fr 1fr;
  grid-gap: 10px;
}
</style>
