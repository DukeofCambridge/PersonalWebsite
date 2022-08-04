<template>
  <el-menu
      :default-active=active
      style="width: 110px;opacity: 0.8">
    <el-menu-item index="1" @click="goAnchor('#top')">
      <el-icon><User /></el-icon>
      <span >顶 部</span>
    </el-menu-item>

    <el-menu-item index="2" @click="goAnchor('#footprint')">
      <el-icon><Guide /></el-icon>
      <span >足 迹</span>
    </el-menu-item>

    <el-menu-item index="3" @click="goAnchor('#collection')">
      <el-icon><Medal /></el-icon>
      <span >撷 英</span>
    </el-menu-item>

    <el-menu-item index="4" @click="goAnchor('#writing')">
      <el-icon><Notebook /></el-icon>
      <span >墨 痕</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Sidemenu",
  data(){
    return {
      active: '1'
    }
  },
  mounted() {
    document.addEventListener('scroll', this.listenScroll)
  },
  methods:{
    goAnchor (selector) {
      document.querySelector(selector).scrollIntoView({
        behavior:"smooth"
      })
    },
    // 内容部分滚动事件
    listenScroll() {
      // console.log('footprint:', 0>document.querySelector('#footprint').getBoundingClientRect().top)
      // console.log(this.active)
      switch (true) {
        case 0>document.querySelector('#writing').getBoundingClientRect().top:
          this.active='4';break;
        case 0>document.querySelector('#collection').getBoundingClientRect().top:
          this.active='3';break;
        case 0>document.querySelector('#footprint').getBoundingClientRect().top:
          this.active='2';break;
        default: this.active='1';
      }
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>
