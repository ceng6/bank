var port = 'http://192.168.1.101:8080/KCB_RPM/servlet/PhoneServlet';
$(function (){
    $('#btni').on('click',function (){
    	$.ajax({
            url:port,
            dataType:'json',
            cache:false,
            success:function(r){
                if (r.status){
                    alert(r)
                }else{
                    alert(r.message);
                }
            },error:function(r){
                alert('失败');
            }
        });
    });
});
//860030013 123456 对公
//3160096   个人