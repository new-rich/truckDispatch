<template>
  <div class="main">
    <div class="title">
      <span>装卸强度对比</span>
    </div>
    <div class="chartcontent">
      <div id="barChart" class="barchart"></div>
      <div id="pieChart" class="piechart"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "qiangdu",
  methods:{
    initBar(){
      var barchart = echarts.init(document.getElementById('barChart'));
      var piechart = echarts.init(document.getElementById('pieChart'));
      var barOption = {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          textStyle:{
            fontSize:18
          }
        },
        legend: {
          textStyle:{
            fontSize:18
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          axisLabel:{
            textStyle:{
              fontSize:18
            }
          }
        },
        yAxis: {
          type: 'category',
          data: ['D车', 'C车', 'B车', 'A车'],
          axisLabel:{
            textStyle:{
              fontSize:18
            }
          }
        },
        series: [
          {
            name: '装卸量',
            type: 'bar',
            data: [15, 24, 29, 32],
            label: {
              show: true,
              position: 'right',
              valueAnimation: true,
              textStyle:{
                fontSize:18
              }
            }
          }
        ]
      };
      var pieOption = {
        title: {
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)',
          textStyle:{
            fontSize:18
          }
        },
        legend: {
          left: 'center',
          top: 'bottom',
          data: [
            'A车',
            'B车',
            'C车',
            'D车',
          ],
          textStyle:{
            fontSize:18
          }
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            type: 'pie',
            radius: [50, 180],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 5
            },
            data: [
              { value: 32, name: 'A车' },
              { value: 29, name: 'B车' },
              { value: 24, name: 'C车' },
              { value: 15, name: 'D车' },
            ],
            label:{
              textStyle:{
                fontSize:18
              }
            }
          }
        ]
      };
      barchart.setOption(barOption);
      piechart.setOption(pieOption);
    }
  },
  mounted() {
    this.initBar();
  }
}
</script>

<script setup>
import * as echarts from 'echarts'
import {onMounted} from "vue";

</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  width: 100%;

  .title {
    width: 100%;
    height: 6%;

    span {
      color: #496174;
      float: left;
      font-size: 28px;
      font-weight: bold;
      margin-left: 10px;
      line-height: 50px;
    }
  }

  .chartcontent{
    width: 100%;
    height: 70%;
    margin-top: 5%;
    display: flex;

    .barchart{
      width: 50%;
      height: 100%;
    }

    .piechart{
      width: 50%;
      height: 100%;
    }
  }
}
</style>