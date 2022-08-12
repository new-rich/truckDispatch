<template>
  <div class="main">
    <div class="title">
      <span>报警提示查询</span>
    </div>

    <div class="query">
      <div class="text">
        数据检索：
      </div>
      <div class="select">
        <el-select v-model="query_type" class="m-2" placeholder="所有数据" size="large" @change="currStationChange">
          <el-option
              v-for="item in query_type_list"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </div>
      <div class="select" v-show="id_show">
        <el-select v-model="car_id" class="m-2" placeholder="铲车#1" size="large">
          <el-option
              v-for="item in car_id_list"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </div>
      <div class="demo-date-picker" v-show="time_show">
        <div class="block">
          <el-date-picker
              v-model="value2"
              type="daterange"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="截止日期"
              :shortcuts="shortcuts"
              size="large"
          />
        </div>
      </div>
      <el-button plain style="margin-left: 3%;width: 5%;height: 50%;font-size: 18px;">重置</el-button>
      <el-button type="primary" :icon="Search" style="margin-left: 3%;width: 5%;height: 50%;font-size: 18px;">查询</el-button>
    </div>
    <div class="control">
      <el-button type="primary" :icon="Download" style="width: 5%;height: 80%;float: left;margin-top: 5px">导出</el-button>
      <el-button type="primary" :icon="CirclePlus" style="margin-left: 5%;width: 5%;height: 80%;float: left;margin-top: 5px">添加</el-button>
    </div>
    <div class="table">
      <el-table :data="tableData" border size="large">
        <el-table-column fixed prop="alarmID" label="报警信息ID" min-width="2"  align="center">
          <!--          <template #default="scope">-->
          <!--            <el-popover effect="light" trigger="hover" placement="top" width="auto">-->
          <!--              <template #reference>-->
          <!--                <el-tag>{{ scope.row.number }}</el-tag>-->
          <!--              </template>-->
          <!--            </el-popover>-->
          <!--          </template>-->
        </el-table-column>
        <el-table-column prop="alarm_type" label="报警类别" min-width="2"  align="center"/>
        <el-table-column prop="car_id" label="报警车辆编号" min-width="2"  align="center"/>
        <el-table-column prop="car_name" label="报警车辆名称" min-width="2"  align="center"/>
        <el-table-column prop="content" label="报警内容" min-width="4"  align="center"/>
        <el-table-column prop="time" label="报警时间" min-width="4" align="center" />
        <el-table-column fixed="right" label="操作" min-width="3"  align="center">
          <template #default>
            <el-button link type="primary" size="small">修改</el-button>
            <el-button link type="primary" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "alarmQuery",
  methods:{
    currStationChange(val){
      console.log(val)
    }
  }
}
</script>

<script setup>

import {
  Search,
  Download,
  CirclePlus
} from '@element-plus/icons-vue'
import {ref} from "vue";

const query_type = ref('')
const car_id = ref('')
const value3 = ref('')
const id_show = true;
const time_show = true;
const query_type_list = [
  {
    value: 'all',
    label: '所有数据',
  },
  {
    value: 'id',
    label: '提示车辆编号',
  },
  {
    value: 'time',
    label: '时间段',
  },
]
const car_id_list = [
  {
    value: '1',
    label: '铲车#1',
  },
  {
    value: '2',
    label: '铲车#2',
  },
  {
    value: '3',
    label: '铲车#3',
  },
  {
    value: '4',
    label: '挖掘机#1',
  },
  {
    value: '5',
    label: '加油车#1',
  },
  {
    value: '6',
    label: '加油车#2',
  },
]
const value1 = ref('')
const value2 = ref('')
const shortcuts = [
  {
    text: 'Last week',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: 'Last month',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: 'Last 3 months',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]

const tableData = [
  {
    alarmID: '1',
    alarm_type: 'A类报警',
    car_id: '1',
    car_name: '矿车#1',
    content: '矿车#1无法定位',
    time: '2022-05-25 08:00:00',
  },
  {
    alarmID: '2',
    alarm_type: 'B类报警',
    car_id: '2',
    car_name: '矿车#2',
    content: '矿车#2故障',
    time: '2022-05-26 10:00:00',
  },
  {
    alarmID: '3',
    alarm_type: 'A类报警',
    car_id: '3',
    car_name: '矿车#3',
    content: '矿车#3无法定位',
    time: '2022-05-27 14:00:00',
  },
  {
    alarmID: '4',
    alarm_type: 'C类报警',
    car_id: '5',
    car_name: '加油车#1',
    content: '加油车#1油不足',
    time: '2022-05-29 17:00:00',
  },
]
</script>

<style lang='scss' scoped>

.el-scrollbar__view{
  display: inline !important;
}
.main{
  width:100%;
  height:100%;
  background-color: #f3f4f9;

  .title {
    width: 100%;
    height: 8%;

    span {
      color: #496174;
      float: left;
      font-size: 28px;
      font-weight: bold;
      margin-left: 10px;
      line-height: 50px;
    }
  }

  .query{
    position: relative;
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 8%;
    border-radius: 8px;
    margin-bottom: 20px;

    .text{
      margin-left: 2%;
      font-size: 18px;
    }

    .select{
      width: 15%;
      height: 60%;
      margin-left: 2%;
      margin-top: 5px;
      text-align: center;
      text-align-last: center;

      .el-select{
        width: 100%;
        height: 100%;
        font-size: 16px;
      }
    }

    .demo-date-picker {
      display: flex;
      width: 30%;
      height: 60%;
      padding: 0;
      flex-wrap: wrap;
      .block {
        text-align: center;
        flex: 1;
      }
    }

  }

  .control{
    background-color: 	#DCDCDC;
    height: 5%;
    width: 100%;

    .el-button{
      font-size: 18px;
    }

  }

  .table{
    background: #fff;
    border-radius: 8px;
    height: 85%;
    margin-top: 2%;
  }

}
</style>