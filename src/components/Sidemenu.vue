<template>
  <el-menu
      default-active="1"
      style="width: 170px">
    <a href="#">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span >顶 部</span>
      </el-menu-item>
    </a>
    <a href="#footprint">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span >足 迹</span>
      </el-menu-item>
    </a>
    <a href="#collection">
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span >撷 英</span>
      </el-menu-item>
    </a>
    <a href="#writing">
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span >墨 痕</span>
      </el-menu-item>
    </a>
  </el-menu>
</template>

<script>
export default {
  name: "Sidemenu"
}
</script>
a {
text-decoration: none;
color: inherit;
}
<style scoped>

</style>
