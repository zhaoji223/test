<template>
<!-- <div class='test1'>
<el-table
    :data="tableData"
    style="">
    <el-table-column
      prop="date"
      label="日期"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="80">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="80">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="80">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="80">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="80">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="80">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="80">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="80">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</div> -->
  
<div class='wrap'>
  <div class='test1'>
      <div style='width: 2400px;'>
        <div class='th'>时间</div>
        <div class='th'>姓名</div>
        <div class='th'>地址</div>
        <div class='th'>时间</div>
        <div class='th'>姓名</div>
        <div class='th'>地址</div>
        <div class='th'>时间</div>
        <div class='th'>姓名</div>
        <div class='th'>地址</div>
        <div class='th'>时间</div>
        <div class='th'>姓名</div>
        <div class='th'>地址</div>
      </div>
      <div style='width: 2400px;' v-for="item in tableData">
        <div class='th'>{{item.date}}</div>
        <div class='th'>{{item.name}}</div>
        <div class='th'>{{item.address}}</div>
        <div class='th'>{{item.date}}</div>
        <div class='th'>{{item.name}}</div>
        <div class='th'>{{item.address}}</div>
        <div class='th'>{{item.date}}</div>
        <div class='th'>{{item.name}}</div>
        <div class='th'>{{item.address}}</div>
        <div class='th'>{{item.date}}</div>
        <div class='th'>{{item.name}}</div>
        <div class='th'>{{item.address}}</div>
      </div>
    </div>
</div>
  
</template>
<script>
  export default {
    data() {
      return {
        isIOS: '',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '路 1516 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '路 1516 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '路 1516 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '路 1516 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '路 1516 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '路 1516 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '路 1516 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '路 1516 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '路 1516 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '路 1516 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '路 1516 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '路 1516 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '路 1516 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '路 1516 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '路 1516 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上江路 1518 弄'
        }, {
          date: '========',
          name: '========',
          address: '========'
        }, {
          date: '=======',
          name: '========',
          address: '========'
        }, {
          date: '============',
          name: '=====',
          address: '========'
        }]
      }
    },
    mounted() {
        const u = navigator.userAgent;
        this.isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        let width = document.documentElement.getElementsByClassName('test1')[0].clientWidth
        let height = document.documentElement.getElementsByClassName('test1')[0].clientHeight
        // document.body.style.height = width + 'px'
        // document.body.style.width = height + 'px'

        // document.documentElement.getElementsByClassName('wrap')[0].style.height = height + 'px'
        // document.documentElement.getElementsByClassName('wrap')[0].style.width = width + 'px'
        // document.body.style.overflowY = 'hidden'
    }
  }
</script>
<style>
.wrap {
  
    
    /* position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); */

    /* width: 100vw;
    height: 100vh; */
    /* overflow: scroll; */
    /* transform: translate(-100%) rotate(90deg) ;
    transform-origin: 0px 0px; */

}
  .test1 {
    display: inline-block;
     /* -webkit-overflow-scrolling: touch;  
    overflow: scroll;
    display: inline-block; */
    /* transform: rotate(90deg); */
  }
  .th {
    width: 200px;
    height: 30px;
    display: inline-block;
  }
</style>