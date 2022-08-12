<template>
  <div class="main">
    <div class="title">
      <span>卡车装卸调度</span>
    </div>
    <div class="content">
      <div class="scheCard">
        <div class="selectCard">
          <el-card class="box-card" :body-style="{ padding: 0 }">
            <template #header>
              <div class="card-header">
                <span>选择自动调度装卸点</span>
              </div>
            </template>
            <div class="select_item" v-for='(item,index) in point_arr' :style="item.isActive == true ? { backgroundColor: '#009CFF' } : { backgroundColor: 'white' }" @click='fn(index)' :key="index">
              <span>{{ item.name }}</span>
            </div>
          </el-card>
        </div>
        <div class="card_result">
          <span>选中装卸点：</span>
          <span>{{ pointSelect }}</span>
        </div>
      </div>
      <div class="scheCard">
        <div class="selectCard">
          <el-card class="box-card" :body-style="{ padding: 0 }">
            <template #header>
              <div class="card-header">
                <span>选择装卸点的卡车</span>
              </div>
            </template>
            <div class="select_item"  v-for='(item,index) in car_arr' :style="item.isActive == true ? { backgroundColor: '#009CFF' } : { backgroundColor: 'white' }" @click='car_select(index)' :key="index">
              <span>{{ item.name }}</span>
            </div>
<!--            <div class="select_item" style="background-color: #009CFF">-->
<!--              <span>卡车#2</span>-->
<!--            </div>-->
<!--            <div class="select_item">-->
<!--              <span>卡车#3</span>-->
<!--            </div>-->
<!--            <div class="select_item">-->
<!--              <span>卡车#4</span>-->
<!--            </div>-->
          </el-card>
        </div>
        <div class="card_result">
          <span>选中卡车：</span>
          <span>{{ carSelect }}</span>
        </div>
      </div>
      <div class="scheCard">
        <div class="selectCard">
          <el-card class="box-card" :body-style="{ padding: 0 }">
            <template #header>
              <div class="card-header">
                <span>选择装卸品种</span>
              </div>
            </template>
            <div class="select_item"  v-for='(item,index) in type_arr' :style="item.isActive == true ? { backgroundColor: '#009CFF' } : { backgroundColor: 'white' }" @click='type_select(index)' :key="index">
              <span>{{ item.name }}</span>
            </div>
<!--            <div class="select_item">-->
<!--              <span>大理石</span>-->
<!--            </div>-->
<!--            <div class="select_item">-->
<!--              <span>砂石</span>-->
<!--            </div>-->
<!--            <div class="select_item">-->
<!--              <span>骨料</span>-->
<!--            </div>-->
          </el-card>
        </div>
        <div class="card_result">
          <span>选中品种：</span>
          <span>{{ typeSelect }}</span>
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
  name: "upDown",
  data(){
    return{
      point_arr : [
        {
          name : '装卸点#1',
          isActive : true,
        },
        {
          name : '装卸点#2',
          isActive : false,
        },
        {
          name : '装卸点#3',
          isActive : false,
        },
        {
          name : '装卸点#4',
          isActive : false,
        }
      ],
      car_arr : [
        {
          name : '卡车#1',
          isActive : false,
        },
        {
          name : '卡车#2',
          isActive : true,
        },
        {
          name : '卡车#3',
          isActive : false,
        },
        {
          name : '卡车#4',
          isActive : false,
        }
      ],
      type_arr: [
        {
          name : '石灰石',
          isActive : true,
        },
        {
          name : '大理石',
          isActive : false,
        },
        {
          name : '砂石',
          isActive : false,
        },
        {
          name : '骨料',
          isActive : false,
        }
      ],
      pointSelect:"装卸点#1",
      carSelect:"卡车#2",
      typeSelect:"石灰石",
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
    },
  }
}
</script>

<script setup>


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
  }

  .control{
    height: 100%;
    width: 100%;

  }
}
</style>