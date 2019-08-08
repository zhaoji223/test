<template>
    <div class='test'>
        <iframe src='http://172.16.72.175:8081/#/about'></iframe>
    </div>
    
</template>

<script>
export default {

}
</script>

<style>
.test {
    width: 100vw;
    height: 100vh;
    /* -webkit-overflow-scrolling: touch;  
    overflow: scroll;   */
}
iframe {
    width: 100vh;
    height: 100vw;
    border: 0px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(90deg);

    /* width: 100vh;
    height: 100vh;
    transform: rotate(90deg); */
}
</style>
