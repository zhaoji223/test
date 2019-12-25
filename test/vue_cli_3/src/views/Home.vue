<template>
    <section class='wechat'>
        <div v-if='showLoading' class='loading'>
            <div class='bg'></div>
            <div class='percent'>{{percent}}%</div>
        </div>
        <div v-else class='content'>
            <img src="../assets/wechat1.jpg" alt="">
            <img src="../assets/wechat2.jpg" alt="">
            <img src="../assets/wechat3.jpg" alt="">
            <img src="../assets/wechat4.jpg" alt="">
            <img src="../assets/wechat5.jpg" alt="">
            <img src="../assets/case1.jpg" alt="">
            <img src="../assets/case2.jpg" alt="">
            <img src="../assets/case3.jpg" alt="">
            <img src="../assets/case4.jpg" alt="">
            <img src="../assets/case5.jpg" alt="">
            <img src="../assets/case6.jpg" alt="">
            <img src="../assets/user_photo1.jpg" alt="">
            <img src="../assets/user_photo2.jpg" alt="">
            <img src="../assets/user_photo3.jpg" alt="">
            <img src="../assets/user_photo4.jpg" alt="">
            <img src="../assets/user_photo5.jpg" alt="">
            <img src="../assets/user_photo6.jpg" alt="">
            <img src="../assets/user_photo7.jpg" alt="">
            <img src="../assets/user_photo8.jpg" alt="">
            <img src="../assets/user_photo9.jpg" alt="">
            <img src="../assets/user_photo10.jpg" alt="">
            <img src="../assets/user_photo11.jpg" alt="">
            <img src="../assets/user_photo12.jpg" alt="">
            <img src="../assets/user_photo13.png" alt="">
            <img src="../assets/user_photo14.jpg" alt="">
            <img src="../assets/user_photo15.jpg" alt="">
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            percent: 0,
            showLoading: true
        }
    },
    mounted() {
        console.log('mounted')
        window.onload = () => {
            let list = [
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/wechat1.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/wechat2.jpg', 
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/wechat3.jpg', 
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/wechat4.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/wechat5.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/case1.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/case2.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/case3.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/case4.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/case5.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/case6.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/user_photo1.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/user_photo2.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/user_photo3.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/user_photo4.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/user_photo5.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/user_photo6.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/user_photo7.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/user_photo8.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/user_photo9.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/user_photo10.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/user_photo11.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/user_photo12.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/user_photo13.png',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/user_photo14.jpg',
                'https://static2.qschou.com/img/v8/sem/index_3_3/assets/user_photo15.jpg',
            ]
            for(var i = 0; i < list.length; i++) {
                let img = new Image()
                img.src = list[i]
                img.onload = () => {
                    console.log('onload')
                    this.percent += (100 / 25)
                    if(this.percent > 100) {
                        this.showLoading = false
                    }
                }
            }
        }
    },
};
</script>

<style lang="less">
ul {
    list-style: none;
}
* {
    padding: 0;
    margin: 0;
}
input::-webkit-input-placeholder {
    color: #CCCCCC;
}
body {
    max-width: 768px;
    margin: 0 auto;
    height: auto;
    background: #f6f7f8;
    font-family: PingFangSC-Medium;
}

.wechat {
    .loading {
        .bg {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: #000;
            opacity: 0.6;
            z-index: 1040;
        }
        .percent {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            font-size: 20px;
            z-index: 1041;
        }
    }
}

</style>