
/*
* @Author: Marte
* @Date:   2017-04-25 17:07:10
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-05 17:10:07
*/

'use strict';
        $(function(){
                if($('#page-wrapper').height()<$(window).height()){
                     $('#page-wrapper').height($(window).height())
                 }

        $("#menu-wrapper").html('<ul class="menu">'
                        +'<li id="a-submenu-1" class="icon plus">'
//                          +'<a href="javascript:;">'
                            +'<a href="kehuxinxi.html">'
                            +'<span class="menu-li-title">客户信息</span>'
                            +'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="" />'
                        	+'</a>'
                        	+'<li id="a-submenu-1" class="icon plus">'
                        	+'<a href="daikuandingjia.html">'
                            +'<span class="menu-li-title">贷款定价</span>'
                            +'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="" />'
                        	+'</a>'
                        	+'</li>'
//                      +'</a>'
//                      +'<ul id="submenu-1">'
//                        +'<li>'
//                              +'<a href="kehuxinxi.html">'
//                                  +'<span class="menu-li-title">客户信息</span>'
//                                  +'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="" />'
//                              +'</a>'
//                          +'</li>'
//                          +'<li id="tap">'
//                              +'<a href="daikuandingjia.html">'
//                                  +'<span class="menu-li-title">贷款定价单</span>'
//                                  +'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="" />'
//                              +'</a>'
//                          +'</li>'
//                      +'</ul>'
                    +'</li>'
                    +'<li class="icon box" id="public">'<!-- 公司贷款定价 -->
                        +'<a href="daikuanshisuan.html">'
                          +'<span class="menu-li-title">对公贷款试算</span>'
                          +'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="" />'
                        +'</a>'
                    +'</li>'
                   /* +'<li class="icon info" id="person">'<!-- 小微贷款定价 -->
                        +'<a href="gerendaikuan.html">'
                          +'<span class="menu-li-title">个人贷款定价</span>'
                          +'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="" />'
                        +'</a>'
                    +'</li>'
                    +'<li class="icon book">'<!--系统管理-->
                        +'<a href="cunkuandingjia.html">'
                          +'<span class="menu-li-title">存款定价</span>'
                          +'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="" />'
                        +'</a>'
                    +'</li>'*/
                    +'<li class="icon star">'<!--系统管理-->
                        +'<a href="out.html">'
                          +'<span class="menu-li-title">退出系统</span>'
                          +'<img class="menu-li-arrow" src="img/icons/arrow-forward.png" alt="" />'
                        +'</a>'
                        +'</li>'
                        +'</ul>').appendTo("#menu-wrapper")
      /*  var str=unescape(location.href);
        //取得整个地址栏
        var data = {};
        if(str.indexOf("?") > -1){
           var num=str.indexOf("?");
           str=str.substr(num+1);
           data = eval(str);
         }*/
       // var data =$.parseJSON(getCookie('home'));
     /*   switch (data.role_id){
        case "3160096" :
            $("li#public").hide();
             $("li#public2").click(function(event){
                alert("权限不够");
                return false;
             });
             break;
        case "0013" :
            $("li#person").hide();
             $("li#person2").click(function(event){
                alert("权限不够");
                return false;
             });
              break;
        default :  break;
        }*/
     /*  if (data.role_id == "3160096") {
             $("li#public").hide();
             $("li#public2").click(function(event){
                alert("权限不够");
                return false;
             })
         }else if(data.role_id == "0013"){
             $("li#person").hide();
             $("li#person2").click(function(event){
                alert("权限不够");
                return false;
             })
         };*/

  })