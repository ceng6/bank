$(function (){

    $("#btni").click(function(){
            var userName = $("#username").val();
            var password = $("#password").val();
            var isNotError = true;
            if(userName==""){
               alert("用户名为空 ")
                isNotError = false;
                return;
            }
            if(password==""){
                alert("密码为空 ")
                isNotError = false;
                return;
            }
          	$.ajax({
            url:port,
            type: "POST",
            data:{class:"userSignOn","actorname":userName,"password":password},
            //data:{class:"userSignOn","actorname":"sysadmin","password":"admin123"},
            dataType:'json',
            cache:false,
            success:function(r){
                if(!r){
                   alert('用户名或者密码错误！');
                }
                if (r.status){
                    //r = JSON.stringify(r.result);
                    setCookie('home',r,1);

                    //设置过期时间
                   window.open('daikuanshisuan.html','_self');
                    //window.location.href = "shouye.html?data=" + escape(JSON.stringify(r.result.role_id));//跳转到首页
                }else{
                    alert(r.message);
                }
            },error:function(r){
                alert('用户名或者密码错误！');
            }

        });
    });
});
//860030013 123456 对公
//3160096   个人