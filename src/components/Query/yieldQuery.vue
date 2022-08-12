<template>
  <div class="main">
    <div class="title">
      <span>生产数据查询</span>
    </div>

    <div class="query">
      <div class="text">
        选择查询类型：
      </div>
      <div class="radioSelect">
          <el-radio-group v-model="radio" size="large">
            <el-radio :label="3">运输设备</el-radio>
            <el-radio :label="6">铲装设备</el-radio>
            <el-radio :label="9">卸车点</el-radio>
          </el-radio-group>
        </div>
      <div class="select" v-show="id_show">
        <el-select v-model="car_id" class="m-2" placeholder="矿车#1" size="large">
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
      <span style="font-size: 24px;float: left;margin-left: 2%;margin-top: 8px">总车数：45</span>
      <span style="font-size: 24px;float: left;margin-left: 10%;margin-top: 8px">总产量：XXX吨</span>
      <el-button type="primary" :icon="Download" style="margin-right: 2%;width: 5%;height: 80%;float: right;margin-top: 5px">导出</el-button>
      <el-button type="primary" :icon="CirclePlus" style="margin-right: 5%;width: 5%;height: 80%;float: right;margin-top: 5px">添加</el-button>
    </div>
    <div class="table">
      <el-table :data="tableData" border size="large">
        <el-table-column fixed prop="yieldID" label="生产数据ID" min-width="2" align="center">
          <!--          <template #default="scope">-->
          <!--            <el-popover effect="light" trigger="hover" placement="top" width="auto">-->
          <!--              <template #reference>-->
          <!--                <el-tag>{{ scope.row.number }}</el-tag>-->
          <!--              </template>-->
          <!--            </el-popover>-->
          <!--          </template>-->
        </el-table-column>
        <el-table-column prop="transDevice" label="运输设备" min-width="2" align="center"/>
        <el-table-column prop="chanDevice" label="铲装设备" min-width="2" align="center"/>
        <el-table-column prop="downPlace" label="卸点" min-width="2" align="center"/>
        <el-table-column prop="type" label="生产品种" min-width="4" align="center"/>
        <el-table-column prop="amount" label="产量" min-width="4" align="center"/>
        <el-table-column prop="time" label="生产时间" min-width="3" align="center"/>
        <el-table-column fixed="right" label="操作" min-width="3" align="center">
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
  name: "yieldQuery",
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

const car_id = ref('')
const value3 = ref('')
const id_show = true;
const time_show = true;
const radio = ref(3)
const car_id_list = [
  {
    value: '1',
    label: '矿车#1',
  },
  {
    value: '2',
    label: '矿车#2',
  },
  {
    value: '3',
    label: '矿车#3',
  },
  {
    value: '4',
    label: '矿车#4',
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
    yieldID: '1',
    transDevice: '卡车#1',
    chanDevice: '铲车#2',
    downPlace: '卸点#1',
    type: '大理石',
    amount: '1.6',
    time: '2022-05-25 10:00:00',
  },
  {
    yieldID: '2',
    transDevice: '矿车#1',
    chanDevice: '铲车#3',
    downPlace: '卸点#2',
    type: '砂石',
    amount: '2.1',
    time: '2022-05-25 10:00:00',
  },
  {
    yieldID: '3',
    transDevice: '卡车#2',
    chanDevice: '铲车#1',
    downPlace: '卸点#2',
    type: '石灰石',
    amount: '1.4',
    time: '2022-05-25 10:00:00',
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
    margin-bottom: 2%;

    .text{
      margin-left: 2%;
      font-size: 18px;
    }

    .select{
      width: 15%;
      height: 60%;
      margin-left: 5%;
      margin-top: 5px;
      text-align: center;
      text-align-last: center;

      .el-select{
        width: 100%;
        height: 100%;
        font-size: 16px;
      }
    }

    .radioSelect{
      .border{
        width:100%;
        height:70%;
        border:4px dashed  #ebcbbe;
        margin-top: 1%;

        .border_title{
          display:block;
          width:150px;
          height:30px;
          position:relative;
          top:-15px;
          text-align: center;
          font-size: 18px;
          background-color: rgb(243, 244, 249);
        }

        .el-radio-group{
          width: 100%;
          height: 100%;

          .el-radio{
            width: 25%;
            margin-left: 2%;
          }

          .el-radio.el-radio--large .el-radio__label{
            font-size: 18px !important;
          }
        }
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