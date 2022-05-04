<template>
  <el-button type="primary" style="margin: 15vh auto auto 10vh;position: fixed" @click="this.$router.push('/')">返    回</el-button>
  <div class="project-header">
        <el-container>
            <!-- <el-affix> -->
                <el-header class="pageHeader">
                    <img src="../assets/Projects/Head_1.png" alt="创造" class="imgHead"/>
                    <blockquote style="margin-top:-3.9%;">"人生是一个永不停息的工厂，那里没有懒人的位置。工作吧！创造吧！" —— 罗曼罗兰</blockquote>
                </el-header>
            <!-- </el-affix> -->
            <el-main>

                <!-- 调整间距 -->
                <div style="margin-top:6%;"></div>

                <el-divider>
                    <div>
                        <label class="pHLabel">医学影像处理项目</label>
                    </div>
                </el-divider>

                <div style="background:;" class="pHContent">
                    <div style="margin-top:14%;width:83%;display:flex;">
                        <ul class="pHText">
                            <li>
                                与<label style="font-weight:bold;">上海第一妇婴保健院</label>专业医生合作。
                            </li>
                            <li>
                                帮助判断妇女是否患有<label style="font-weight:bold;">子宫腺肌症</label>。
                            </li>
                            <li>
                                <label style="font-weight:bold;">主要流程</label>：特征提取→数据不平衡处理→分类模型构建→结果评估
                            </li>
                        </ul>
                    </div>

                    <div style="margin-top:-37%;margin-left:84%;width:80%;background-color:;">
                        <img src="../assets/FetalLung.png" alt="医学影像处理"  />
                    </div>
                </div>

                <!-- <hr style="width: 60%; margin-left:20%;margin-top:1%; position:relative;"> -->
                <el-divider>
                    <div>
                        <label class="pHLabel">整体流程示意</label>
                    </div>
                </el-divider>

                <div>
                    <img src="../assets/Projects/FetalLung/AllProcess.png" alt="总流程" style="width:39%;"/>
                </div>

                <!-- 调整间距 -->
                <div style="margin-top:2%;"></div>

                <el-divider>
                    <div>
                        <label class="pHLabel">具体流程说明</label>
                    </div>
                </el-divider>

                <!-- 调整间距 -->
                <div style="margin-top:2%;"></div>

                <el-row>
                    <el-col
                    :span="16"
                    :offset="4"
                    >
                        <el-collapse v-model="activeNames" @change="handleChange">
                            <el-collapse-item title="I. 特征提取" name="1" >
                                <!-- <div style="font-size:15px;text-align:left;">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div> -->
                                <div style="margin-left:10%;">
                                    <ul class="pCollapseText">
                                        <li>
                                            专业医生提供ROI子宫图像，以及相关文本特征和标签。
                                        </li>
                                        <li>
                                            提取Pyradiomics医学影像组学特征和Wavelet小波特征。
                                        </li>
                                        <li>
                                            共有140有效样本。特征由影像组学、小波和文本特征组成。
                                        </li>
                                    </ul>

                                    <img src="../assets/Projects/FetalLung/step1.png" style="width:12%;margin-left:45%;margin-top:-20%;" alt="特征提取"/>
                                </div>
                            </el-collapse-item>

                            <el-collapse-item title="II. 数据不均衡处理" name="2">
                                <div style="margin-left:10%;">
                                    <ul class="pCollapseText">
                                        <li>
                                            140个样本中，标签0和标签1样本的比例不均衡。
                                        </li>
                                        <li>
                                            使用过采样算法BorderlineSMOTE进行不均衡处理。
                                        </li>
                                        <li>
                                            不均衡处理后，共有样本245个，标签0：110；标签1：135。
                                        </li>
                                    </ul>

                                    <img src="../assets/Projects/FetalLung/step2.png" style="width:15%;margin-left:45%;margin-top:-20%;" alt="特征提取"/>
                                </div>
                            </el-collapse-item>

                            <el-collapse-item title="III. 分类模型构建" name="3">
                                <div style="margin-left:10%;">
                                    <ul class="pCollapseText">
                                        <li>
                                            特征选择：OMP算法、五折交叉验证。
                                        </li>
                                        <li>
                                            特征对比：图像特征和文本特征。
                                        </li>
                                        <li>
                                            传统机器学习模型：逻辑回归、支持向量机。
                                        </li>
                                    </ul>

                                    <img src="../assets/Projects/FetalLung/step3.png" style="width:18%;margin-left:45%;margin-top:-20%;" alt="特征提取"/>
                                </div>
                            </el-collapse-item>

                            <el-collapse-item title="IV. 结果评估" name="4">
                                <div style="margin-left:10%;">
                                    <ul class="pCollapseText">
                                        <li>
                                            使用9个不同指标对模型结果进行评价。
                                        </li>
                                        <li>
                                            基于五折交叉验证后的结果进行假设验证。
                                        </li>
                                        <li>
                                            对模型结果进行可解释性分析并可视化，辅助专业医生使用。
                                        </li>
                                    </ul>

                                    <img src="../assets/Projects/FetalLung/step4.png" style="width:12%;margin-left:45%;margin-top:-20%;" alt="特征提取"/>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </el-col>
                </el-row>


                <!-- 调整间距 -->
<!--                <div style="margin-top:3%;"></div>-->

<!--                <el-divider>-->
<!--                    <div>-->
<!--                        <el-button type="info" style="size:mini;" @click="this.$router.push('/')">返回个人页面</el-button>-->
<!--                    </div>-->
<!--                </el-divider>-->

                <!-- <div style="margin-top:6%;"></div>

                <el-row>
                    <el-col
                    :span="16"
                    :offset="4"

                    v-for="(item) in 4"
                    :key="item"

                    >
                        <div>
                            <el-card class="box-card">
                                <template #header>
                                    <div class="card-header">
                                        <label class="pCHText">Card name</label>
                                    </div>
                                </template>
                                <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
                            </el-card>
                        </div>

                        <div style="margin-top:3%;"></div>

                    </el-col>
                </el-row> -->

            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "FetalLung",
    data() {
      return {
        activeNames: [''],
        processContent:[
            {imgProcess:""}
        ],
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }

}
</script>

<style scoped>

/* 布局容器相关 */
.el-header,
  .el-footer {
    /* background-color: #b3c0d1; */
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 60px;
  }

 .el-main {
    /* background-color: #e9eef3; */
    color: var(--el-text-color-primary);
    text-align: center;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    /* line-height: 260px; */
  }

  .el-container:nth-child(7) .el-aside {
    /* line-height: 320px; */
  }

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
    position:relative;
}

blockquote{
    font-style: italic;
    font-size: 23px;
    font-weight: 300;
    line-height: 1;
    opacity: 0.9;
    color:orange;
}

/* 分割线 */
.el-divider--horizontal {
    background: 0 0;
    border-top: 1px dashed #505356;
    width: 60%;
    margin-left:20%;
    margin-top:1%;
    position: relative;
}

/* 项目简介 */
.pHLabel{
    font-size:23px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 700;
}

.pHContent{
    width: 30%;
    margin-left:30%;
    position:relative;
}

.pHText{
    font-size:19px;
    text-align: left;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

/* 卡片相关 */
.card-header {
    /* background-color:green; */
    /* display: flex; */
    justify-content: space-between;
    align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  /* margin-bottom: 18px; */
}

.box-card {
    /* width: 20%; */
    position:relative;
    shadow:"hover";
}

.pCHText{
    font-size:19px;
    text-align: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

/* 折叠面板 */
/* .collapseItem{
    width:20%;
} */

.el-collapse >>> .el-collapse-item{
    width:100%;
    /* background-color: #e9eef3 */
}

.el-collapse-item >>> .el-collapse-item__header{
    width:100%;
    font-size:18px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    /* font-weight: bold; */
    /* background: white; */
    /* color:orange;
    background-color: #f5f1e6 */
}

.el-collapse-item >>> .el-collapse-item__wrap{
    width:100%;
    /* background-color: #f8e0a007 */
}

.el-collapse-item__content{
    display:flex;
    font-size:20px;
}

.pCollapseText{
    font-size:15px;
    text-align: left;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

</style>
