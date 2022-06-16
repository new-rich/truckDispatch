<template>
  <div class="main">
    <div class="title">
      <span>装卸强度对比</span>
    </div>
    <div class="content">
      <div id="barChart"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "qiangdu",
}
</script>

<script setup>
import * as echarts from 'echarts'
import {onMounted} from "vue";

onMounted(
() => {
  initBar();
}
)
function initBar(){
  var barchart = echarts.init(document.getElementById('barChart'));
  var option = {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: ['D车', 'C车', 'B车', 'A车']
    },
    series: [
      {
        name: '装卸量',
        type: 'bar',
        data: [5, 4, 29, 32],
        label: {
          show: true,
          position: 'right',
          valueAnimation: true
        }
      }
    ]
  };
  barchart.setOption(option);
}
</script>

<style lang="scss">
.main {
  height: 100%;
  width: 100%;

  .title {
    width: 100%;
    height: 10%;

    span {
      color: #496174;
      float: left;
      font-size: 28px;
      font-weight: bold;
      margin-left: 10px;
      line-height: 50px;
    }
  }
}
</style>