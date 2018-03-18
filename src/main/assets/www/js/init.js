var app = {
    // Application Constructor
    initialize: function() {
    	    //alert("111");
    	    //window.location.href="home.html"; //这个是ok的
    	    //$.mobile.changePage ('pageSwitch.html')
    	    //3秒后自动跳转
    	    //setTimeout(function () {
    	    	   window.location.href="home.html"; //这个是ok的
           //要处理的语句
        //},3000);
    	    
    	    
    	    
    	    
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

app.initialize();  //初始化


