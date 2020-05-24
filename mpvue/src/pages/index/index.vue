<template>
    <section class='consultation'>
        <div class='title'>大病筹款咨询</div>
        <div class='container'>
            <Conversation v-if='showQuestion0' :content='contentConf[0]' :loading='false'></Conversation>
            <Conversation v-if='showQuestion1' :content='contentConf[1]'></Conversation>
            <div v-if='relation' class='answer'>{{relation}}</div>
            <Conversation v-if='showQuestion2' :content='contentConf[2]'></Conversation>
            <div v-if='disease' class='answer'>{{disease}}</div>
            <Conversation v-if='showQuestion3' :content='contentConf[3]'></Conversation>
            <Conversation v-if='showQuestion4' :content='contentConf[4]'></Conversation>
            <div v-if='inHospital' class='answer'>{{inHospital == 1 ? '是' : '否'}}</div>
            <Conversation v-if='showQuestion5' :content='contentConf[5]'></Conversation>
            <Conversation v-if='showQuestion6' :content='contentConf[6]'></Conversation>
        </div>
        <footer class='footer'>
            <div class="footer-desc">Copyright © 2019北京轻松筹网络科技有限公司</div>
            <div class="footer-desc">京公网安备11010102002425号</div>
            <div class="footer-desc">京ICP备14052685号-1</div>
        </footer>
        <Relation v-if='showRelation' @choseRelation='choseRelation'></Relation>
        <Disease v-if='showDisease' @choseDisease='choseDisease'></Disease>
        <Hospital v-if='showInHospital' @choseInHospital='choseInHospital'></Hospital>
        <Phone v-if='showPhone' @jump='jump'></Phone>
    </section>
</template>
<script>
import contentConf from './content.js'
import Conversation from '../../components/Conversation.vue'
import Relation from '../../components/Relation.vue'
import Disease from '../../components/Disease.vue'
import Hospital from '../../components/Hospital.vue'
import Phone from '../../components/Phone.vue'
export default {
    data() {
        return {
            phone: '',
            relation: '',
            disease: '',
            inHospital: 0,
            contentConf,
            showQuestion0: false,
            showQuestion1: false,
            showQuestion2: false,
            showQuestion3: false,
            showQuestion4: false,
            showQuestion5: false,
            showQuestion6: false,
            showRelation: false,
            showDisease: false,
            showInHospital: false,
            showPhone: false,
            showMultiCheck: false,
        };
    },
    components: {
        Conversation, Disease, Hospital, Phone, Relation
    },
    methods: {
        choseRelation(val) {
            this.relation = val
            // 选择关系后，根据类型替换提问中的relation
            this.contentConf.map((ele, index) => {
                this.contentConf[index] = ele.replace('relation', val == '本人' ? '您' : '患者')
            })
            // 关闭选项，同时展示下一个问题
            this.showRelation = false
            this.showQuestion2 = true
            setTimeout(() => {
                this.showDisease = true
            }, 1600)
        },
        choseDisease(val) {
            this.disease = val
            // 关闭选项，同时展示慰问语，2s后展示下一问题
            this.showDisease = false
            this.showQuestion3 = true
            setTimeout(() => {
                this.showQuestion4 = true
            }, 2000)
            setTimeout(() => {
                this.showInHospital = true
            }, 3600)
        },
        choseInHospital(val) {
            this.inHospital = val
            // 关闭选项，同时展示慰问语，2s后展示下一问题
            this.showInHospital = false
            this.showQuestion5 = true
            setTimeout(() => {
                this.showQuestion6 = true
            }, 3000)
            // 4s后, 展示手机号输入框
            setTimeout(() => {
                this.showPhone = true
            }, 4600)
        },
        jump(val) {
            this.phone = val
            console.log('=======')
            console.log(this)
        },
    },
    mounted() {
        // 0.5s后加载 
        setTimeout(() => {
            this.showQuestion0 = true
        }, 500)
        // 2s后加载 问题: 为谁筹款
        setTimeout(() => {
            this.showQuestion1 = true
        }, 1000)
        // 4s后加载 问题选项
        setTimeout(() => {
            this.showRelation = true
        }, 2600)
        const options = {
            method: "POST",
            headers: { "content-type": "application/json" },
            data: {phone: "18234040919"},
            url: "https://gateway.qschou.com/v3.0.0/activity/forecast/sms"
        }
        fetch('https://gateway.qschou.com/v3.0.0/activity/forecast/sms', {
            credentials: 'include',
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json'
            },
            body: JSON.stringify({phone: "18234040919"})
        })
    },
    created() {
        this.$nextTick(() => {
            // document.documentElement.scrollTop = 0
            // document.body.scrollTop = 0
        })
    }
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
    color: #999999;
}
input {
    -webkit-appearance: none;
}
body {
    max-width: 768px;
    margin: 0 auto;
    height: auto;
    background: #f6f7f8;
    font-family: PingFangSC-Medium;
}
.consultation {
    position: relative;
    min-height: calc(100vh + 60px);
    padding-top: 45px;
    padding-bottom: 180px;
    background: #FFF6F5;
    font-family: Helvetica;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
    .title {
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        height: 45px;
        line-height: 45px;
        background: #FC6A43;
        font-weight: bolder;
    }
    .container {
        padding: 0 25px 0 15px;
        text-align: right;
        .answer {
            display: inline-block;
            margin-top: 24px;
            padding: 0px 15px;
            height: 40px;
            min-width: 50px;
            line-height: 40px;
            background-image: linear-gradient(180deg, #FE875E 0%, #FB5B36 100%);
            box-shadow: 0 -3px 12px 2px rgba(250,205,137,0.09);
            border-radius: 19px 19px 4px 19px;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #FFFFFF;
            text-align: center;
        }
    }
    .footer {
        position: absolute;
        left: 50%;
        bottom: 10px;
        width: 100%;
        transform: translate(-50%);
        text-align: center;
        .footer-desc {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #999999;
        }
    }
}
</style>