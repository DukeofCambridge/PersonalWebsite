<template>
  <el-carousel :interval="2000" type="card" height="400px">
    <el-carousel-item v-for="item in items.length" :key="item">
     <img :src=items[item-1].src style="width: 100%; "  alt=""/>
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data(){
    return {
      items:[
        {
          src: require("../assets/cpc-volunteer.jpg"),
          desc: '抗疫志愿者'
        },
        // {
        //   src: require("../assets/dch_sunny.jpg"),
        //   desc: '在阳光下'
        // },
        {
          src: require("../assets/mcm2207862.png"),
          desc: '美赛'
        },
        {
          src: require("../assets/internet.png"),
          desc: '互联网+'
        },
        {
          src: require("../assets/reward.png"),
          desc: '奖学金'
        },
        {
          src: require("../assets/London.png"),
          desc: '伦敦'
        },
        {
          src: require("../assets/Florence.png"),
          desc: '佛罗伦萨'
        },
      ]
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 24px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
