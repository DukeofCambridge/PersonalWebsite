<template>
  <div class="date_box">
    <el-switch style="position: absolute;top: 20px;left:90vh" v-model="timeview" active-text="日历视图"
               inactive-text="列表视图" />
    <el-button type="primary" style="position: absolute;top: 10px;left:30vh" @click="dialogFormVisible=true">添加待办事项</el-button>
    <!--日历视图-->
    <el-calendar v-if="timeview===true" id="calendar" ref="calendar">
<!--      element-plus语法  -->
      <template #dateCell="{ data }">
        <!--自定义内容-->
        <div>
          <div style="text-align: center">
            <!--有事件的日期标红-->
            <span :class="brightDate.indexOf(data.day) !== -1 ? 'everyDay' : ''">{{
                data.day.split("-").slice(2).join("-")
              }}</span>
            <!--展示待办事项(每天最多展示3个) -->
            <div :key="event.title" v-for="event in contentmy(data.day).slice(0,3)" style="margin:2px">
              <!--点击删除事件 -->
              <div @click="clear(event.id)">
                <el-button type="text" style="margin-right: 3px"> {{event.startTime.split(' ')[1]}}</el-button>
                <el-tag :type="event.type" >{{event.title}}</el-tag>
              </div>
            </div>
            <!--若超过三个，增加一个详细信息按钮 -->
            <el-popover v-if="contentmy(data.day).length>3" placement="top" :width="500" trigger="hover">
              <template #reference>
                <el-button type="text">查看全部</el-button>
              </template>
                <el-table :data=contentmy(data.day)>
                  <el-table-column width="100" prop="title" label="事件名称"></el-table-column>
                  <el-table-column width="100" prop="startTime" label="开始时间"></el-table-column>
                  <el-table-column width="100" prop="endTime" label="截止时间"></el-table-column>
                  <el-table-column width="300" prop="desc" label="描述"></el-table-column>
                </el-table>
            </el-popover>
          </div>
        </div>
      </template>
    </el-calendar>
    <!--列表视图-->
    <el-table stripe style="top: 70px;left:5vh;width: 200vh" v-else :data=calendarData>

      <el-table-column width="150" prop="title" label="事件名称"></el-table-column>
      <el-table-column width="200" prop="startTime" label="开始时间"></el-table-column>
      <el-table-column width="200" prop="endTime" label="截止时间"></el-table-column>
<!--      <el-table-column width="200" prop="endTime" label="截止时间"></el-table-column>-->
      <el-table-column sortable width="200" prop="priority" label="优先级"></el-table-column>
      <el-table-column width="600" prop="desc" label="描述"></el-table-column>
      <el-table-column width="140" fixed="right">
        <template #header>
          <el-input v-model="search" size="small" placeholder="点击搜索" />
        </template>
        <template #default="scope">
          <el-button size="small" @click="handleEdit( scope.row)"
          >编辑</el-button>
          <el-button
              size="small"
              type="danger"
              @click="clear(scope.row.id)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--新建事项-->
    <el-dialog
        title="新建事项"
        v-model="dialogFormVisible"
        width="560px">
      <el-form label-position="right" ref="loginFormRef" :model="create"  label-width="100px" >
        <el-form-item  prop="title" label="名称">
          <el-input v-model="create.title" ></el-input>
        </el-form-item>
        <el-form-item  prop="desc" label="说明">
          <el-input v-model="create.desc" type="textarea" prefix-icon="el-icon-unlock"></el-input><br/>
          <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
          >
            <el-button type="primary">上传文件</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item prop="startTime" label="开始时间">
          <el-date-picker
              v-model="create.startTime"
              type="datetime"
              placeholder="选择开始时间"
              format="YYYY/MM/DD hh:mm:ss"
              value-format="YYYY-MM-DD hh:mm"
              align="right">
          </el-date-picker>
        </el-form-item>
        <el-form-item prop="endTime" label="截止时间">
          <el-date-picker
              v-model="create.endTime"
              type="datetime"
              placeholder="选择截止时间"
              format="YYYY/MM/DD hh:mm:ss"
              value-format="YYYY-MM-DD hh:mm"
              align="right"
              :picker-options="pickerOptions">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="create.type" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="projectProportion" label="优先级">
          <el-slider
              show-input
              :max="sliderMax"
              v-model="create.priority">
          </el-slider>
        </el-form-item>
      </el-form>
      <!--      <date-picker></date-picker>-->
      <template #footer>
        <el-button type="info" @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      fileList:[
        // {
        //   name: '简历.pdf',
        //   url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        // },
      ],
      sliderMax: 5,
      dialogFormVisible: false,
      timeview: true, //日历视图
      size: "",
      currentDate: new Date(),
      create:{
        id: 10,
        title: '',
        startTime: "",
        endTime: "",
        priority: 0,
        type: '',
        desc: ''
      },
      // 时间用split(' ')分割，结果数组[0]为日期，[1]为时刻
      calendarData: [
        {
          id: 1,
          title: '深境螺旋',
          startTime: "2022-05-13 20:00",
          endTime: "2022-05-13 24:00",
          priority: 2,
          type: 'success',
          desc: '星辰与深渊都将为你所撼动'
        },
        {
          id: 2,
          title: '数据挖掘',
          startTime: "2022-05-14 08:00",
          endTime: "2022-05-14 11:00",
          priority: 1,
          type: '',
          desc: '事件描述'
        },
        {
          id: 2,
          title: '数据挖掘',
          startTime: "2022-05-14 08:00",
          endTime: "2022-05-14 11:00",
          priority: 1,
          type: '',
          desc: '事件描述'
        },
        {
          id: 2,
          title: '数据挖掘',
          startTime: "2022-05-14 08:00",
          endTime: "2022-05-14 11:00",
          priority: 1,
          type: '',
          desc: '事件描述'
        },
        {
          id: 2,
          title: '数据挖掘',
          startTime: "2022-05-14 08:00",
          endTime: "2022-05-14 11:00",
          priority: 1,
          type: '',
          desc: '事件描述'
        },
      ],
      nowpro:[],
      value: new Date(),
      pickerOptions: {
        disabledDate(date){
          return date.getTime() < new Date();
        },
      },
      options: [{
        value: '',
        label: '学习'
      }, {
        value: 'warning',
        label: '社交'
      },{
        value: 'success',
        label: '娱乐'
      },{
        value: 'danger',
        label: '其他'
      }],
    }
  },
  computed: {
    // 时间高亮的数组
    brightDate() {
      let ary = [];
      for (let i in this.calendarData) {
        ary.push(this.calendarData[i].endTime);
      }
      return ary;
    },
  },
  methods: {
    // Tooltip 文字提示
    companyCut(name) {
      return name.split(" ")
    },
    contentmy(date) {
      let nowp = [];

      for (let i in this.calendarData) {
        if (date === this.calendarData[i].endTime.split(' ')[0]) {
          nowp.push(this.calendarData[i])
        }
      }
      // this.nowpro = [];
      this.nowpro = nowp;
      return nowp;
    },
    clear(id) {
      this.$confirm('清除该条事项？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        for (let i in this.calendarData) {
          if (id === this.calendarData[i].id)
            this.calendarData.splice(parseInt(i), 1)
        }
      })
    },
    add(){
      this.calendarData.push(this.create)
      this.dialogFormVisible=false
      console.log(this.create)
    }
  }
}
</script>

<style lang="less" scoped>
.date_box {
  //width: 100vh;
  //height: 100vh;
  background-color: #ffff;

  .is-selected {
    color: #1989fa;
  }

  /deep/ .el-calendar-table .el-calendar-day {
    height: 185px;
    //width: 252px;
  }
}

.margintop {
  background-color: #ffff;
  margin-left: 25px;
}

.left_ton {
  margin-right: 20px;
}

// .back {
//   background-color: #dddddd;
// }

.link {
  text-decoration: none;
  color: #409eff;
}

.calender {
  // width: 430px;
  // position: relative;
  // margin: 0 auto;
  // margin-top: 20px;
  // padding: 0px;
  background-color: #ffff;
  width: 50%;
  height: 25%;
}

.everyDay {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #ff4040;
  color: #fff;
  border-radius: 50%;
}
</style>
