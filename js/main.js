var time=0; //周期1
var times=0; //周期2
var index = 0; //轮播图指标
var pointer = 59;  //倒计时数字
var pointers= 59;

$('.jd_addBox').mouseover(function(){
$('.hide_addBox').css("display","block");
})
$('.jd_addBox').mouseout(function(){
  $('.hide_addBox').css("display","none");
  
  })

  $('.add_item').mousedown(function(){
    var a=$(this).children(a).html();
    $(".add_item.active").removeClass('active');
    $(this).addClass('active');
    $('#a1').html(a);
    $('.hide_addBox').css("display","none");

})
  $('.banner_btn.prev').mousedown(function(){
    var pt=-1;
    var tt= $('ul li.active').index();
    change(tt,pt);
  })
  $('.banner_btn.next').mousedown(function(){
    var p=1;
    var index= $('ul li.active').index();
    change(index,p);
  })
  $('.banner_box ol li').mouseover(function(){
    　　var u=$(this).index();
        console.log(u);
        change(u-1,2);
    })
  function change(index,p){
    p>0? index++ : index--
    var r=$('.banner_box ul li');
    var r1=$('.banner_box ol li');
    if(index<0){
      index=r.length-1;
    }
    if(index>7){
      index=0;
    }
    r.removeClass('active');
    r.eq(index).addClass('active');
    r1.removeClass('active');
    r1.eq(index).addClass('active');
  }
  function zidong(){
    var flag = 1;
    if(index >=8){
      index=0;
    }
    change(index,flag);
    index++;
  }
  time = setInterval("zidong()",3000); //5秒调用一次函数
  $('.banner_box').mouseover(function(){
    　　clearInterval(time);
       index= $('ul li.active').index();
    })
  $('.banner_box').mouseout(function(){
   clearInterval(time);
   time = setInterval("zidong()",3000); 
  })
function zijian(){
  pointer--;
  if(pointer==0){
    pointers--;
    $('.cd_item.cd_minute').html(pointers);
    pointer=59;
  }
  $('.cd_item.cd_second').html(pointer);
} 
times = setInterval("zijian()",1000); 

              //实现商品无痕连接
var ulSlider = $('.list_slider');
var btnPrev = $('.list_btn_prev');
var btnNext = $('.list_btn_next');
var listSlider = $(".list_slider li");
var widthSlider =$(".list_slider li").outerWidth() *4;
var indexSlider = 0;
// 3.左边按钮点击事件

btnPrev.mousedown(function(){ 
    if(indexSlider == 0){
        indexSlider = listSlider.length / 4 - 1;
        ulSlider.css("left", -indexSlider * widthSlider + "px");
    }
    indexSlider--;
    animationMove(ulSlider, -indexSlider * widthSlider);
  })

//4.右边按钮点击事件
btnNext.mousedown(function(){ 
    if(indexSlider == listSlider.length / 4 - 1){
        indexSlider = 0;
        ulSlider.css("left", -indexSlider * widthSlider + "px");
    }
    indexSlider++;
    animationMove(ulSlider, -indexSlider * widthSlider)
  })
// 4.封装一个滚动动画函数
function animationMove(obj, target) {  // 参数1：需要轮播的对象  参数2：所需达到的目标值
    clearInterval(obj.timeId)
    obj.timeId = setInterval(function() {
        var currentLeft = obj.position().left; // 获取元素当前的left值
        // 定义一个判断值
        var isLeft = currentLeft >target ? true : false;
        if(isLeft) {
            currentLeft -= 10;
        }else{
            currentLeft += 10;
        }
        if(isLeft?currentLeft > target : currentLeft < target) {
            obj.css("left", currentLeft + "px");
        }else {
            clearInterval(obj.timeId);
            obj.css("left", target + "px");
        }
    },10)
}
                   //js方法
// var ulSlider = document.querySelector(".list_slider");
//     var btnPrev = document.querySelector(".list_btn_prev");
//     var btnNext = document.querySelector(".list_btn_next");
//     var listSlider = document.querySelectorAll(".list_slider li")
//     // 2.获取li的宽度
//     var widthSlider = document.querySelector(".list_slider li").offsetWidth * 4;
//     var indexSlider = 0;
//     // console.log(listSlider.length)

//     // 3.左边按钮点击事件
//     btnPrev.onclick = function() {
//         if(indexSlider == 0){
//             console.log(0)
//             indexSlider = listSlider.length / 4 - 1;
//             ulSlider.style.left =  -indexSlider * widthSlider + "px";
//             console.log(ulSlider.style.left);
//         }
//         indexSlider--;
//         animationMove(ulSlider, -indexSlider * widthSlider)
//     }
//     // 4.右边按钮点击事件
//     btnNext.onclick = function() {
//         if(indexSlider == listSlider.length / 4 - 1){
//             // console.log(0)
//             indexSlider = 0;
//             ulSlider.style.left =  -indexSlider * widthSlider + "px";
            
            
//         }
//         indexSlider++;
//         animationMove(ulSlider, -indexSlider * widthSlider)
        
//     }

//     // 4.封装一个滚动动画函数
//     function animationMove(obj, target) {  // 参数1：需要轮播的对象  参数2：所需达到的目标值
//         clearInterval(obj.timeId)
//         obj.timeId = setInterval(function() {
//             var currentLeft = obj.offsetLeft; // 获取元素当前的left值
            
//             console.log(currentLeft);
//             // 定义一个判断值
//             var isLeft = currentLeft >target ? true : false;
//             if(isLeft) {
//                 currentLeft -= 10;
//             }else{
//                 currentLeft += 10;
//             }

//             if(isLeft?currentLeft > target : currentLeft < target) {
//                 obj.style.left = currentLeft + "px";
//             }else {
//                 clearInterval(obj.timeId);
//                 obj.style.left = target + "px";
//             }
//         },10)
//     }



          //右栏按钮动画
          
          var timerss;

  
  $(".jd_icon ul li").mouseover(function(){
    var a=$(this).find(".icon_tang");
    
    if(a.length == 0){

      timerss=setTimeout(function(){
        $(".jd_icon .icon_bottoms").css("background-color","#c81632");
        $(".jd_icon .icon_bottoms").animate({right:'33px'},200);
      
      },200);

    } else {
  	timerss=setTimeout(function(){
      a.animate({right:'33px'},200);
    
    },200);}
  	})
  $(".jd_icon ul li").mouseout(function(){
    clearTimeout(timerss);
    var a=$(this).find(".icon_tang");
    if(a.length == 0){
      $(".jd_icon .icon_bottoms").stop();
      $(".jd_icon .icon_bottoms").css("background-color","#7a6e6e");
      $(".jd_icon .icon_bottoms").animate({right:'-17px'},200);
    }

    $(".icon_tang").stop();  //正在执行的动画停止
    $(".icon_tang").animate({right:'-37px'},200);
  })

  $(".icon_item.icon_bottom").mousedown(function(){
    console.log(1);
    $('html,body').animate({scrollTop:0},200);
  })
