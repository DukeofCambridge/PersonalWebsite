<template>
    <el-header class="pageHeader">
        <img src="../assets/Projects/Head_1.png" alt="创造" class="imgHead"/>
        <blockquote style="margin-top:-3.9%;">"人生是一个永不停息的工厂，那里没有懒人的位置。工作吧！创造吧！" —— 罗曼罗兰</blockquote>
    </el-header>
</template>

<script>
export default {
  name: "ProjectHeader",
  data(){
    return {
      
    }
  }
}
</script>

<style scoped>
/* pageHeader */
.pageHeader{
    background-image: url("../assets/CityinSpace_2.png");
    width:100%;
    /* background-color:green; */
    background-size: 100%;
    position:fixed;
    z-index:12;
}

.imgHead{
    width:3.3%;
    margin-left:-94%;
    margin-top:0.5%;
    /* position:relative; */
    /* background-color: purple; */
}

blockquote{
    font-style: italic;
    font-size: 23px;
    font-weight: 300;
    line-height: 1;
    opacity: 1;
    color:orange;
}
</style>