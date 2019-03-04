<template>
    <div class='comp-image-preview'>
        <img class='preview-img' :src="curImgCopy" alt="预览图片">
        <div v-if='!isWeiXinEnv' class='wrapper'>
            <div class='close-preview' @click='closePreview'>关闭</div>
            <div class='preview-index'>
                {{curImgIndex}} / {{imageList.length}}
            </div>
            <div class='pre-btn' @click='changeCurPreview("pre")'>
                <span></span>
            </div>
            <div class='next-btn' @click='changeCurPreview("next")'>
                <span></span>
            </div>
        </div>
        
    </div>
</template>

<script>
    function is_weixin() {
        var ua = navigator.userAgent.toLowerCase();
        return ua.match(/MicroMessenger/i) == "micromessenger";
    };
    export default {
        name: "comp_image_preview",
        data() {
            return {
                isWeiXinEnv: false,
                curImgIndex: 1,
                curImgCopy: '',
            }
        },
        props: {
            imageList: {
                type: Array,
                default: []
            },
            curImage: {
                type: String,
                default: ''
            }
        },
        methods: {
            closePreview() {
                this.$emit('closePreview', false)
            },
            changeCurPreview(param) {
                if(param == 'pre') {
                    this.curImgIndex == 1 ? this.curImgIndex = this.imageList.length : this.curImgIndex -= 1
                } else if(param == 'next') {
                    this.curImgIndex == this.imageList.length  ? this.curImgIndex = 1 : this.curImgIndex += 1
                } else {
                    return
                }
                this.curImgCopy = this.imageList[this.curImgIndex - 1]
            }
        },
        // watch: {
        //     curImgCopy: function(newV, oldV) {
        //         let curImg = newV
        //         let curGroupImgs = this.imageList
        //         if(is_weixin()) {
        //             wx.previewImage({
        //                 current: curImg,
        //                 urls: curGroupImgs
        //             });
        //         }
        //     }
        // },
        mounted() {
            this.curImgCopy = this.curImage
            if(this.imageList.length) {
                this.curImgIndex = this.imageList.indexOf(this.curImage) + 1
            }
            if(is_weixin()) {
                this.isWeiXinEnv = true
                let curImg = this.curImgCopy
                let curGroupImgs = this.imageList
                // 微信预览
                wx.previewImage({
                    current: curImg,
                    urls: curGroupImgs
                });
                setTimeout(() => {
                    this.$emit('closePreview', false)
                }, 0)
            }
        }
    }
</script>

<style lang="less" scoped>
    .comp-image-preview {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .8);
        z-index: 999999;
        
        .preview-img {
            position: absolute; 
            left: 0px; 
            right: 0px; 
            top: 0px; 
            bottom: 0px; 
            margin: auto;
            width: 100%;
            max-width: 100%;
            max-height: 100%;
        }
        .wrapper {
            height: 100%;
            .close-preview {
                display: inline-block;
                position: absolute;
                right: 10px;
                top: 10px;
                width: 42px;
                color: #fff;
                font-weight: bold;
                text-align: center;
                z-index: 99999;
            }
            .preview-index {
                position: absolute;
                bottom: 0;
                width: 100%;
                font-weight: bold;
                color: #fff;
                background: rgba(0 , 0, 0, .5);
                text-align: center;
                box-sizing: border-box;
                -webkit-box-sizing: border-box;
            }
            .pre-btn {
                position: absolute;
                top: 0;
                display: flex;
                align-items: center;
                margin-left: 3%;
                height: 100%;
                width: 45%;            
                color: #fff;
                z-index: 9999;
                span {
                    display: inline-block;
                    border-color: transparent #ddd transparent transparent;
                    border-style: dashed solid dashed dashed;
                }
            }
            .next-btn {
                position: absolute;
                top: 0;
                right: 0;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin-right: 3%;
                height: 100%;
                width: 45%;            
                color: #fff;
                z-index: 9999;
                span {
                    display: inline-block;
                    border-color: transparent transparent transparent #ddd;
                    border-style: dashed dashed dashed solid;
                }
            }
        }

        @media (max-width: 320px) {
            .close-preview {
                font-size: 13px;
                width: 42px;
                line-height: 42px;
            }
            .preview-index {
                font-size: 21px;
                height: 42px;
                line-height: 42px;
            }
            .pre-btn, .next-btn {
                span {
                    border-width: 17px;
                }
            }
        }
        @media (min-width: 321px) {
            .close-preview {
                font-size: 13px;
                width: 42px;
                line-height: 42px;
            }
            .preview-index {
                font-size: 21px;
                height: 42px;
                line-height: 42px;
            }
            .pre-btn, .next-btn {
                span {
                    border-width: 17px;
                }
            }
        }
        @media (min-width: 375px) {
            .close-preview {
                font-size: 15px;
                width: 50px;
                line-height: 50px;
            }
            .preview-index {
                font-size: 25px;
                height: 50px;
                line-height: 50px;
            }
            .pre-btn, .next-btn {
                span {
                    border-width: 20px;
                }
            }
        }
        @media (min-width: 414px) {
            .close-preview {
                font-size: 16px;
                width: 55px;
                line-height: 55px;
            }
            .preview-index {
                font-size: 27px;
                height: 55px;
                line-height: 55px;
            }
            .pre-btn, .next-btn {
                span {
                    border-width: 22px;
                }
            }
        }
    }
    
</style>
