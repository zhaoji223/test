<template>
    <section class='hospital'>
        <div class='wrap'>
            <input v-model="phone" placeholder="请输入手机号">
            <div class='btn' @click='jump'>发送</div>
        </div>
        <div v-if='showErrorMsg' class='error-msg'>*提示：请输入正确手机号</div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            phone: '',
            showErrorMsg: false
        }
    },
    methods: {
        jump() {
            const phone_reg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0-9])|(17[0-9])|(166)|(19[0-9]))\d{8}$/;
            if (!phone_reg.test(this.phone)) {
                this.showErrorMsg = true
            } else {
                this.showErrorMsg = false
                this.$emit('jump', this.phone)
            }   
        }
    }
}
</script>
<style lang='less' scoped>
.hospital {
    position: fixed;
    left: 0px;
    bottom: 0px;
    height: 58px;
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
        input {
            margin: 0px;
            padding: 0px 0px 0px 5px;
            border: 0px;
            width: calc(100% - 85px);
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: #333333;
        }
        .btn {
            width: 78px;
            height: 34px;
            line-height: 34px;
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: #FFFFFF;
            background-image: linear-gradient(90deg, #FE875E 0%, #FB5B36 100%);
            border-radius: 4px;
        }
    }
    .error-msg {
        position: fixed;
        left: 20px;
        bottom: 62px;
        font-family: PingFangSC-Regular;
        font-size: 13px;
        color: #FF6756;
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