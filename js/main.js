window.onload = function(){
  var imgList = document.getElementById("slides");
  var imgArr = document.getElementsByTagName("img");
  var buttonWrapper = document.getElementById("buttonWrapper");
  var container = document.getElementsByClassName("container");
  var allButtons = document.getElementsByClassName("buttonNumber");
  var index = 0;

  //初始图片所在位置
  imgList.style.width = 400*imgArr.length+"px";
  console.log( imgList.style.width);
  //数字按钮的位置
  buttonWrapper.style.left = (container.offsetWidth-buttonWrapper.offsetWidth)/2;
  //获取数字按钮，设置颜色
  allButtons[index].style.backgroundColor = "#252526";
  //点击 button 显示对应的图片
  for(var i=0;i<allButtons.length;i++){
    allButtons[i].num = i;
    allButtons[i].onclick = function(){
       index = this.num;
       setButton();
       imgList.style.left = -400*index+"px";
    }
  }
  //开启自动切换图片 
  autoChange(); 
  //创建一个方法用来设置选中的button
  function setButton(){
    if(index >= imgArr.length-1){
      imgList.style.left = -400*index+"px";
      var width = -(imgArr.length-1)*400+"px";
      index=0;
      setTimeout(function(){   
          imgList.style.transition = "none" 
          imgList.style.left=0; 
      },1000);      
    }
    for(var i=0;i<allButtons.length;i++){
       allButtons[i].style.backgroundColor = "";
    }
    allButtons[index].style.backgroundColor = "#252526";
  }

   function delayMoveToFirst(){

   }

  function autoChange(){
    //开启定时器，定时切换图片
    timer = setInterval (function(){
      imgList.style.transition = "all 1s"
      index++;
      index %= imgArr.length;
      imgList.style.left = -400*index+"px";
      setButton();
    },2000);
  }

  
}
