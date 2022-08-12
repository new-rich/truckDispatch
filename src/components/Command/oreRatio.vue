<template>
  <div class="main">
    <div class="title">
      <span>矿石配比计划</span>
    </div>
    <div class="Scontent">
      <div class="leftPanel">
        <div class="line">
          <el-switch
              v-model="ratio1"
              class="ml-2"
              style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949;"
              size="large"
          />
          <span style="margin-left: 10%">是否应用配矿</span>
        </div>
        <div class="line">
          <el-select v-model="posui" class="m-2" placeholder="一线破碎" size="large">
            <el-option
                v-for="item in posui_list"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </div>
        <div class="line">
          <el-select v-model="fenzu" class="m-2" placeholder="分组一" size="large">
            <el-option
                v-for="item in fenzu_list"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </div>
        <div class="line">
          <span>当前挖机：0</span>
        </div>
        <div class="line">
          <span>当前卡车：0</span>
        </div>
      </div>
      <div class="rightPanel">
        <div class="input-group">
          <span>石灰石质量下限：</span>
          <el-input v-model="kilo_down1" placeholder="" />
          <span>石灰石质量上限：</span>
          <el-input v-model="kilo_up1" placeholder="" />
          <span>氧化钙质量下限：</span>
          <el-input v-model="kilo_down2" placeholder="" />
          <span>氧化钙质量下限：</span>
          <el-input v-model="kilo_up2" placeholder="" />
          <el-switch
              v-model="ratio1"
              class="ml-2"
              style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949;margin-left: 2%"
              size="large"
          />
          <span style="margin-left: 2%">启用质量控制</span>
          <el-button color="#626aef" plain size="large" style="margin-left: 2%">确定信息</el-button>
        </div>

        <div class="baoqu">
          <div class="leftSide">
            <img style="height: 80%;width: 100%" :src="baoIcon" alt="">
            <span>1290掩体方向</span>
          </div>
          <div class="middleSide">
            <div class="line">
              <span>比例：</span>
              <el-input style="width: 20%" v-model="percent" placeholder="" />
            </div>
            <div class="line">
              <span>当前品位：54.11</span>
              <span style="margin-left: 3%">当前高程：1290</span>
              <span style="margin-left: 3%">需车数量：0</span>
            </div>
            <div class="line">
              <span>派车数量：0</span>
              <span style="margin-left: 3%">挖机数量：0</span>
              <span style="margin-left: 3%">预计小时数：0.00</span>
            </div>
          </div>
          <div class="rightSide">
            <el-button color="#626aef" plain :icon="Plus" style="float: left;margin-left: 5%;margin-top: 5%"></el-button>
            <span style="float: left;margin-left: 2%;margin-top: 5%">增加挖机</span>
          </div>
        </div>

        <div class="baoqu">
          <div class="leftSide">
            <img style="height: 80%;width: 100%" :src="baoIcon" alt="">
            <span>1215 2018-8-17</span>
          </div>
          <div class="middleSide">
            <div class="line">
              <span>比例：</span>
              <el-input style="width: 20%" v-model="percent" placeholder="" />
            </div>
            <div class="line">
              <span>当前品位：52.04</span>
              <span style="margin-left: 3%">当前高程：1215</span>
              <span style="margin-left: 3%">需车数量：0</span>
            </div>
            <div class="line">
              <span>派车数量：0</span>
              <span style="margin-left: 3%">挖机数量：0</span>
              <span style="margin-left: 3%">预计小时数：0.00</span>
            </div>
          </div>
          <div class="rightSide">
            <el-button color="#626aef" plain :icon="Plus" style="float: left;margin-left: 5%;margin-top: 5%"></el-button>
            <span style="float: left;margin-left: 2%;margin-top: 5%">增加挖机</span>
          </div>
        </div>
        <div class="plusLine">
          <el-button color="#626aef" plain :icon="Plus" style="float: left;margin-left: 1%;margin-top: 1%"></el-button>
          <span style="float: left;margin-left: 1%;margin-top: 1%">增加爆区</span>
        </div>
      </div>
    </div>
    <div class="Scontent">
      <div class="leftPanel">
        <div class="line">
          <el-switch
              v-model="ratio1"
              class="ml-2"
              style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949;"
              size="large"
          />
          <span style="margin-left: 10%">是否应用配矿</span>
        </div>
        <div class="line">
          <el-select v-model="posui2" class="m-2" placeholder="二线破碎" size="large">
            <el-option
                v-for="item in posui_list"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </div>
        <div class="line">
          <el-select v-model="fenzu2" class="m-2" placeholder="分组一" size="large">
            <el-option
                v-for="item in fenzu_list"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </div>
        <div class="line">
          <span>当前挖机：0</span>
        </div>
        <div class="line">
          <span>当前卡车：0</span>
        </div>
      </div>
      <div class="rightPanel">
        <div class="input-group">
          <span>石灰石质量下限：</span>
          <el-input v-model="kilo_down1" placeholder="" />
          <span>石灰石质量上限：</span>
          <el-input v-model="kilo_up1" placeholder="" />
          <span>氧化钙质量下限：</span>
          <el-input v-model="kilo_down2" placeholder="" />
          <span>氧化钙质量下限：</span>
          <el-input v-model="kilo_up2" placeholder="" />
          <el-switch
              v-model="ratio1"
              class="ml-2"
              style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949;margin-left: 2%"
              size="large"
          />
          <span style="margin-left: 2%">启用质量控制</span>
          <el-button color="#626aef" plain size="large" style="margin-left: 2%">确定信息</el-button>
        </div>
        <div class="plusLine">
          <el-button color="#626aef" plain :icon="Plus" style="float: left;margin-left: 1%;margin-top: 1%"></el-button>
          <span style="float: left;margin-left: 1%;margin-top: 1%">增加爆区</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "oreRatio",
  data(){
    return{
      baoIcon:require('@/assets/baoqu.svg'),
    }
  }
}
</script>

<script setup>
import { ref } from 'vue'

import {
  Plus
} from '@element-plus/icons-vue'

const ratio1 = ref(true)
const posui = ref('')
const fenzu = ref('')
const posui2 = ref('')
const fenzu2 = ref('')
const kilo_down1=ref('')
const kilo_up1=ref('')
const kilo_down2=ref('')
const kilo_up2=ref('')
const percent = ref('')

const posui_list = [
  {
    value: '1',
    label: '一线破碎',
  },
  {
    value: '2',
    label: '二线破碎',
  },
  {
    value: '3',
    label: '三线破碎',
  },
]

const fenzu_list = [
  {
    value: '1',
    label: '分组一',
  },
  {
    value: '2',
    label: '分组二',
  },
  {
    value: '3',
    label: '分组三',
  },
]
</script>

<style  lang="scss" scoped>
.main {
  height: 100%;
  width: 100%;

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

  .Scontent{
    height: 45%;
    width: 100%;
    background-color: #EBEDF0;
    border:5px solid #409EFF;
    border-radius:25px;
    display: flex;
    margin-top: 5px;

    .leftPanel{
      height: 100%;
      width: 15%;

      .line{
        width: 100%;

        height: 10%;
        margin-top: 10%;

        span{
          font-size: 18px;
        }
      }
    }

    .rightPanel{
      height: 100%;
      width: 85%;

      .input-group{
        height: 15%;
        width: 100%;
        border:2px solid #409EFF;
        border-radius:25px;
        text-align: left;

        .el-input{
          width: 8%;
          height: 80%;
        }

        span{
          font-size: 16px;
          margin-left: 1%;
        }
      }

      .baoqu{
        height: 32%;
        border:2px solid #409EFF;
        border-radius:25px;
        margin-top: 1%;
        display: flex;

        .leftSide{
          width: 20%;
          height: 100%;
          display: inline-block;
        }

        .middleSide{
          width: 30%;
          height: 100%;

          .line{
            width:100%;
            height:20%;
            margin-top: 2%;
            text-align: left;

            span{
              font-size: 16px;
            }
          }
        }

        .rightSide{
          width: 50%;
          height: 100%;
        }
      }

      .plusLine{
        height: 3%;
        width: 100%;
      }
    }
  }
}
</style>