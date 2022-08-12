<template>
  <div class="main">
    <div class="title">
      <span>设备信息查看</span>
    </div>

    <div class="query">
      <div class="text">
        设备搜索：
      </div>
      <div class="select">
        <el-select v-model="query_type" class="m-2" placeholder="所有设备" size="large" @change="currStationChange">
          <el-option
              v-for="item in query_type_list"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </div>
      <div class="select">
        <el-select v-model="status" class="m-2" placeholder="所有状态" size="large">
          <el-option
              v-for="item in status_list"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </div>
      <el-button plain style="margin-left: 3%;width: 5%;height: 50%;font-size: 18px;">重置</el-button>
      <el-button type="primary" :icon="Search" style="margin-left: 3%;width: 5%;height: 50%;font-size: 18px;">查询</el-button>
    </div>
    <div class="table">
      <el-table :data="tableData" border size="large">
        <el-table-column fixed prop="deviceID" label="设备ID" min-width="2" align="center">
          <!--          <template #default="scope">-->
          <!--            <el-popover effect="light" trigger="hover" placement="top" width="auto">-->
          <!--              <template #reference>-->
          <!--                <el-tag>{{ scope.row.number }}</el-tag>-->
          <!--              </template>-->
          <!--            </el-popover>-->
          <!--          </template>-->
        </el-table-column>
        <el-table-column prop="deviceName" label="设备名称" min-width="2" align="center"/>
        <el-table-column prop="deviceType" label="设备类型" min-width="2" align="center"/>
        <el-table-column prop="status" label="设备状态" min-width="2" align="center"/>
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
  name: "deviceStatus",
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
const status = ref('')
const value3 = ref('')
const query_type_list = [
  {
    value: 'all',
    label: '所有设备',
  },
  {
    value: 'trans',
    label: '运输设备',
  },
  {
    value: 'chan',
    label: '铲装设备',
  },
  {
    value: 'you',
    label: '加油设备',
  },
]
const status_list = [
  {
    value: 'all',
    label: '所有状态',
  },
  {
    value: 'normal',
    label: '正常',
  },
  {
    value: 'abnormal',
    label: '异常',
  },
]
const value1 = ref('')
const value2 = ref('')

const tableData = [
  {
    deviceID: '1',
    deviceName: '矿车#1',
    deviceType: '运输设备',
    status: '正常',
  },
  {
    deviceID: '2',
    deviceName: '矿车#2',
    deviceType: '运输设备',
    status: '正常',
  },
  {
    deviceID: '5',
    deviceName: '铲车#1',
    deviceType: '铲装设备',
    status: '正常',
  },
  {
    deviceID: '8',
    deviceName: '加油车#1',
    deviceType: '加油设备',
    status: '异常',
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