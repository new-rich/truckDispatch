<template>
    <div class="main">
      <div class="title">
        <span>强制命令下达</span>
      </div>
      <div class="content">
        <div class="leftPanel">
          <div class="selectControl">
            <div class="border">
              <span class="border_title">选择发送目标类型</span>
              <el-radio-group v-model="radio" size="large">
                <el-radio :label="3">矿车</el-radio>
                <el-radio :label="6">铲装设备</el-radio>
                <el-radio :label="9">卸车点</el-radio>
              </el-radio-group>
            </div>
          </div>
          <div class="selectContent">
            <div class="sCard">
              <div class="selectCard">
                <el-card class="box-card" :body-style="{ padding: 0 }">
                  <template #header>
                    <div class="card-header">
                      <span>选择具体目标</span>
                    </div>
                  </template>
                  <div class="select_item" v-for='(item,index) in target_arr' :style="item.isActive == true ? { backgroundColor: '#009CFF' } : { backgroundColor: 'white' }" @click='target_select(index)' :key="index">
                    <span>{{ item.name }}</span>
                  </div>
<!--                  <div class="select_item"  style="background-color: #009CFF">-->
<!--                    <span>矿车#2</span>-->
<!--                  </div>-->
<!--                  <div class="select_item">-->
<!--                    <span>装卸点#3</span>-->
<!--                  </div>-->
<!--                  <div class="select_item">-->
<!--                    <span>装卸点#4</span>-->
<!--                  </div>-->
                </el-card>
              </div>
            </div>
          </div>
        </div>
        <div class="rightPanel">
          <div class="selectControl">
            <div class="border">
              <span class="border_title">中心控制初始化和复位</span>
              <el-button type="primary" :icon="Remove" size="large">系统初始化</el-button>
              <el-button type="primary" :icon="Refresh" size="large">系统复位</el-button>
              <el-button plain size="large">备份数据库</el-button>
            </div>
          </div>
          <div class="statusCard">
            <div class="selectCard">
              <el-card class="box-card" :body-style="{ padding: 0 }">
                <template #header>
                  <div class="card-header">
                    <span>选择状态命令</span>
                  </div>
                </template>
                <div class="select_item" v-for='(item,index) in command_arr' :style="item.isActive == true ? { backgroundColor: '#009CFF' } : { backgroundColor: 'white' }" @click='command_select(index)' :key="index">
                  <span>{{ item.name }}</span>
                </div>
<!--                <div class="select_item">-->
<!--                  <span>吃饭</span>-->
<!--                </div>-->
<!--                <div class="select_item" style="background-color: #009CFF">-->
<!--                  <span>干零活</span>-->
<!--                </div>-->
<!--                <div class="select_item">-->
<!--                  <span>加油</span>-->
<!--                </div>-->
<!--                <div class="select_item">-->
<!--                  <span>加油</span>-->
<!--                </div>-->
<!--                <div class="select_item">-->
<!--                  <span>避炮</span>-->
<!--                </div>-->
<!--                <div class="select_item">-->
<!--                  <span>正常停机</span>-->
<!--                </div>-->
<!--                <div class="select_item">-->
<!--                  <span>天气原因</span>-->
<!--                </div>-->
              </el-card>
            </div>
          </div>
        </div>
      </div>
      <div class="con_result">
        <div class="result1">
          <span>即将对>>  </span>
          <span>{{ targetSelect }}</span>
        </div>
        <div class="result2">
          <span>下达指令>>  </span>
          <span>{{ commandSelect }}</span>
        </div>
        <el-button color="#626aef" plain size="large">下达强制命令</el-button>
      </div>
    </div>
</template>

<script>
export default {
  name: "qiangCommand",
  data(){
    return{
      target_arr : [
        {
          name : '矿车#1',
          isActive : true,
        },
        {
          name : '矿车#2',
          isActive : false,
        },
        {
          name : '装卸点#1',
          isActive : false,
        },
        {
          name : '装卸点#2',
          isActive : false,
        }
      ],
      command_arr: [
        {
          name : '吃饭',
          isActive : false,
        },
        {
          name : '干零活',
          isActive : true,
        },
        {
          name : '加油',
          isActive : false,
        },
        {
          name : '避炮',
          isActive : false,
        },
        {
          name : '正常停机',
          isActive : false,
        },
        {
          name : '天气原因',
          isActive : false,
        }
      ],
      targetSelect:"矿车#1",
      commandSelect:"干零活",
    }
  },
  methods: {
    target_select(index) {
      this.targetSelect = this.target_arr[index].name;
      for (let i in this.target_arr) {
        if (index == i) {
          this.target_arr[i].isActive = !this.target_arr[i].isActive;
        } else {
          this.target_arr[i].isActive = false;
        }
      }
    },
    command_select(index) {
      this.commandSelect = this.command_arr[index].name;
      for (let i in this.command_arr) {
        if (index == i) {
          this.command_arr[i].isActive = !this.command_arr[i].isActive;
        } else {
          this.command_arr[i].isActive = false;
        }
      }
    },
  }
}
</script>

<script setup>
import { ref } from 'vue'
import { Remove, Refresh } from '@element-plus/icons-vue'
     const radio = ref(3)
</script>

<style lang="scss">


.main {
  height: 100%;
  width: 100%;

  .title {
    width: 100%;
    height: 10%;

    span{
      color: #496174;
      float: left;
      font-size: 28px;
      font-weight: bold;
      margin-left: 10px;
      line-height: 50px;
    }
  }

  .content{
    width: 100%;
    height: 80%;
    display: flex;
    .leftPanel{
      width: 45%;
      height: 100%;
      .selectControl{
        height: 20%;
        width: 100%;

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
      .selectContent{
        height: 80%;
        width: 100%;
        .sCard{
          width: 100%;
          height: 100%;
          .card_title{
            height: 5%;
            width: 100%;

          }
          .selectCard{
            height: 85%;
            width: 100%;
            .box-card{
              width: 100%;
              height: 100%;
              .card-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 18px;
              }
              .el-card__body{
                padding: 0 !important;
              }
              .select_item{
                width: 100%;
                font-size: 18px;
                height: 40px;
                line-height: 40px;
                text-align: center;
              }
              .select_item:hover{
                background-color:#C0C4CC  !important;
                cursor:pointer
              }
            }
          }
          .card_result{
            height: 5%;
            width: 100%;
            margin-top: 3%;
            font-size: 18px;
          }
        }
      }
    }

    .rightPanel{
      width: 45%;
      height: 100%;
      margin-left: 5%;
      .selectControl {
        height: 20%;
        width: 100%;

        .border {
          width: 100%;
          height: 80%;
          border: 4px dashed #496174;
          margin-top: 1%;

          .border_title {
            display: block;
            width: 150px;
            height: 30px;
            position: relative;
            top: -15px;
            text-align: center;
            font-size: 18px;
            background-color: rgb(243, 244, 249);
          }

          .el-button{
            width: 25%;
            height: 50%;
            font-size: 16px !important;
          }
        }
      }

      .statusCard{
        height: 80%;
        width: 100%;

        .selectCard {
          height: 85%;
          width: 100%;

          .box-card {
            width: 100%;
            height: 100%;

            .card-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-size: 18px;
            }

            .el-card__body {
              padding: 0 !important;
            }

            .select_item {
              width: 100%;
              font-size: 18px;
              height: 40px;
              line-height: 40px;
              text-align: center;
            }

            .select_item:hover {
              background-color: #C0C4CC !important;
              cursor: pointer
            }
          }
        }
      }
    }
  }
  .con_result{
    height: 10%;
    width: 100%;
    font-size: 24px;

    .result1{
    }

    .result2{
      margin-left: 10%;
    }
    .el-button{
      float: right;
      margin-right: 5%;

    }
  }
}
</style>
