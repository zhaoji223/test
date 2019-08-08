<template>
    <div>
    	<div id='demo1' class='chart'></div>
    </div>
</template>

<script>
var echarts = require('echarts');
let now = new Date(2019, 1, 1)
let oneDay = 24 * 3600 * 1000
export default {
    name: "chart",
    data() {
        return {
            chart: '',
            data: [],
            startIndex: 0,
            endIndex: 30,
            test7: '',
            test30: ''
        }
    },
    methods: {
        getRandomData() {
            now = new Date(+now + oneDay);
            let value = Math.random() * 1000;
            return {
                value: [
                    Math.round(value),
                    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/')
                    
                ]
            }
        },
        getData() {
            for (var i = 0; i < 10; i++) {
                this.data.push(this.getRandomData());
            }
        }
    },
    mounted() {
        this.getData()
        this.chart = echarts.init(document.getElementById('demo1'));
        
        this.chart.setOption({
    grid: {
        top: 40,
        right: 25,
        left: 37,
        bottom: 20,
    },
    tooltip: {
        trigger: 'axis',
        extraCssText:'transform: rotate(90deg)'
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        position: 'top',
        nameRotate: -90, //坐标轴名字旋转，角度值
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#CCCCCC'
            }
        },
        axisLabel: {
            rotate: 90,
            color: 'rgba(102,102,102,0.8)'
        },
        axisTick: {
            alignWithLabel: true,
            inside: true
        }
    },
    yAxis: {
        type: 'category',
        boundaryGap: false,
        inverse :'true', //是否是反向坐标轴。
        min: 0,
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#EEEEEE']
            }
        },
        axisLine: {
            lineStyle: {
                color: '#CCCCCC'
            }
        },
        axisLabel: {
            rotate : -90,
            color: 'rgba(102,102,102,0.8)'
        },
        axisTick: {
            alignWithLabel: true,
            inside: true
        },
        axisPointer: {
            lineStyle: {
                color: '#43AC43'
            }
        }
    },
    dataZoom: [
        { 
            type: 'inside',
            yAxisIndex: 0,
            startValue: 0,
            endValue: 10
        }
    ],
    series: [{
        data: this.data,
        type: 'line',
        symbol: 'circle',
        itemStyle: {
            color: '#43AC43'
        },
        lineStyle: {
            color: '#78D678',
            borderWidth: 2,
            shadowBlur: 14,
            shadowColor: '#43AC43',
            shadowOffsetX: 0,
            shadowOffsetY: 5
        },
        smooth: true //是否平滑曲线显示
    }]
});
    }
};
</script>

<style lang="less" scoped>
 .chart {
    width: 100%;
    height: 100vh;
  }
.label {
  display: inline-block;
  margin: 20px;
  width: 60px;
  height: 30px;
  background: #123241;
  color: #fff;
}
</style>