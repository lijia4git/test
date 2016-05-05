
var flag = 0;

var c=0,cou = 0,nt = 0,count2=1,count = 0,touchnum = 0;
var timer = null,timert = null,timer1 = null;
var gamenum = 0;
var agingame = 0, ok = 0;

$(function(){
	/*********************ç¦ç”¨å¼¹æ€?******************************/
	/* $(window).on("scroll.elasticity",function(e){
			 e.preventDefault;
		}).on("touchmove.elasticity",function(e){
			    e.preventDefault;
	});
     document.addEventListener("touchmove", function (e) {
        e.preventDefault();
    });*/
    /*************************end********************************/

    /***********************ç¼©æ”¾åŠé«˜åº?*******************************/
   var ph=Number(window.innerHeight*640/window.innerWidth);
   var zs=window.innerWidth/640;
   $(".WScale").css({"zoom":zs});
   $(".WScale,.page1,.page2,.page3,.page4,.page5,.endpage,.endMask,.sharepage,.pageShare,.loadpage").height(ph);
   $("body").height(window.innerHeight).width(window.innerWidth);
   /*************************end********************************/



     /**************************预加载**********************************/

   var imgsstr=["1bg.jpg","1i.png","cs.png","an.png","1.png","1t.png","2.png", "2t.png","3.png","3t.png",
   "4.png","4t.png","anb.png","top.png","yyp.jpg","ypk.png","yyy.jpg","rtop.png","sd.png","rrr.png","yp.png","logo.png",
   "11.jpg","2bg.jpg","3bg.jpg","sdf.png","share.png","yb.png","yb2.png","sj.png","xx.png","yyv.png"];

   var loadtimer;
   var imgs=new Array();
   var img;
   for(var i=0;i<imgsstr.length;i++){
      img=new Image();
      img.src="Content/img/" + imgsstr[i];
      imgs.push(img);
   }
   var loadCount=0;
   var loadedCount=0;
   var counter=0;
   var imageCount = imgsstr.length;
   function loadingPicture(){
        for (i = 0; i < imageCount; i++) {
            if (imgs[i].complete) {
                  loadedCount++;
                  if (loadedCount <= imageCount) {
                      counter = Math.floor(loadedCount / imageCount * 100);
                      $(".loadingimg").css({"height":counter * 268 /100 + "px"});
                    $(".loadT").html("加载"+counter+"%");
                  }
                  if (loadedCount == imageCount) {
                    $(".loadT").html("加载100%");
                        $(".loadingimg").css({"height":"268px"});
                      setTimeout(turn,300);
                  }
            }
            if (!imgs[i].complete) {
                  loadCount++;
                  $(imgs[i]).bind("load", function (e) {
                      loadedCount++;
                       if (loadedCount <= imageCount) {
                         counter = Math.floor(loadedCount / imageCount * 100);
                         $(".loadingimg").css({"height":counter * 268 /100 + "px"});
                       $(".loadT").html("加载"+counter+"%");
                      }
                      if (loadedCount == imageCount) {
                        $(".loadingimg").css({"height":"268px"});
                        $(".loadT").html("加载100%");
                          setTimeout(turn,300);
                      }
                  });
            }
         }
   }
   loadingPicture();

  var music = false;
  var video = $("#audione").get(0);
  var videot = $("#auditwo").get(0);
   playmuscon(videot);

   var bg = document.getElementById("auditwo");
  $(".musicBtn").bind("click", function () {
        if (!music) {
            $(".musicBtn").css({"background":"url(Content/img/music.png) 0% 0% no-repeat"});
           playmuscoff(videot);
            music = !music;
        } else {
            $(".musicBtn").css({"background":"url(Content/img/music.png) 100% 0% no-repeat"});
            playmuscon(videot);
            music = !music;
        }
  });

  //活动规则
  $(".rule").bind("click",function(){
    if(flag == 1){
    $(".rulepage").show();
   }
  });
  //开挠
  $(".closerule").bind("click",function(){
    $(".rulepage").hide();
  });
  
  //开始
  $(".btnone").bind("click",function(){
    if(flag == 1){
      $(".page1").hide();
      $(".page2").show();
      timegame();
    }
  });


   function turn(){
      $(".loadpage").hide();
      $(".page1").show();
      clearInterval(loadtimer);
      onepage();
   }


   //规则
  $(".getBtn").bind("click",function(){
    $(".page3").hide();
    $(".page1").show();
  });
  var htmlt = "<div class='one rippleone'></div>";

  $(".AginbtnO").bind("click",function(){
      count = 0;
      agingame = 0;
      ok = 1;
      touchnum = 0;
      number = 0;
       $(".touchimg").attr("src","Content/img/2.png");
      $(".btnBoxO").hide();
  });

  

   //送财神
  $(".sendBtn,.sendBtnO").bind("click",function(){
      $(".sharepage").show();
  })

  $(".sharepage").bind("click",function(){
      $(this).hide();
  });

   //再来一次
  $(".Aginbtn").bind("click",function(){
      ok = 1;
      touchnum = 0;
      number = 0;
      agingame = 0
      $(".touchimg").attr("src","Content/img/2.png");
      $(".page4").hide();
      $(".page2").show();
      $(".touchT").removeClass("touchTact");
  });

   //核销
  $(".chargeBtn").bind("click",function(){
      $(".chargeOff").hide();
      $(".Hint").show();
  });

  $(".GetPrize").bind("click",function(){
    $(".Maskp").show();
  });

  $(".goGame").bind("click",function(){
    ok = 1;
    $(".Maskp,.page5").hide();
    $(".page2").show();
  });



  $(".touchrange").bind("touchstart",function(){
    if(ok == 1){
      playmusc(video);
      $(".touchT").removeClass("touchTact");
      count++;
      cou = 0; 
      c = 0;
      if(count2 ==1){
        count2++;
        timert = setInterval(function(){         
          nt++;
          if(nt>0){};
          if(nt%3==1){
            c=100;
            cou=0;
          }
          //console.log(nt%3);
        },1000);
      }
        
      clearInterval(timer);
      timer = setInterval(function(){
        c++;
        if( c > 150 ){//大于1秒
          //clearInterval(timert);
          clearInterval(timer);
          console.log("大于1秒");
          gamenum++;
          if(gamenum == 1){//第一次组点击
            if(count >= 10){
              $(".touchimg").attr("src","Content/img/4.png");
              $(".touchT").css("background","url(Content/img/4t.png)");
              $(".touchT").addClass("touchTact");
              ok = 0;
              setTimeout(function(){
                $(".page2").hide();
                $(".page5").show();

              },600);
              console.log("得到银票");
            }
            else if(count < 10){
              gamenum--;
              $(".touchimg").attr("src","Content/img/2.png");
              $(".touchT").css("background","url(Content/img/6t.png)");
              $(".touchT").addClass("touchTact");
              console.log("没有奖");
            }
            count == 0;
          }
          else if(gamenum == 2){
            $(".touchimg").attr("src","Content/img/2.png");
            $(".touchT").css("background","url(Content/img/6t.png)");
            $(".touchT").addClass("touchTact");
            console.log("怎么都不中奖");
            count == 0;
          }
          else if(gamenum == 3){
            if(count < 10){
              gamenum--;
              console.log("没奖");
            }else{
              $(".touchimg").attr("src","Content/img/4.png");
              $(".touchT").css("background","url(Content/img/5t.png)");
              $(".touchT").addClass("touchTact");
              ok = 0;
              console.log("中奖");
              setTimeout(function(){
                $(".page2").hide();
                $(".page4").show();
              },600);
            }
          }
          else{
            console.log("今天再也不会中了");
            console.log("gamenum" + gamenum);
            agingame++;
            gamerusule(count);
            if(agingame == 3){
              $(".btnBoxO").show();
              ok = 0;
            }
          }
        }
      },10);
      if(count % 2 == 1){
        $(".touchbox").append("<div class='one rippleone ripple" + count +"'></div>");
      }
      setTimeout(function(){
        $(".ripple" + touchnum).remove();
      },2000);
    }
  });



  //加载动画
  var loadimg = $(".loadimg");
  var i=0;
  loadtimer = setInterval(function(){
    if( i< loadimg.length ){
      $(".loadimg").eq(i).addClass("loadact");
            
      setTimeout(function(){
        $(".loadimg").eq(i).removeClass("loadact");
      },1000);
      i++;
      if(i == loadimg.length){
        i = 0;
      }
    }
  },300);
   
  
   


  
   var btnSelect = $(".btn_select"); 
   var curSelect = $(".cur-select"); 
   var oSelect = $(".select1"); 
   var aOption = btnSelect.children("option"); 
   oSelect.change(function(){
      var text = oSelect.find("option:selected").text(); 
      curSelect.text(text); 
   });

   var btnSelect1 = $(".btn_select1"); 
   var curSelect1 = $(".cur-select1"); 
   var oSelect1 = $(".select2"); 
   var aOption1 = btnSelect1.children("option"); 
   oSelect1.change(function(){
      var text1= oSelect1.find("option:selected").text(); 
      curSelect1.text(text1); 
   });

   var btnSelect2 = $(".btn_select2"); 
   var curSelect2 = $(".cur-select2"); 
   var oSelect2 = $(".select3"); 
   var aOption2 = btnSelect1.children("option"); 
   oSelect2.change(function(){
      var text2= oSelect2.find("option:selected").text(); 
      curSelect2.text(text2); 
   });
  


})


function onepage(){
	setTimeout(function(){
		$(".titleimg").addClass("imgrotate");
	},2000);
  setTimeout(function(){
    $(".page1").hide();
    $(".page3").show();
    flag = 1;
  },2500);
}

function playmusc(video) {
  if(video.pause){
     video.play();
  }
       // video.pause();
}

function playmuscon(video) {
        video.play();
}
function playmuscoff(video){
   video.pause();
}



function counter(){
	var htmlt = "<div class='one rippleone'></div>";
   var count = 0;
   $(".touchrange").bind("touchstart",function(){
   	count++;
   	 $(".touchbox").append(htmlt);
   });
    setTimeout(function(){
   	 	alert(count);
   	 },3000);
}

function turnpage(){
  clearTimeout(timer1);
  setTimeout(function(){
     $(".Masky").show();
  },2000);
  setTimeout(function(){
     $(".Masky").hide();
        $(".page3").show();
        $(".page2").hide();
  },3000);
}


function gamerusule(number){
  var rannum = Math.ceil(Math.random() * 3);
  console.log(rannum);

  
    $(".touchimg").attr("src","Content/img/" +rannum + ".png");
    $(".touchT").css("background","url(Content/img/" + rannum + "t.png)");
    $(".touchT").addClass("touchTact");
  

}

function timegame(){
  var gtime = 3;
  var gametimer =null;
  gametimer = setInterval(function(){
    if(gtime == 0){
      clearInterval(gametimer);
      $(".startnum").hide();
      ok = 1;
    }else{
      $(".startnum").text(gtime--);
    }
  },1000);
  
}