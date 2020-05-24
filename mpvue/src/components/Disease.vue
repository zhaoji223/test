<template>
    <section class='disease' :style='{height: showInput ? "58px" : ""}'>
        <div v-if='!showInput'>
            <div class='wrap'>
                <div class='item' @click="choseDisease('脑出血')">脑出血</div>
                <div class='item' @click="choseDisease('白血病')">白血病</div>
                <div class='item' @click="choseDisease('尿毒症')">尿毒症</div>
                <div class='item' @click="choseDisease('心脏病')">心脏病</div>
            </div>
            <div class='wrap' style='margin-bottom: 0px;'>
                <div class='item' @click="choseDisease('癌症/肿瘤')">癌症/肿瘤</div>
                <div class='item' @click="choseDisease('烧伤')">烧伤</div>
                <div class='item' @click="choseDisease('器官衰竭')">器官衰竭</div>
                <div class='item' @click="choseDisease('其他')">其他</div>
            </div>
        </div>
        <div v-else class='input-wrap'>
            <input v-model="inputValue" placeholder="请输入疾病名称" type="text" maxlength="20">
            <div class='btn' @click='setDisease'>发送</div>
        </div>
        <div v-if='showErrorMsg' class='error-msg'>*提示：请输入正确的疾病名称</div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            inputValue: '',
            showErrorMsg: false,
            showInput: false
        }
    },
    methods: {
        choseDisease(val) {
            if(val == '其他') {
                this.showInput = true
            } else {
                this.$emit('choseDisease', val)
            }
        },
        setDisease() {
            if(this.inputValue.length < 2 ) {
                this.showErrorMsg = true
            } else {
                this.showErrorMsg = false
                this.$emit('choseDisease', this.inputValue)
            }
        }
    }
}
</script>
<style lang='less' scoped>
.disease {
    position: fixed;
    left: 0px;
    bottom: 0px;
    padding: 15px;
    width: 92vw;
    background: #FFFFFF;
    box-shadow: 0 -2px 12px 0 rgba(0,0,0,0.10);
    animation: bounce-up 0.3s;
    .wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        .item {
            height: 34px;
            width: 23%;
            background-image: linear-gradient(90deg, #FE875E 0%, #FB5B36 100%);
            border-radius: 18px;
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: #FFFFFF;
            text-align: center;
            line-height: 34px;
        }
    }
    .input-wrap {
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