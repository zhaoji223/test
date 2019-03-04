<template>
    <div class='new-year-2019-activity'>
        <!--  表单(初始化页面时显示)  -->
        <section class='form'>
            <img class='bg_header' src="../assets/bg_header.png" alt="">
            <img class='bg_content' src="../assets/bg_content.png" alt="">
            <img class='bg_bottom' src="../assets/bg_bottom.png" alt="">
            <div class='container'>
                <input id='nameInput' maxlength="10" class='input-item' type="text" placeholder='请输入姓名或者昵称'>
                <div class='input-item'>borth</div>
                <img @click='jump' class='confirm-btn' src="../assets/btn.png" alt="">
            </div>
            <img class='ad' src="../assets/ad.png" alt="">
        </section>
    </div>
</template>

<script>
export default {
    name: 'new_year_2019_activity_form',
    methods: {
        jump() {
            console.log('========')
            this.$router.push('/chouqian')
        }
    }
};
</script>

<style lang="less">
ul {
    padding: 0px;
    list-style: none;
}
.new-year-2019-activity {
    position: relative;
    width: 100%;
    height: 100%;
    background: radial-gradient(#f6001b, #ea0017, #d70009);
    background-size: 100% 100%;
    font-family: PingFangSC-Regular;
    overflow: hidden;
    .form {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .bg_header {
            position: absolute;
            align-self: flex-start;
            width: 100%;
            z-index: 20;
        }
        .bg_content {
            position: absolute;
            top: 40px;
            width: 100%;
            z-index: 10;
        }
        .bg_bottom {
            position: absolute;
            bottom: 0px;
            width: 100%;
            z-index: 30;
        }
        .container {
            width: calc(100% - 104px);
            z-index: 20;
            .input-item {
                margin-top: 10px;
                border: none;
                padding: 11px 20px;
                width: 100%;
                height: 42px;
                // line-height: 42px;
                border-radius: 4px;
                background: #FFFFFF;
                font-size: 16px;
                color: #898989;
                letter-spacing: 0;
            }
            .confirm-btn {
                margin-top: 16px;
                width: 100%;
            }
        }
        .ad {
            position: absolute;
            left: 7%;
            bottom: 3%;
            width: 86%;
            z-index: 31;
        }
    }
    .model-bg {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #000;
        opacity: .8;
        z-index: 40;
    }
    .activity-is-over {
        position: absolute;
        height: 100%;
        top: 0;
        width: 100%;
        z-index: 200;
        .acitivity-close-wrap {
            position: absolute;
            left: 23%;
            width: 54%;
            z-index: 201;
            .acitivity-close {
                width: 100%;
            }
            .close-btn {
                position: absolute;
                top: 54%;
                left: calc(50% - 65px);
                display: inline-block;
                width: 130px;
                height: 33px;
                line-height: 33px;
                border-radius: 20px;
                text-align: center;
                font-size: 17px;
                color: #890008;
                background-image: linear-gradient(-180deg, #FFE38D 0%, #FFDD7E 36%, #FFC432 100%);
                box-shadow: 0 2px 3px 1px rgba(185,35,43,0.74);
                letter-spacing: 0;
            }
        }
    }
}

// @media (max-height: 460px) {
//     .container {
//         top: 220px;
//     }
// }
// @media (min-height: 460px) {
//     .container {
//         top: 220px;
//     }
// }
// @media (min-height: 530px) {
//     .container {
//         top: 290px;
//     }
// }
// @media(min-height: 600px) {
//     .container {
//         top: 300px;
//     }
// }
// @media (min-height: 700px) {
//     .container {
//         top: 320px;
//     }
// }
// @media (min-height: 800px) {
//     .container {
//         top: 350px;
//     }
// }
</style>