<template>
  <div class="main">
    <div class="title">
      <span>卡车装卸调度</span>
    </div>
    <div class="content">
      <div class="scheCard">
        <div class="selectCard">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>选择自动调度装卸点</span>
              </div>
            </template>
            <div class="select_item">
              <span>装卸点#1</span>
            </div>
            <div class="select_item">
              <span>装卸点#2</span>
            </div>
            <div class="select_item" style="background-color: #009CFF">
              <span>装卸点#3</span>
            </div>
            <div class="select_item">
              <span>装卸点#4</span>
            </div>
          </el-card>
        </div>
        <div class="card_result">
          <span>选中装卸点：</span>
          <span>装卸点#3</span>
        </div>
      </div>
      <div class="scheCard">
        <div class="selectCard">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>选择装卸点的卡车</span>
              </div>
            </template>
            <div class="select_item">
              <span>卡车#1</span>
            </div>
            <div class="select_item" style="background-color: #009CFF">
              <span>卡车#2</span>
            </div>
            <div class="select_item">
              <span>卡车#3</span>
            </div>
            <div class="select_item">
              <span>卡车#4</span>
            </div>
          </el-card>
        </div>
        <div class="card_result">
          <span>选中卡车：</span>
          <span>卡车#2</span>
        </div>
      </div>
      <div class="scheCard">
        <div class="selectCard">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>选择装卸品种</span>
              </div>
            </template>
            <div class="select_item" style="background-color: #009CFF">
              <span>石灰石</span>
            </div>
            <div class="select_item">
              <span>大理石</span>
            </div>
            <div class="select_item">
              <span>砂石</span>
            </div>
            <div class="select_item">
              <span>骨料</span>
            </div>
          </el-card>
        </div>
        <div class="card_result">
          <span>选中品种：</span>
          <span>石灰石</span>
        </div>
      </div>
    </div>
    <div class="control">
      <el-button type="primary" style="float:right;margin-right: 5%;width: 10%;height: 10%;font-size: 16px">确定装卸</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "upDown"
}
</script>

<script setup>
import {ref} from "vue";
  const radio1 = ref('New York')
</script>

<style lang="scss">
.main{
  height: 100%;
  width: 100%;

  .title{
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
    height: 70%;
    width: 100%;
    display: flex;
    .scheCard{
      width: 30%;
      height: 100%;
      margin-left: 2%;
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
            text-align: left;
            padding-left: 25px;
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

  .control{
    height: 100%;
    width: 100%;

  }
}
</style>