<template>
  <div class="test">
    <div class='t'>
        testtesttesttest
    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  mounted() {
    // https://blog.csdn.net/evalsys/phoenix/comment/list/84389829?page=1&size=3
    fetch('/api/evalsys/phoenix/comment/list/84389829?page=1&size=3', {
            credentials: 'include',
            method: 'get',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json'
            }
        }).then(()=>{}).catch(()=>{})
  }
}
</script>
<style lang='less'>
    .test {
        .t {
            font-size: 30px;
            color: #123123;
        }
    }
</style>