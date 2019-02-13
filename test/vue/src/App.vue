<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body, #app {
  margin: 0px;
  padding: 0px;
  height: 100vh;
  width: 100%;
}
* {
  box-sizing:  border-box;
}
</style>
