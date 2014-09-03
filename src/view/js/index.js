require(["jquery", "common"], function($, commonFunction) {
	var COOKIE_NAME = "testMyCookie";

    //判断是否有cookie，动态显示状态，跳转到登录页面
    var cookieValue=commonFunction.getCookie(COOKIE_NAME);
    if(cookieValue&&cookieValue==="success"){
        $("#login-link a").text("退出"); 
    }else{
        $("#login-link a").text("登录"); 
    }

    //用户退出删除cookie
    $("#login-link a").click(function(){
        if($(this).text()==="退出"){
            commonFunction.setCookie(COOKIE_NAME, "fail", -1);
        }
    });

});
