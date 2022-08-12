<template>
  <div class="main">
    <div class="title">
      <span>强制设备故障</span>
    </div>
    <div class="content">
      <div class="scheCard">
        <div class="selectCard">
          <div class="selectControl">
            <div class="border">
              <span class="border_title">请选择目标车辆类型</span>
              <el-radio-group v-model="targetRadio" size="large">
                <el-radio :label="3">矿车</el-radio>
                <el-radio :label="6">铲装设备</el-radio>
              </el-radio-group>
            </div>
          </div>
          <el-card class="box-card" :body-style="{ padding: 0 }">
            <template #header>
              <div class="card-header">
                <span>选择目标车辆</span>
              </div>
            </template>
            <div class="select_item" v-for='(item,index) in car_arr' :style="item.isActive == true ? { backgroundColor: '#009CFF' } : { backgroundColor: 'white' }" @click='car_select(index)' :key="index">
              <span>{{ item.name }}</span>
            </div>
          </el-card>
        </div>
      </div>
      <div class="rightPanel">
        <div class="cardControl">
          <div class="border">
            <span class="border_title">请选择故障类型</span>
            <el-radio-group v-model="errorRadio" size="large" :disabled='secondDis'>
              <el-radio :label="3">故障停机</el-radio>
              <el-radio :label="6">其他停机</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="twoCard">
          <div class="scheCard">
            <div class="selectCard">
              <el-card class="box-card" :body-style="{ padding: 0 }">
                <template #header>
                  <div class="card-header">
                    <span>选择故障类别</span>
                  </div>
                </template>
                <div class="select_item"  v-for='(item,index) in type_arr' :style="item.isActive == true ? { backgroundColor: '#009CFF' } : { backgroundColor: 'white' }" :class="secondDis==true?'noClick':''"  @click='type_select(index)' :key="index">
                  <span>{{ item.name }}</span>
                </div>
              </el-card>
            </div>
          </div>
          <div class="scheCard" :disabled='thirdDis'>
            <div class="selectCard">
              <el-card class="box-card" :body-style="{ padding: 0 }">
                <template #header>
                  <div class="card-header">
                    <span>选择具体故障</span>
                  </div>
                </template>
                <div class="select_item"  v-for='(item,index) in error_arr' :style="item.isActive == true ? { backgroundColor: '#009CFF' } : { backgroundColor: 'white' }" :class="thirdDis==true?'noClick':''" @click='error_select(index)' :key="index">
                  <span>{{ item.name }}</span>
                </div>
              </el-card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="control">
      <div class="result1">
        <span style="color:red;">故障信息：  </span>
        <span>{{carSelect}}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;的故障为</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;{{errorSelect}}</span>
      </div>
      <el-button color="#626aef" plain size="large">返回修理</el-button>
      <el-button color="#626aef" plain size="large">就地修理</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "qiangGu",
  data(){
    return{
      car_arr : [
        {
          name : '矿车#1',
          isActive : false,
        },
        {
          name : '矿车#2',
          isActive : false,
        },
        {
          name : '矿车#3',
          isActive : false,
        },
        {
          name : '矿车#4',
          isActive : false,
        }
      ],
      type_arr : [
        {
          name : '机械故障1',
          isActive : false,
        },
        {
          name : '机械故障2',
          isActive : false,
        },
        {
          name : '电气故障',
          isActive : false,
        },
        {
          name : '其他故障',
          isActive : false,
        }
      ],
      error_arr: [
        {
          name : '刹车系统故障',
          isActive : false,
        },
        {
          name : '漏气漏油',
          isActive : false,
        },
        {
          name : '传动部位故障',
          isActive : false,
        },
        {
          name : '前后桥故障',
          isActive : false,
        },
        {
          name : '变速箱故障',
          isActive : false,
        },
        {
          name : '及时焊接故障',
          isActive : false,
        },
        {
          name : '发动机故障',
          isActive : false,
        },
        {
          name : '差速器故障',
          isActive : false,
        },
        {
          name : 'PTO故障',
          isActive : false,
        },
        {
          name : '轮胎故障',
          isActive : false,
        },
        {
          name : '灯光故障',
          isActive : false,
        },
        {
          name : '空调故障',
          isActive : false,
        },
      ],
      carSelect:"",
      typeSelect:"",
      errorSelect:"",
      secondDis:true,
      thirdDis:true,
    }
  },
  methods:{
    fn(index){
      this.pointSelect = this.point_arr[index].name;
      for (let i in this.point_arr) {
        if (index == i) {
          this.point_arr[i].isActive = !this.point_arr[i].isActive;
        } else {
          this.point_arr[i].isActive = false;
        }
      }
    },
    car_select(index){
      this.carSelect = this.car_arr[index].name;
      for (let i in this.car_arr) {
        if (index == i) {
          this.car_arr[i].isActive = !this.car_arr[i].isActive;
        } else {
          this.car_arr[i].isActive = false;
        }
      }
      var flag = true;
      for (let i in this.car_arr) {
        if(this.car_arr[i].isActive){
          this.secondDis = false;
          flag = false;
        }
      }
      if(flag){
        console.log(1)
        this.secondDis = true;
        this.thirdDis = true;
        this.typeSelect = "";
        for (let i in this.type_arr){
          this.type_arr[i].isActive = false;
        }
        this.errorSelect = "";
        for (let i in this.error_arr){
          this.error_arr[i].isActive = false;
        }
      }
    },
    type_select(index){
      this.typeSelect = this.type_arr[index].name;
      for (let i in this.type_arr) {
        if (index == i) {
          this.type_arr[i].isActive = !this.type_arr[i].isActive;
        } else {
          this.type_arr[i].isActive = false;
        }
      }
      var flag = true;
      for (let i in this.type_arr) {
        if(this.type_arr[i].isActive){
          this.thirdDis = false;
          flag = false;
        }
      }
      if(flag){
        this.thirdDis = true;
        this.errorSelect = "";
        for (let i in this.error_arr){
          this.error_arr[i].isActive = false;
        }
      }
    },
    error_select(index){
      this.errorSelect = this.error_arr[index].name;
      for (let i in this.error_arr) {
        if (index == i) {
          this.error_arr[i].isActive = !this.error_arr[i].isActive;
        } else {
          this.error_arr[i].isActive = false;
        }
      }
    },
  }
}
</script>

<script setup>
import {ref} from "vue";

const targetRadio = ref(3)

const errorRadio = ref(3)

</script>

<style lang="scss" scoped>


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
    .rightPanel{
      width: 68%;
      height: 100%;
      margin-left: 2%;

      .cardControl{
        width: 100%;
        height: 18%;
        margin-top: -1%;
          .border{
            width:95%;
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

      .twoCard{
        width: 100%;
        height: 100%;
        display: flex;

        .scheCard{
          width: 45%;
          height: 100%;
          margin-left: 2%;
          .card_title{
            height: 5%;
            width: 100%;
          }

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

              .el-card ::v-deep .el-card__body{
                padding: 0 !important;
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
  }

  .control{
    height: 15%;
    width: 100%;
    margin-top: 5%;
    .result1{
      font-size: 20px;
    }
    .el-button{
      float: right;
      margin-right: 5%;

    }
  }

  .noClick{
    pointer-events: none;
    color:gray;
  }
}
</style>