var AjaxJSONP = require('jsonp');
const url = `https://gateway.qschou.com/v3.0.0/feed/project?uuid=e0a82600-7323-49d8-9063-e1155563478f`;
AjaxJSONP({
    url
}).then(res => {
    console.log(res)
})
// console.log(AjaxJSONP)