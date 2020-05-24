<template>
    <section class='conversation'>
        <img class='pic' src="https://static2.qschou.com/img/v8/sem/index_4_1/assets/photo.png" alt="">
        <div class='wrap'>
            <div class='name'>筹款顾问 {{time}}</div>
            <div class='content'>
                <div v-if='!showLoading'>{{content}}</div>
                <div v-else>
                    正在输入
                    <span class='animation1'>.</span>
                    <span class='animation2'>.</span>
                    <span class='animation3'>.</span>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            time: '',
            showLoading: true,
        }
    },
    props: {
        content: {
            require: true
        },
        loading: {
            default: true
        }
    },
    methods: {
        // setScrollTop() {
        //     let cardListEles = document.getElementsByClassName('conversation')
        //     let lastCardHeight = cardListEles[cardListEles.length - 1].offsetTop
        //     if(lastCardHeight > document.documentElement.clientHeight - 100) {
        //         document.documentElement.scrollTop = document.body.clientHeight - document.documentElement.clientHeight - 60
        //         document.body.scrollTop = document.body.clientHeight - document.documentElement.clientHeight - 60
        //     }
        // },
    },
    mounted() {
        this.showLoading = this.loading
        let now = new Date()
        let houser = now.getHours() < 10 ? '0' + now.getHours() + ':' : now.getHours() + ':'
        let minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()
        this.time = houser + minute
        // 每加载一条信息，重置滚动条到底部
        // this.setScrollTop()
        // 正在输入... 的文案变更时，重置滚动条到底部
        let time = 1560
        if(this.content.length > 50) {
            time += 1000
        }
        setTimeout(() => {
            this.showLoading = false
            // this.setScrollTop()
        }, time)
    }
}
</script>
<style lang='less'>
.conversation {
    margin-top: 24px;
    text-align: left;
    font-size: 0px;
    .pic {
        margin-right: 5px;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        vertical-align: top;
    }
    .wrap {
        display: inline-block;
        width: calc(100% - 45px);
        .name {
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #333333;
        }
        .content {
            display: inline-block;
            margin-top: 6px;
            padding: 15px 13px 15px 15px;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #333333;
            background: #FFFFFF;
            box-shadow: 0 -3px 12px 2px rgba(250,205,137,0.09);
            border-radius: 22px 22px 22px 3px;
        }
    }
}
.animation1 {
    animation: twinkle1 0.85s .0s infinite;
}
.animation2 {
    animation: twinkle2 0.85s .0s infinite;
}
.animation3 {
    animation: twinkle3 0.85s .0s infinite;
}
@keyframes twinkle1 {
    0% {
        opacity: 0;
    }
    24% {
        opacity: 0;
    }
    25% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
}
@keyframes twinkle2 {
    0% {
        opacity: 0;
    }
    49% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
}
@keyframes twinkle3 {
    0% {
        opacity: 0;
    }
    74% {
        opacity: 0;
    }
    75% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
}
</style>