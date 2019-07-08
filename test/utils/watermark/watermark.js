'use strict';
require('./watermark.css');
var Watermark = function(container, options) {
    var self = this;
    self.opt = {
        // docWidth: $(document).width(),
        // docHeight: $(document).height(),
        docWidth: document.documentElement.clientWidth,
        docHeight: document.documentElement.clientHeight,
        fontStyle: "20px 黑体", //水印字体设置
        rotateAngle: -20 * Math.PI / 180, //水印字体倾斜角度设置
        fontColor: "rgba(100, 100, 100, 0.1)", //水印字体颜色设置
        firstLinePositionX: -20, //canvas第一行文字起始X坐标
        firstLinePositionY: 80, //Y
        SecondLinePositionX: 0, //canvas第二行文字起始X坐标
        SecondLinePositionY: 70 //Y
    };
    // $.extend(self.opt, options);
    self.opt = {...self.opt, ...options};
    self.render(container);
    self.draw(self.opt.docWidth, self.opt.docHeight);
    self.events();
};

Watermark.prototype = {
    render: function(d) {
        var self = this;
        d.append(tpl);
    },

    draw: function(docWidth, docHeight, txt) {
        var self = this;
        // var cw = $('#watermark')[0];
        // var crw = $('#repeat-watermark')[0];
        var cw = document.getElementById('watermark');
        var crw = document.getElementById('repeat-watermark');

        crw.width = docWidth;
        crw.height = docHeight;

        var ctx = cw.getContext("2d");
        //清除小画布
        ctx.clearRect(0, 0, 200, 100);
        ctx.font = self.opt.fontStyle;
        //文字倾斜角度
        ctx.rotate(self.opt.rotateAngle);

        ctx.fillStyle = self.opt.fontColor;
        //第一行文字
        ctx.fillText(self.opt.watermark, self.opt.firstLinePositionX, self.opt.firstLinePositionY);
        //第二行文字 
        //ctx.fillText(window.watermark.mobile, self.opt.SecondLinePositionX, self.opt.SecondLinePositionY);
        //坐标系还原
        ctx.rotate(-self.opt.rotateAngle);

        var ctxr = crw.getContext("2d");
        //清除整个画布
        ctxr.clearRect(0, 0, crw.width, crw.height);
        //平铺--重复小块的canvas
        var pat = ctxr.createPattern(cw, "repeat");
        ctxr.fillStyle = pat;

        ctxr.fillRect(0, 0, crw.width, crw.height);
    },
    events: function() {
        var self = this;
        window.addEventListener('resize', function() {
            var w = document.documentElement.clientWidth;
            var h = document.documentElement.clientHeight;
            self.draw(w, h);
        })
        // $(window).resize(function() {
        //     var w = document.documentElement.clientWidth;
        //     var h = document.documentElement.clientHeight;
        //     self.draw(w, h);
        // });
    }

};

var tpl = '<canvas id = "watermark" width = "200px"  height = "100px" style="display:none;"></canvas>' + '<canvas id = "repeat-watermark"></canvas>';

module.exports = Watermark;

