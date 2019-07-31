window.onload = function(){
  var imgList = document.getElementById("slides");
  var imgArr = document.getElementsByTagName("img");
  var buttonWrapper = document.getElementById("buttonWrapper");
  var container = document.getElementsByClassName("container");
  console.log(container);
  var allButtons = document.getElementsByClassName("buttonNumber");
  var pre = document.getElementById("previous");
  var next = document.getElementById("next");
  var index = 0;
  //初始图片的长度
  imgList.style.width = 400*imgArr.length+"px";
  //图片开始位置
  imgList.style.left = "-400px";
  //数字按钮的位置
  buttonWrapper.style.left = (container.offsetWidth-buttonWrapper.offsetWidth)/2;
  //获取数字按钮，设置颜色
  allButtons[index].style.backgroundColor = "#252526";
  //点击 button 显示对应的图片
  for(var i=0;i<allButtons.length;i++){
    allButtons[i].num = i;
    allButtons[i].onclick = function(){
       index = this.num+1;
       setButton();
 
       imgList.style.left = -400*index+"px";
    }
  }
  //开启自动切换图片 
  autoChange(); 
  //调用下一张，上一张功能
  upAndDown(); 
  function upAndDown(){
    pre.onclick = function(){
      index--;
      imgList.style.left = -400*index+"px";
      if(index === 0){
        
        index = imgArr.length-2
        setTimeout(function(){   
          imgList.style.transition = "none";
          imgList.style.left="-1600px"; 
      },1000); 
      imgList.style.transition = "all 1s";
      }
      setButton();
    }
    next.onclick = function(){
      index++;
      imgList.style.left = -400*index+"px";
      if(index == imgArr.length-1){
        
        index=1;
        setTimeout(function(){   
            imgList.style.transition = "none";
            imgList.style.left="-400px"; 
        },1000);   
        imgList.style.transition = "all 1s";
      }
      setButton();
    }
  }
  //创建一个方法用来设置选中的button
  function setButton(){
    if(index >= imgArr.length-1){
      imgList.style.left = -400*index+"px";
      index=1;
      setTimeout(function(){   
          imgList.style.transition = "none";
          imgList.style.left="-400px"; 
      },1000);      
    }
    for(var i=0;i<allButtons.length;i++){
       allButtons[i].style.backgroundColor = "";
    }
    allButtons[index-1].style.backgroundColor = "#252526";
  }
  function autoChange(){
    //开启定时器，定时切换图片
    var timer = setInterval (function(){
      imgList.style.transition = "all 1s"
      index++;
      index %= (imgArr.length);
      console.log("hahahaha"+index);
      imgList.style.left = -400*index+"px";
      setButton();
    },2000);
    /** 
    container[0].onmouseenter = function(){
      console.log(1);
      clearInterval(timer);
    }
    container[0].onmouseleave = function(){
      timer = setInterval (function(){
        imgList.style.transition = "all 1s";
        index++;
        index %= (imgArr.length);
        console.log("hahahaha"+index);
        imgList.style.left = -400*index+"px";
        setButton();
      },2000);
    }*/
  }
}
