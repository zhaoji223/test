<template>
    <div class='image-preview'>
        <div style='padding: 17.5px 16px 0px;'>
            <img v-for='item in list' class='image-icon' :src='item' alt="" @click='chageCurSelect(item)'>
        </div>
        <imagePreview v-if='showPreView' :imageList='list' :curImage='cur' @closePreview='closePreview'></imagePreview>
    </div>
</template>

<script>
function is_weixin() {
	var ua = navigator.userAgent.toLowerCase();
	return ua.match(/MicroMessenger/i) == "micromessenger";
};
import imagePreview from './imagePreview'
export default {
    name: "image_preview",
    data() {
        return {
            showPreView: false,
            list: [
                'https://static2.qschou.com/img/v8/image_preview/assets/1.jpg',
                'https://static2.qschou.com/img/v8/image_preview/assets/2.jpg',
                'https://static2.qschou.com/img/v8/image_preview/assets/3.jpg',
                'https://static2.qschou.com/img/v8/image_preview/assets/4.jpg',
                'https://static2.qschou.com/img/v8/image_preview/assets/5.jpg',
                'https://static2.qschou.com/img/v8/image_preview/assets/6.jpg',
                'https://static2.qschou.com/img/v8/image_preview/assets/7.jpg',
                'https://static2.qschou.com/img/v8/image_preview/assets/8.jpg',
            ],
            cur: '',
        }
    },
    components: {
        imagePreview
    },
    methods: {
        chageCurSelect(cur) {
            this.cur = cur
            // let curGroupImgs = this.list
            // if(is_weixin()) {
            //     wx.previewImage({
            //         current: cur,
            //         urls: curGroupImgs
            //     });
            // }
            this.showPreView = true
            
        },
        closePreview() {
            console.log('close')
            this.showPreView = false
        }
    },
    // watch: {
    //     cur: function(newV, oldV) {
    //         let curImg = this.cur
    //         let curGroupImgs = this.list
    //         if(is_weixin()) {
    //             wx.previewImage({
    //                 current: curImg,
    //                 urls: curGroupImgs
    //             });
    //         }
    //     }
    // },
    mounted() {
        this.cur = 'https://static2.qschou.com/img/v8/image_preview/assets/2.jpg'
    }
};
</script>

<style lang="less">
.image-preview {
    .image-icon {
        margin: 2% 2% 2% 0;
        width: 23%;
        height: 23%;
    }
}
</style>