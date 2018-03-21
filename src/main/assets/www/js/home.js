$(document).ready(function(){
	
	/**
	 * js调用Android后台类 
	 */
	$("#testInvoke").click(function(){
		 alert("按钮被点击"); 
         cordova.exec(success, fail, "jsTest", "speak", ["你好啊佩奇"]);
    });
    var success = function(message){
	    alert("success = "+message);
	};
    var fail = function(message){
        alert("fail = "+message);
    };
	
	//监听信息按钮点击
	$("#messageHref").bind("click",function(){
		  $("#pageContent").empty();
		  $.get("message.html",function(data,status){
               $("#pageContent").html(data);
          });
	});
	
	//监听充值按钮点击
	$("#rechargeHref").bind("click",function(){
		  $("#pageContent").empty();
		  $.get("recharge.html",function(data,status){
               $("#pageContent").html(data);
          });
	});
	
	//点击商户按钮
	$("#sellerHref").bind("click",function(){
	   //alert("正在开发中，敬请期待");
	   $("#pageContent").empty();
		  $.get("seller.html",function(data,status){
               $("#pageContent").html(data);
          });
	});
	
	//点击我的按钮
	$("#myHref").bind("click",function(){
	   $("#pageContent").empty();
		  $.get("my.html",function(data,status){
               $("#pageContent").html(data);
       });
	});	
	
	initContentHeight(); //高度初始化
	
});

/**
 * 初始化内容高度 
 */
function initContentHeight(){
	var screen = $.mobile.getScreenHeight(),
    header = $(".ui-header").hasClass("ui-header-fixed") ? $(".ui-header").outerHeight() - 1 : $(".ui-header").outerHeight(),
    footer = $(".ui-footer").hasClass("ui-footer-fixed") ? $(".ui-footer").outerHeight() - 1 : $(".ui-footer").outerHeight(),
    contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height(),
    content = screen - header - footer - contentCurrent;
    $(".ui-content").height(content);
}
	

	
	


