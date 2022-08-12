<template>
  <div class="main">
    <div class="title">
      <span>定铲派车</span>
    </div>
    <div class="content">
      <div class="leftPanel">
        <div class="selectControl">
          <div class="border">
            <span class="border_title">选择车辆类型</span>
            <el-radio-group v-model="radio" size="large">
              <el-radio :label="3">矿车</el-radio>
              <el-radio :label="6">加油车</el-radio>
              <el-radio :label="9">挖掘机</el-radio>
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
                <div class="select_item">
                  <span>矿车#1</span>
                </div>
                <div class="select_item"  style="background-color: #009CFF">
                  <span>矿车#2</span>
                </div>
                <div class="select_item">
                  <span>矿车#3</span>
                </div>
                <div class="select_item">
                  <span>矿车#4</span>
                </div>
              </el-card>
            </div>
            <!--              <div class="card_result">-->
            <!--                <span>选中装卸点：</span>-->
            <!--                <span>装卸点#3</span>-->
            <!--              </div>-->
          </div>
        </div>
      </div>
      <div class="rightPanel">
        <div class="statusCard">
          <div class="selectCard">
            <el-card class="box-card" :body-style="{ padding: 0 }">
              <template #header>
                <div class="card-header">
                  <span>选择装车点</span>
                </div>
              </template>
              <div class="select_item">
                <span>1号装车点</span>
              </div>
              <div class="select_item">
                <span>2号装车点</span>
              </div>
              <div class="select_item" style="background-color: #009CFF">
                <span>3号装车点</span>
              </div>
              <div class="select_item">
                <span>4号装车点</span>
              </div>
              <div class="select_item">
                <span>5号装车点</span>
              </div>
            </el-card>
          </div>
        </div>
      </div>
    </div>
    <div class="con_result">
      <div class="result1">
        <span>即将派遣>>  </span>
        <span>矿车#2</span>
      </div>
      <div class="result2">
        <span>前往>>  </span>
        <span>4号装车点</span>
      </div>
      <el-button color="#626aef" plain size="large">前往装车</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "dingpai"
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
