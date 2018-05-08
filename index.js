$(function() {
  //li的动态变化
  function rotateZ(li, reg) {
    $(li)
      .css({ transform: "rotateZ(" + reg + "deg)" })
      .find("label")
      .css({ transform: "rotateZ(" + -reg + "deg)" });
  }
  //展示、隐藏li

  function changeOptions(ele) {
    var $containor = $(ele).parent(); //选出父级元素containor
    $containor.toggleClass("open"); //给父级设置open类名
    var $li = $containor.find("li"); //选出所有的li
    var deg = 360 / $li.length; //算出间距度数
    for (var i = 0; i < $li.length; i++) {
      var d = i * deg; //算出每个li所在的角度
      $containor.hasClass("open") ? rotateZ($li[i], d) : rotateZ($li[i], -360);
    }
  }
  $("button").click(function() {
    changeOptions(this);
  });
  setTimeout(function() {
    changeOptions(".containor button");
  }, 100);
});
