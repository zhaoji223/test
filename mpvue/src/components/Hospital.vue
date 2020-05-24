<template>
    <section class='hospital'>
        <div class='wrap'>
            <div class='item' @click="choseInHospital(1)">是</div>
            <div class='item' @click="choseInHospital(2)">否</div>
        </div>
    </section>
</template>
<script>
export default {
    methods: {
        choseInHospital(val) {
            this.$emit('choseInHospital', Number.parseInt(val))
        }
    }
}
</script>
<style lang='less' scoped>
.hospital {
    position: fixed;
    left: 0px;
    bottom: 0px;
    height: 68px;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0 -2px 12px 0 rgba(0,0,0,0.10);
    animation: bounce-up 0.3s;
    .wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 15px;
        height: 100%;
        .item {
            height: 35px;
            width: 47%;
            background-image: linear-gradient(90deg, #FE875E 0%, #FB5B36 100%);
            border-radius: 18px;
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: #FFFFFF;
            text-align: center;
            line-height: 35px;
        }
    }
}
@keyframes bounce-up {
    0% {
        bottom: -70px;
    }
    100% {
        bottom: 0px;
    }
}
</style>