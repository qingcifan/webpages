/*common.js*/
/*调整页面最小高度*/
function getHeight() {
  /*FF浏览器下兼容最小高度*/
  if($(".item_content").height()<500)
    $(".item_content").css("height", "500");/*min-height:300px*/
}