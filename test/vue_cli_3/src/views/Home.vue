<template>
    <div>
        <div class='label' @click='selectTime(7)'>七天</div>
        <div class='label' @click='selectTime(30)'>三十天</div>
        <div class='label' @click='showBigChart()'>全屏</div>
        <div id='demo1' class='chart'></div>
    </div>
</template>

<script>
var echarts = require('echarts');
let now = new Date(2019, 1, 1)
let oneDay = 24 * 3600 * 1000
let tempData = [{"value":["2/2",0]},{"value":["2/3",0]},{"value":["2/4",0]},{"value":["2/5",59]},{"value":["2/6",55]},{"value":["2/7",57]},{"value":["2/8",52]},{"value":["2/9",53]},{"value":["2/10",0]},{"value":["2/11",0]}]
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
        getRandomData(val) {
            now = new Date(+now + oneDay);
            let value = Math.random() * 200 + 500;
            return {
                value: [
                    [now.getMonth() + 1, now.getDate()].join('/'),
                    val == 0 ? val : Math.round(value)
                ]
            }
        },
        getData() {
            for (var i = 0; i < 10; i++) {
                if(i<3 || i>7) {
                    this.data.push(this.getRandomData(0));
                } else {
                    this.data.push(this.getRandomData());
                }
                
            }
        },
        selectTime(time) {
            this.chart.setOption({
                dataZoom: [
                    {
                        startValue: '2020/1/14',
                        endValue: '2020/2/14'
                    }
                ],
            })
        },
        showBigChart() {
            this.$router.push('/test')
        }
    },
    mounted() {
        this.getData()
        console.log(JSON.stringify(this.data))
        this.chart = echarts.init(document.getElementById('demo1'));
        var temp = {
    grid: {
        top: 10,
        right: 22,
        bottom: 30,
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
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
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#CCCCCC'
            }
        },
        axisLabel: {
            color: 'rgba(102,102,102,0.8)'
        },
        axisTick: {
            alignWithLabel: true,
            inside: true
        }
    },
    dataZoom: [
        { 
            type: 'inside',
            xAxisIndex: 0,
            startValue: 0,
            endValue: 10
        }
    ],
    series: [{
        name: '测试 ',
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
}
        temp.series[0].data = tempData
        this.chart.setOption(temp);
    },
    created() {
        fetch('/v3.0.0/project/index/auth3/c68cfaee-3fdd-4bf7-96f6-3a894380f505', {
            credentials: 'include',
            method: 'get',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json'
            }
        }).then(()=>{}).catch(()=>{})
    }
};
</script>

<style lang="less">
 .chart {
    // width: 100%;
    height: 300px;
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