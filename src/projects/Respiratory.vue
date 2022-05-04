<template>
  
  <div class="project-header">
        <el-container>
            <ProjectHeader></ProjectHeader>

            <el-main>
                
                <el-button type="warning" @click="this.$router.push('/')" class="buttonHead">返    回</el-button>

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
                                根据病人<label style="font-weight:bold;">呼吸声录音</label>对其身体情况进行分类。
                            </li>
                            <li>
                                相关数据集和原始算法来自<label style="font-weight:bold;">Kaggle</label>平台。
                            </li>
                            <li>
                                <label style="font-weight:bold;">主要流程</label>：特征提取→语音降噪→分类模型构建→结果评估
                            </li>
                        </ul>
                    </div>

                    <div style="margin-top:-37%;margin-left:84%;width:80%;background-color:;">
                        <img src="../assets/Respiratory.png" alt="医学影像处理"  />
                    </div>
                </div>

                <!-- <hr style="width: 60%; margin-left:20%;margin-top:1%; position:relative;"> -->
                <el-divider>
                    <div>
                        <label class="pHLabel">整体流程示意</label>
                    </div>
                </el-divider>

                <div>
                    <img src="../assets/Projects/Respiratory/AllProcess.png" alt="总流程" style="width:39%;"/>
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
                                            对Kaggle除音频之外的特征数据进行整理，并完成数据清洗。
                                        </li>
                                        <li>
                                            针对不同时长的音频进行分帧对齐处理。
                                        </li>
                                        <li>
                                            根据信号处理流程，分别提取MFCC和FBank特征。
                                        </li>
                                    </ul>

                                    <img src="../assets/Projects/Respiratory/step1.png" style="width:28%;margin-left:45%;margin-top:-20%;" alt="特征提取"/>
                                </div>
                            </el-collapse-item>

                            <el-collapse-item title="II. 语音降噪" name="2">
                                <div style="margin-left:10%;">
                                    <ul class="pCollapseText">
                                        <li>
                                            针对论文中提到的噪声问题，先进性预先筛选出合适的音频。
                                        </li>
                                        <li>
                                            通过谱减法在信号处理过程中进行降噪。
                                        </li>
                                    </ul>

                                    <img src="../assets/Projects/Respiratory/step2.png" style="width:18.2%;margin-left:45%;margin-top:-20%;" alt="特征提取"/>
                                </div>
                            </el-collapse-item>

                            <el-collapse-item title="III. 分类模型构建" name="3">
                                <div style="margin-left:10%;">
                                    <ul class="pCollapseText">
                                        <li>
                                            针对语音识别特点，选择HMM提取音素。
                                        </li>
                                        <li>
                                            将MFCC特征用于传统机器学习分类器SVM,，LDA，。
                                        </li>
                                        <li>
                                            将FBank特征用于深度学习LSTM，双向LSTM等神经网络。
                                        </li>
                                    </ul>

                                    <img src="../assets/Projects/Respiratory/step3.png" style="width:23%;margin-left:45%;margin-top:-20%;" alt="特征提取"/>
                                </div>
                            </el-collapse-item>

                            <el-collapse-item title="IV. 结果评估" name="4">
                                <div style="margin-left:10%;">
                                    <ul class="pCollapseText">
                                        <li>
                                            使用主流分类指标对模型结果进行评价。
                                        </li>
                                        <li>
                                            和Kaggle原始算法进行对比（效果更优）。
                                        </li>
                                    </ul>

                                    <img src="../assets/Projects/Respiratory/step4.png" style="width:27%;margin-left:45%;margin-top:-20%;" alt="特征提取"/>
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

import ProjectHeader from "@/components/ProjectHeader.vue"

export default {
    name: "Respiratory",
    components:{ProjectHeader},
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
    /* position:relative; */
    /* background-color: purple; */
}

.buttonHead{
    /* background-color:black; */
    margin-left:43%;
    margin-top:-0.2%;
    position:fixed;
    z-index:25;
    /* position:relative; */
}

blockquote{
    font-style: italic;
    font-size: 23px;
    font-weight: 300;
    line-height: 1;
    opacity: 1;
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
