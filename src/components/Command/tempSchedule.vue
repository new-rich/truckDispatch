<template>
  <div class="main">
    <div class="query">
      <div class="input">
        <el-input
            v-model="num_input"
            class="input-with-select"
            placeholder="请输入编号"
        >
        <template #append>
          <el-button :icon="Search" />
        </template>
        </el-input>
      </div>
      <div class="select">
        <el-select v-model="value1" class="m-2" placeholder="车辆类型" size="large">
          <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </div>
      <div class="select">
        <el-select v-model="value2" class="m-2" placeholder="工作状态" size="large">
          <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </div>
      <div class="select">
        <el-select v-model="value3" class="m-2" placeholder="所处地点" size="large">
          <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          />
        </el-select>
      </div>
      <el-button plain style="margin-left: 3%;width: 5%;height: 50%;">重置</el-button>
      <el-button type="primary" :icon="Search" style="margin-left: 3%;width: 5%;height: 50%;">查询</el-button>
    </div>
    <div class="table">
      <el-table :data="tableData" border size="large">
        <el-table-column fixed prop="number" label="车辆编号" min-width="2">
          <template #default="scope">
            <el-popover effect="light" trigger="hover" placement="top" width="auto">
              <template #reference>
                <el-tag>{{ scope.row.number }}</el-tag>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="车辆名称" min-width="2" />
        <el-table-column prop="state" label="当前状态" min-width="2" />
        <el-table-column prop="position" label="当前位置" min-width="3" />
        <el-table-column prop="address" label="Address" min-width="5" />
        <el-table-column prop="zip" label="Zip" min-width="3" />
        <el-table-column fixed="right" label="操作" min-width="3">
          <template #default>
            <el-button link type="primary" size="small" @click="handleClick">进行调度</el-button>
            <el-button link type="primary" size="small">停止工作</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "tempSchedule"
}
</script>

<script setup>

import {
  Search
} from '@element-plus/icons-vue'
import {ref} from "vue";

const num_input = ref('')
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const options1 = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
]
const options2 = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },

]
const options3 = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
]

const tableData = [
  {
    number: '1',
    name: '挖掘机#1',
    state: '工作中',
    position: '采场',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    number: '2',
    name: '卡车#1',
    state: '空闲',
    position: '加油站',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    number: '3',
    name: '挖掘机#2',
    state: '工作中',
    position: '破碎站',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    number: '4',
    name: '加油车#1',
    state: '工作中',
    position: '加油站',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
]
</script>

<style lang='scss'>

.el-scrollbar__view{
  display: inline !important;
}
.main{
  width:100%;
  height:100%;
  background-color: #f3f4f9;

  .query{
    position: relative;
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 8%;
    border-radius: 8px;
    margin-bottom: 20px;

    .input{
      width: 15%;
      height: 60%;
      margin-left: 2%;

      .el-input{
        width: 100%;
        height: 100%;
        font-size: 16px;
      }
    }

    .select{
      width: 15%;
      height: 60%;
      margin-left: 2%;
      margin-top: 5px;

      .el-select{
        width: 100%;
        height: 100%;
        font-size: 16px;
      }
    }

  }

  .table{
    background: #fff;
    border-radius: 8px;
    height: 90%;
  }
}
</style>