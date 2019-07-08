/**
 *  微信分享公共插件
 *  var shareDataObj = {
 *      title: '标题',
 *      imgUrl: '图片地址',
 *      desc: '描述',
 *      url: '地址',
 *      titleMoment:'分享朋友圈的标题'，
 *      encode:false,
 *      shareRecord: { // 其它，自定分享的扩展参数
 *          projuuid: '统计分享页面当前的项目uuid',
 *      },
 *      success: function() {
 *         //用户确认分享后的回调函数
 *      },
 *      cancel: function () {
 *         //用户取消分享后执行的回调函数
 *      }
 *  };
 *  init(shareDataObj);
 *
 */
var shareDataObj = {
    title: '首页 - 轻松筹',
    imgUrl: 'https://static2.qschou.com/img/v6/icon64.png',
    desc: '全球5.5亿用户信赖的全民健康保障平台',
    link: 'https://m2.qschou.com',
    titleMoment: '【轻松筹】全球5.5亿用户信赖的全民健康保障平台',
    encode: false,
    shareRecord: {}
};

function getShareUrl() {
    var s = shareDataObj.link;
    // do something
    return s;
}

function init(o) {
    if (o) {
        //标题
        if (o.title) {
            shareDataObj.title = o.title;
            shareDataObj.titleMoment = o.title;
        };
        //朋友圈标题
        if (o.titleMoment) {
            shareDataObj.titleMoment = o.titleMoment;
        };
        //图片
        if (o.imgUrl) {
            shareDataObj.imgUrl = o.imgUrl;
        };
        //描述
        if (o.desc) {
            shareDataObj.desc = o.desc;
        };
        //描述
        if (o.encode) {
            shareDataObj.encode = o.encode;
        };

        if (o.url) {
            shareDataObj.link = o.url;
        }
        if (o.shareRecord) {
            shareDataObj.shareRecord = o.shareRecord;
        }
    } else {
        o = shareDataObj;
    }
    // //其它
    // if (o.other) {
    //     shareDataObj.other = o.other ? o.other : {};
    // }

    // 调用api, 获取 appid, timestamp, nonceStr, signature
    qscModule.qscAjax.get(window.APIBasePath + 'index/mp').then(function(res) {
        /** 微信配置config */
        wx.config({
            debug: false,
            appId: res.appId,
            timestamp: res.timestamp,
            nonceStr: res.nonceStr,
            signature: res.signature,
            jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone',
                'hideMenuItems',
                'showMenuItems',
                'hideAllNonBaseMenuItem',
                'showAllNonBaseMenuItem',
                'translateVoice',
                'startRecord',
                'stopRecord',
                'onRecordEnd',
                'playVoice',
                'pauseVoice',
                'stopVoice',
                'uploadVoice',
                'downloadVoice',
                'chooseImage',
                'previewImage',
                'uploadImage',
                'downloadImage',
                'getNetworkType',
                'openLocation',
                'getLocation',
                'hideOptionMenu',
                'showOptionMenu',
                'closeWindow',
                'scanQRCode',
                'chooseWXPay',
                'openProductSpecificView',
                'addCard',
                'chooseCard',
                'openCard'
            ]
        });

        wx.ready(function() {
            /** 分享给朋友圈 */
            wx.onMenuShareTimeline({
                title: shareDataObj.titleMoment,
                link: getShareUrl(),
                imgUrl: shareDataObj.imgUrl,
                success: function() {
                    o.success && o.success(1);
                    shareTrackEvent(1);
                },
                cancel: function() {
                    o.cancel && o.cancel(1);
                }
            });
            /** 分享给朋友或者群 */
            wx.onMenuShareAppMessage({
                title: shareDataObj.title, // 分享标题
                desc: shareDataObj.desc, // 分享描述
                link: getShareUrl(), // 分享链接
                imgUrl: shareDataObj.imgUrl, // 分享图标
                type: 'link', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function() {
                    o.success && o.success(2);
                    shareTrackEvent(2);
                },
                cancel: function() {
                    o.cancel && o.cancel(2);
                }
            });

            /** 分享到QQ空间 */
            wx.onMenuShareQZone({
                title: shareDataObj.title, // 分享标
                desc: shareDataObj.desc,
                link: getShareUrl(),
                imgUrl: shareDataObj.imgUrl,
                success: function() {
                    o.success && o.success(4);
                    shareTrackEvent(4);
                },
                cancel: function() {
                    o.cancel && o.cancel(4);
                }
            });

            /** 分享到QQ */
            wx.onMenuShareQQ({
                title: shareDataObj.title,
                desc: shareDataObj.desc,
                link: getShareUrl(),
                imgUrl: shareDataObj.imgUrl,
                success: function() {
                    o.success && o.success(5);
                    shareTrackEvent(5);
                },
                cancel: function() {
                    o.cancel && o.cancel(5);
                }
            });

            /** 分享给QQweibo */
            wx.onMenuShareWeibo({
                title: shareDataObj.title,
                desc: shareDataObj.desc,
                link: getShareUrl(),
                imgUrl: shareDataObj.imgUrl,
                success: function() {
                    o.success && o.success(6);
                    shareTrackEvent(6);
                },
                cancel: function() {
                    o.cancel && o.cancel(6);

                }
            });
        });
        wx.error(function(res) {});
    })
};

/** 
 * 分享成功后的统计数据方法
 * 1 朋友圈；2 朋友/群；4 QQ空间；5 QQ；6 QQ微博
 */
function shareTrackEvent(n) {
    // do something
}

export default {
    init
}