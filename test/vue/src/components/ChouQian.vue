<template>
    <div class='new-year-2019-activity'>
        <!-- 显示出上上签后,显示出活动图及交互按钮 -->
        <section class='share'>
            <div class='share-bg'></div>
            <div class='wrap'>
                <img class='share-box' :src="canvasBox" alt="">
                <img class='share-pic' :src="canvasPic" alt="">
                <div class='content-wrap'>
                    <div class='share-pic-name-wrap'>
                        <img class='share-pic-name-bg' src="http://staticactive.qshuyu.com/img/v8/2019/chouqian/assets/share_pic_name.png" alt="">
                        <p class='share-pic-name'>nameOp</p>
                    </div>
                    <p class='share-desc'>canvasWenAn.label1</p>
                    <p class='share-desc'>canvasWenAn.label2</p>
                </div>
                <p  class='desc'>长按保存图片</p>
            </div>
        </section>
        
    </div>
</template>

<script>
export default {
    name: 'new_year_2019_activity',
    data() {
        return {
            canvasBox: 'http://staticactive.qshuyu.com/img/v8/2019/chouqian/assets/share_box1.png', // 记录生成的 canvas图像 用的是哪张 图片, 客态用
            canvasPic: 'http://staticactive.qshuyu.com/img/v8/2019/chouqian/assets/youth1.png', // 记录生成的 canvas图像 用的是 内容图, 客态用
        }
    },
};
</script>

<style lang="less">
.new-year-2019-activity {
    position: relative;
    width: 100%;
    height: 100%;
    background: radial-gradient(#f6001b, #ea0017, #d70009);
    background-size: 100% 100%;
    font-family: PingFangSC-Regular;
    overflow: hidden;
    .form {
        .bg_header {
            position: absolute;
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
            position: absolute;
            margin: 0px 52px;
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
    .qiantong {
        position: relative;
        height: 100%;
        .wrap {
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 266px;
            width: 230px;
            z-index: 50;
            transform-origin: center bottom;
            .cloud {
                position: absolute;
                bottom: 0;
                width: 100%;
                z-index: 52;
            }
            .tong {
                position: absolute;
                left: 60px;
                width: 50%;
                z-index: 51;
            }
        }
        .shake {
            position: absolute;
            top: calc(43% + 210px);
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 53;
        }
    }
    .shanshangqian {
        position: relative;
        height: 100%;
        .golden-light {
            position: absolute;
            top: calc(50% - 185px);
            left: calc(50% - 175px);
            width: 350px;
            z-index: 51;
            animation: bounce-in 1s linear;
        }
        .shangshangqian {
            position: absolute;
            top: calc(50% - 161px);
            left: calc(50% - 30px);
            width: 60px;
            z-index: 52;
            animation: bounce-in 1s linear;
        }
    }
    .share {
        position: relative;
        height: 100%;
        .share-bg {
            position: absolute;
            height: 100%;
            width: 100%;
            background: radial-gradient(#f6001b, #ea0017, #d70009);
            background-size: 100% 100%;
            z-index: 60;
        }
        .wrap {
            position: absolute;
            left: 20px;
            width: calc(100% - 40px);
            z-index: 61;
            .share-box {
                width: 100%;
            }
            .share-pic {
                position: absolute;
                left: 8%;
                top: calc(4% + 1px);;
                width: 84%;
                z-index: -1;
            }
            .content-wrap {
                position: absolute;
                top: 8%;
                left: 12%;
                width: 76%;
                height: 80px;
                .share-pic-name {
                    position: absolute;
                    left: 30%;
                    width: 40%;
                    margin: 0px;
                    font-family: PingFangSC-Semibold;
                    font-size: 15px;
                    color: #FFFFFF;
                    text-align: center;
                    letter-spacing: 0;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .share-pic-name-wrap {
                    position: relative;
                    margin-bottom: 10px;
                    font-size: 0px;
                    .share-pic-name-bg {
                        width: 100%;
                    }
                }
                
                .share-desc {
                    margin: 0px;
                    text-align: center;
                    font-family: PingFangSC-Medium;
                    font-size: 13px;
                    color: #FFFFFF;
                    letter-spacing: 0;
                }
            }
            .desc {
                font-size: 12px;
                color: #FFFFFF;
                letter-spacing: 0;
                text-align: center;
            }
            .btn-wrap {
                position: absolute;
                display: inline-block;
                text-align: center;
                width: 49%;
                z-index: 999999;
                .btn {
                    display: inline-block;
                    width: 135px;
                    height: 50px;
                    line-height: 50px;
                    border-radius: 30px;
                    text-align: center;
                    font-size: 21px;
                    color: #DE000D;
                    background-image: linear-gradient(-180deg, #FFE38D 0%, #FFDD7E 36%, #FFC432 100%);
                    box-shadow: 0 2px 3px 1px rgba(185,35,43,0.74);
                }
            }
            .btn-left {
                left: 49%;
            }
            .guest-btn-wrap {
                text-align: center;
                .guest-btn {
                    display: inline-block;
                    width: 175px;
                    height: 50px;
                    line-height: 50px;
                    border-radius: 30px;
                    text-align: center;
                    font-size: 21px;
                    color: #DE000D;
                    background-image: linear-gradient(-180deg, #FFE38D 0%, #FFDD7E 36%, #FFC432 100%);
                    box-shadow: 0 2px 3px 1px rgba(185,35,43,0.74);
                }
            }
        }
    }
    .share-model {
        position: absolute;
        top: 0px;
        height: 100%;
        width: 100%;
        z-index: 70;
        .share-prompt-bg {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #000;
            opacity: .8;
            z-index: 71;
        }
        .share-prompt {
            position: absolute;
            top: 30px;
            z-index: 72;
            img {
                width: 100%;
            }
        }
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
    .download-wrap {
        position: absolute;
        top: 0;
        z-index: 999;
        opacity: 0;
        .download-pic {
            width: 100%;
        }
    }
    .no-select {
        pointer-events: none;
        user-select: none;
    }
    
    @keyframes shake {
        0% {
            transform: translate(-50%, -50%) rotate(0deg)
        }
        25% {
            transform: translate(-50%, -50%) rotate(-10deg)
        }
        50% {
            transform: translate(-50%, -50%) rotate(0deg)
        }
        75% {
            transform: translate(-50%, -50%) rotate(10deg)
        }
        100% {
            transform: translate(-50%, -50%) rotate(0deg)
        }
    }
    @keyframes rotate {
        from {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        to {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
    @keyframes bounce-in {
        0% {
            opacity: 0;
            transform: scale(.5);
        }
        50% {
            opacity: 0;
            transform: scale(.5);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
}
@media (max-height: 460px) {
    .container {
        top: 220px;
    }
    .share {
        .wrap {
            top: 20px;
            .desc {
                margin: 4px 0px !important;
            }
            .btn {
                height: 40px !important;
                line-height: 40px !important;
                width: 120px !important;
                font-size: 18px !important;
            }
            .guest-btn-wrap {
                margin-top: 10px;
            }
        }
    }
}
@media (min-height: 460px) {
    .container {
        top: 220px;
    }
    .share {
        .wrap {
            top: 15px;
            .guest-btn-wrap {
                margin-top: 10px;
            }
        }
    }
}
@media (min-height: 530px) {
    .container {
        top: 290px;
    }
    .share {
        .wrap {
            top: 20px;
            .guest-btn-wrap {
                margin-top: 12px;
            }
        }
    }
}
@media(min-height: 600px) {
    .container {
        top: 300px;
    }
    .share {
        .wrap {
            top: 45px;
            .guest-btn-wrap {
                margin-top: 16px;
            }
        }
    }
}
@media (min-height: 700px) {
    .container {
        top: 320px;
    }
    .share {
        .wrap {
            top: 75px;
            .guest-btn-wrap {
                margin-top: 20px;
            }
        }
    }
}
@media (min-height: 800px) {
    .container {
        top: 350px;
    }
    .share {
        .wrap {
            top: 95px;
            .guest-btn-wrap {
                margin-top: 20px;
            }
        }
    }
}
@media (max-width: 320px) {
    .qiantong {
        .shake {
            width: 190px;
            height: 120px;
        }
    }
    .share {
        .wrap {
            .content-wrap {
                .share-pic-name {
                    top: 15%;
                }
            }
        }
    }
    .share-model {
        .share-prompt {
            left: calc(50% - 150px);
            width: 300px;
        }
    }
}
@media (min-width: 321px) {
    .qiantong {
        .shake {
            width: 190px;
            height: 120px;
        }
    }
    .share {
        .wrap {
            .content-wrap {
                .share-pic-name {
                    top: 15%;
                }
            }
        }
    }
    .share-model {
        .share-prompt {
            left: calc(50% - 150px);
            width: 300px;
        }
    }
}
@media (min-width: 375px) {
    .share-model {
        .share-prompt {
            left: calc(50% - 170px);
            width: 340px;
        }
    }
    .qiantong {
        .shake {
            width: 240px;
            height: 152px;
        }
    }
    .share {
        .wrap {
            .content-wrap {
                .share-pic-name {
                    top: 20%;
                }
            }
        }
    }
}
@media (min-width: 414px) {
    .share-model {
        .share-prompt {
            left: calc(50% - 180px);
            width: 360px;
        }
    }
    .qiantong {
        .shake {
            width: 250px;
            height: 158px;
        }
    }
    .share {
        .wrap {
            .content-wrap {
                .share-pic-name {
                    top: 25%;
                }
            }
        }
    }
}
</style>