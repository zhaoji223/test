<template>
  <div class="hello">
    <A class='class-a'></A>
  </div>
</template>

<script>
import A from './test'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    A
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
  .hello {
    .test {
      color: #fff;
    }
  }
</style>
