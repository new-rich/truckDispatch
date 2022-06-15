<template>
  <div class="mapMain">
    <div class="info">
      <div class="infoHeader">
        <p>卡车调度系统</p>
        <img class="infoHeaderImg" :src="headImg" alt="">
        <div class="item1">
          <p class="titleP">二维显示</p>
          <img :src="kImg1" alt="">
        </div>
        <div class="item2">
          <p class="titleP">三维显示</p>
          <img :src="kImg2" alt="">
        </div>
      </div>
    </div>
    <div class="infoContent">
      <div class="infoContentL">
        <!-- @click.self="big" -->
        <div class="Citem1">
          <img class="bgImg" :src="bgImg" alt="">
          <p>自动调度车辆数：5辆</p>
          <div class="Citem1Content">
          </div>
        </div>
        <div class="Citem2">
          <img class="bgImg" :src="bgImg2" alt="">
          <div class="Citem2Content">
          </div>
        </div>
      </div>
      <div class="infoContentM">
        <div class="towD">
          <div class="row">
            <div class="place">
              <div style="position: absolute;z-index: -1">
                <div style="position: absolute;z-index: -1" id="caichang">
                  <img class="placeImg" :src="bgImg" alt="">
                </div>
                <img class="placeIcon" :src="caiIcon" alt="">
              </div>
              <div style="margin-left: 20px;margin-top: 20px;float: left">
                <el-popover
                    placement="top-start"
                    title="挖掘机"
                    width="400"
                    trigger="hover">
                  <ul class="tips-content">
                    <li>设备编号：挖掘机#1</li>
                    <li>位置：</li>
                    <li>状态：工作中</li>
                  </ul>
                  <template #reference>
                    <img class="carIcon" :src="wacarIcon" alt="">
                  </template>
                </el-popover>
              </div>
              <div style="margin-left: 20px;margin-top: 20px;float: left">
                <img class="carIcon" :src="wacarIcon" alt="">
              </div>
              <div style="margin-left: 10px;margin-top: 20px;float: left">
                <img class="carIcon" :src="chancarIcon" alt="">
              </div>
              <div style="margin-left: 5px;margin-top: 30px;float: left">
                <img class="carIcon" :src="zuancarIcon" alt="">
              </div>
              <div style="margin-left: 5px;margin-top: 30px;float: left">
                <img class="carIcon" :src="zuancarIcon" alt="">
              </div>
            </div>
            <!--            <div class="road">-->

            <!--            </div>-->
            <!--            <div class="road">-->

            <!--            </div>-->
            <div class="place" style="margin-left: 450px">
              <div style="position: absolute;z-index: -1">
                <div style="position: absolute;z-index: -1" id="xiulichang">
                  <img class="placeImg" :src="bgImg" alt="">
                </div>
                <img class="placeIcon" :src="xiuIcon" alt="">
              </div>
              <div style="margin-left: 40px;margin-top: 20px;float: left">
                <img class="carIcon" :src="wacarIcon" alt="">
              </div>
              <div style="margin-left: 40px;margin-top: 40px;float: left">
                <img class="carIcon" :src="cacarIcon" alt="">
              </div>
            </div>
          </div>
          <div class="row" style="margin-top: 50px;justify-content: center;">
            <div class="place">
              <div style="position: absolute;z-index: -1">
                <div style="position: absolute;z-index: -1" id="posuizhan">
                  <img class="placeImg" :src="bgImg" alt="">
                </div>
                <img class="placeIcon" :src="poIcon" alt="">
              </div>
              <div style="margin-left: 30px;margin-top: 30px;float: left">
                <img class="carIcon" :src="wacarIcon" alt="">
              </div>
              <div style="margin-left: 20px;margin-top: 20px;float: left">
                <img class="carIcon" :src="wacarIcon" alt="">
              </div>
              <div style="margin-left: 20px;margin-top: 40px;float: left">
                <img class="carIcon" :src="chancarIcon" alt="">
              </div>
            </div>
          </div>
          <div class="row" style="margin-top: 50px">
            <div class="place">
              <div style="position: absolute;z-index: -1">
                <div style="position: absolute;z-index: -1" id="tingchechang">
                  <img class="placeImg" :src="bgImg" alt="">
                </div>
                <img class="placeIcon" :src="pIcon" alt="">
              </div>
              <div style="margin-left: 20px;margin-top: 20px;float: left">
                <img class="carIcon" :src="wacarIcon" alt="">
              </div>
              <div style="margin-left: 20px;margin-top: 20px;float: left">
                <img class="carIcon" :src="cacarIcon" alt="">
              </div>
              <div style="margin-left: 20px;margin-top: 20px;float: left">
                <img class="carIcon" :src="cacarIcon" alt="">
              </div>
              <div style="margin-left: 20px;margin-top: 20px;float: left">
                <img class="carIcon" :src="cacarIcon" alt="">
              </div>
            </div>
            <!--            <div class="road">-->

            <!--            </div>-->
            <div class="place" style="margin-left: 450px">
              <div style="position: absolute;z-index: -1">
                <div style="position: absolute;z-index: -1" id="youguan">
                  <img class="placeImg" :src="bgImg" alt="">
                </div>
                <img class="placeIcon" :src="youIcon" alt="">
              </div>
              <div style="margin-left: 20px;margin-top: 20px;float: left">
                <img class="carIcon" :src="wacarIcon" alt="">
              </div>
              <div style="margin-left: 10px;margin-top: 10px;float: left">
                <img class="carIcon" :src="youcarIcon" alt="">
              </div>
              <div style="margin-left: 30px;margin-top: 30px;float: left">
                <img class="carIcon" :src="youcarIcon" alt="">
              </div>
            </div>
          </div>
        </div>

        <div class="threeD">

        </div>
      </div>
      <div class="infoContentR">
      </div>
    </div>
    <img :src="wacarIcon" alt="" style="position: absolute; left:1205.19px; top:595.094px;height: 50px;width: 70px;" id="icon">
    <!--    <img :src="youcarIcon" alt="" style="position: absolute;height: 50px;width: 70px;">-->
  </div>
</template>


<script>
import LeaderLine from "leader-line-vue";
import * as d3 from 'd3';

export default{
  components: {
  },
  data() {
    return{
      headImg:require('@/assets/head_middle.png'),
      kImg1:require('@/assets/head_left.png'),
      kImg2:require('@/assets/head_right.png'),
      bgImg: require('@/assets/bg2.png'),
      bgImg2: require('@/assets/bg.png'),
      caiIcon: require('@/assets/cai.svg'),
      youIcon: require('@/assets/you.svg'),
      pIcon:require('@/assets/p.svg'),
      poIcon:require('@/assets/po.svg'),
      xiuIcon:require('@/assets/xiu.svg'),
      wacarIcon:require('@/assets/wa.png'),
      youcarIcon:require('@/assets/youCar.png'),
      chancarIcon:require('@/assets/chanCar.png'),
      zuancarIcon:require('@/assets/zuanCar.png'),
      cacarIcon:require('@/assets/caCar.png')
    }
  },
  methods:{
    drawLine(){
      let caiEle = document.getElementById('caichang');
      let poEle = document.getElementById('posuizhan');
      let pEle = document.getElementById('tingchechang');
      let xiuEle = document.getElementById('xiulichang');
      let youEle = document.getElementById('youguan');
      // let pic = document.getElementById('icon');
      LeaderLine.setLine(caiEle, poEle, {
        dash: {
          animation: true,
          gap: 12
        },
        path:'straight',
        endPlug:'behind',
      });
      LeaderLine.setLine(caiEle, xiuEle,{
        dash: {
          animation: true,
          gap: 12
        },
        path:'straight',
        endPlug:'behind',
        middleLabel: LeaderLine.obj.captionLabel('1'),
      });
      LeaderLine.setLine(caiEle, pEle,{
        dash: {
          animation: true,
          gap: 12
        },
        path:'straight',
        endPlug:'behind'
      });
      LeaderLine.setLine(pEle, youEle, {
        dash: {
          animation: true,
          gap: 12
        },
        endPlug:'behind',
        path:'straight',
      });
      LeaderLine.setLine(caiEle, poEle, {
        dash: {
          animation: true,
          gap: 12
        },
        endPlug:'behind',
        path:'straight',
      });
      LeaderLine.setLine(xiuEle, youEle, {
        dash: {
          animation: true,
          gap: 12,
        },
        endPlug:'behind',
        path:'straight',
      });
      LeaderLine.setLine(pEle, poEle, {
        dash: {
          animation: true,
          gap: 12
        },
        endPlug:'behind',
        path:'straight',
        middleLabel: LeaderLine.obj.captionLabel('2'),
      });
      LeaderLine.setLine(poEle, youEle, {
        dash: {
          animation: true,
          gap: 12
        },
        endPlug:'behind',
        path:'straight',
        middleLabel: LeaderLine.obj.captionLabel('1'),
      });
      LeaderLine.setLine(xiuEle, poEle, {
        dash: {
          animation: true,
          gap: 12
        },
        endPlug:'behind',
        path:'straight',
      });


      // let lines = d3.selectAll(".leader-line");
      // let width = lines._groups[0][0].viewBox.animVal.x;
      // let height = lines._groups[0][0].viewBox.animVal.y;
      // let wi = lines._groups[0][0].viewBox.animVal.width;
      // console.log(lines._groups[0][0].viewBox.animVal);
    },

    drawIcon(){
      d3.selectAll("svg").selectAll("text").each((d, i) => {
        console.log(d3.select(this).attr("x"))
      });
      // for(var i = 0; i < selection.length; i++){
      //   if(selection[i].length > 0){
      //     console.log(selection[i][0].attr["x"]);
      //   }
      // }
      // console.log(selection);
    }
  },
  mounted() {
    this.drawLine();
    this.drawIcon();
  },

}

</script>

<style lang='scss'>


.bgImg {
  position: absolute;
  width: 100% !important;
  left: 0;
  z-index: -1;
}

.mapMain {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(rgba(3, 16, 41, 1) 100%, rgba(255, 255, 255, 0.001) 99%);

  .infoHeader {
    position: relative;
    background-image: linear-gradient(rgba(3, 16, 41, 1) 80%, rgba(255, 255, 255, 0.001) 99%);
    height: 100px;

    p {
      color: #01CEFB;
      font-size: 28px;
      margin-top: 21px;
    }

    .infoHeaderImg {
      position: absolute;
      top: 24px;
      height: 55%;
      right: 50%;
      transform: translateX(50%)
    }

    .item1,
    .item2 {
      position: absolute;
      top: 29px;
      height: 55%;
      right: 65%;
      transform: translateX(50%);
      width: 8.5%;
      cursor: pointer;

      img {
        height: 100%;
        width: 100%;
      }

      p {
        position: absolute;
        margin: 0;
        font-size: 18px;
        width: 100%;
        color: #FFD200;
        right: 50%;
        line-height: 55px;
        transform: translateX(50%);
      }
    }

    .item2 {
      top: 29px;
      right: 35%;

      p {
        color: #009CFF;
      }
    }
  }

  .infoContent {

    .infoContentL,
    .infoContentR {
      position: fixed;
      width: 20%;
      height: 100%;
      background-image: linear-gradient(to right, #031029 30%, rgba(3, 16, 43, 0.7) 90%, rgba(24, 53, 83, 0.01) 100%);
      top: 0;
      margin-top: 80px;

      .Citem1 {
        .Citem1Content {
          display: flex;
          justify-content: space-around;
        }
      }

      .Citem1
      {
        width: 402px;
        margin-left: 21px;
        margin-right: 21px;
        height: 500px;
        text-align: left;

        p {
          color: #fff;
          margin-bottom: 15px;
          margin-top: 10px;
          padding-top: 30px;
          font-size: 20px;
        }

        .border {
          box-sizing: border-box;
          width: 402px;
          height: 1px;
          background: #444F5D;
          border-left: #009CFF solid 30px;
          margin-bottom: 30px;
        }

        img {
          float: right;
          width: 40px;
        }
      }
      .Citem2{
        width: 402px;
        margin-left: 21px;
        margin-right: 21px;
        height: 270px;
        text-align: left;

        p {
          color: #fff;
          margin-bottom: 15px;
          margin-top: 10px;
          padding-top: 30px;
          font-size: 20px;
        }

        .border {
          box-sizing: border-box;
          width: 402px;
          height: 1px;
          background: #444F5D;
          border-left: #009CFF solid 30px;
          margin-bottom: 30px;
        }

        img {
          float: right;
          width: 40px;
        }
      }
    }

    .infoContentL {

      .itemSwitch {
        float: right;
        font-size: 16px;

        p {
          cursor: pointer;
        }

        p:first-child {
          color: #009CFF;
        }

        img {
          margin: 0 5px;
          width: 14px;
          float: none;
        }
      }
    }

    .infoContentR {
      background-image: linear-gradient(to left, #031029 30%, rgba(3, 16, 43, 0.7) 90%, rgba(24, 53, 83, 0.01) 100%);
      right: 0;

      .Citem1 {
        height: 350px;
        margin-bottom: 70px;
      }

      .itemSwitch {
        float: right;
        font-size: 16px;

        p {
          cursor: pointer;
        }

        p:first-child {
          color: #009CFF;
        }

        img {
          margin: 0 5px;
          width: 14px;
          float: none;
        }
      }
    }

    .infoContentM{
      position: fixed;
      width: 60%;
      margin-left: 23%;
      height: 100%;
      top: 0;
      margin-top: 100px;

      .towD{
        height: 90%;
        width: 90%;
        margin-top: 5%;
        margin-left: 5%;
        .row{
          width: 100%;
          height: 220px;
          display: flex;
          .place{
            height: 200px;
            width: 280px;
            .carIcon{
              height: 50px;
              width: 80px;
              z-index: 3;
            }
            .placeImg{
              height: 200px;
              width: 250px;
              z-index: 2;
            }
            .placeIcon{
              height: 175px;
              width: 240px;
              z-index: 1;
              opacity: 0.25;
              margin-top: 18px;
              //margin-left: -10px;
            }
          }
          .road{
            margin-top: 50px;
            height: 80px;
            width: 220px;
            background-color: white;
          }
          .roadVer{
            height: 100px;
            width: 80px;
          }
        }
      }

      .threeD{
        height: 100%;
        width: 100%;
        visibility: hidden;
      }
    }
  }

}
</style>