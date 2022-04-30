<template>
  <el-menu
      default-active="1"
      style="width: 110px;opacity: 0.8">
    <el-menu-item index="1" @click="goAnchor('#top')">
      <i class="el-icon-menu"></i>
      <span >顶 部</span>
    </el-menu-item>

    <el-menu-item index="2" @click="goAnchor('#footprint')">
      <i class="el-icon-menu"></i>
      <span >足 迹</span>
    </el-menu-item>

    <el-menu-item index="3" @click="goAnchor('#collection')">
      <i class="el-icon-document"></i>
      <span >撷 英</span>
    </el-menu-item>

    <el-menu-item index="4" @click="goAnchor('#writing')">
      <i class="el-icon-setting"></i>
      <span >墨 痕</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Sidemenu",
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
a {
  text-decoration: none;
  color: inherit;
}
</style>
