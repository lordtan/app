$(document).ready(function(){
	    window.location.href="home.html"; //这个是ok的
	
        var code = genVarifyCode(); //当前生成的验证码
    	    
    	    $("#mycanvas").click(function(){
    	    	    code = genVarifyCode();
    	    	});
    	    
    	    $("#code_button").click(function(){
    	    	    var codeInput = $("#code_input").val();
    	    	    if(code==codeInput){
    	    	    	   window.location.href="home.html";
    	    	    }else{
    	    	    	   alert("您输入的验证码错误，请重新输入");
    	    	    	   code = genVarifyCode();
    	    	    }
    	    });
});

var app = {
    // Application Constructor
    initialize: function() {
    	    //alert("111");
    	    //window.location.href="home.html"; //这个是ok的
    	    //$.mobile.changePage ('pageSwitch.html')
    	    //3秒后自动跳转
    	    //setTimeout(function () {
    	    //	   window.location.href="home.html"; //这个是ok的
           //要处理的语句
        //},3000);
    	    
    	    var code = genVarifyCode();
    	    
    	    $("#mycanvas").click(function(){
    	    	    code = genVarifyCode();
    	    	});
    	    
    	    $("#code_button").click(function(){
    	    	    alert("1111");
    	    	    var codeInput = $("#code_input").val();
    	    	    alert(code+"-"+codeInput);
    	    });
    	    
    	    
    	    //cordova.InAppBrowser.open('success.html', '_blank', 'location=no,toolbar=yes,toolbarposition=top,closebuttoncaption=关闭');
        //document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        //alert("222");
        
        
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        //this.receivedEvent('deviceready');
         
        //测试页面跳转
        //cordova.InAppBrowser.open('success.html', '_blank', 'location=no,toolbar=yes,toolbarposition=top,closebuttoncaption=关闭');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

//app.initialize();  //初始化


