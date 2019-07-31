window.onload = function(){
  var imgList = document.getElementById("slides");
  var imgArr = document.getElementsByTagName("img");
  var buttonWrapper = document.getElementById("buttonWrapper");
  var container = document.getElementsByClassName("container");
  var allButtons = document.getElementsByClassName("buttonNumber");
  var timer;
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
      console.log("哈哈哈哈5:"+index);
      imgList.style.left = -400*index+"px";
      console.log(imgList.style.left);
      var width = -(imgArr.length-1)*400+"px";
      if(imgList.style.left == width){
        console.log("hahahahahahahahahahahaah")
        //imgList.style.transition = "none"
        index=0;
        
        imgList.style.left=0; 
      }  
      //imgList.style.left=0; 
      //imgList.style.transition = "none"
      //imgList.style.transition = "all 1s";      
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
      console.log("哈哈哈哈"+index);
      imgList.style.left = -400*index+"px";
      setButton();
    },2000);
  }

  
}
