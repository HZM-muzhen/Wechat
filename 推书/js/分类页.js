  var ban = document.querySelector('.contain');
  var btn = document.getElementById('list').getElementsByTagName('li');
  var index = 0;
  var newnext = 0;
  var timer;
  /* 轮播图*/
   one();
  function one(){
  timer = setInterval(function(){
      index++;
      if(index >= 3)
      {
          index = 0;
      }
      change();
      if(ban.style.left === '-3038px')
      {
          newnext = 0;
      }
      else
      {
            newnext = parseInt(ban.style.left) - 1519;
      }
      ban.style.left = newnext + 'px';
  },2500) }
  /*按钮更改*/
    function change() {
        for(var i=0;i<btn.length;i++)
        {
            btn[i].style.backgroundColor = 'rgb(77,73,71)';
        }
        btn[index].style.backgroundColor = 'rgb(179, 176, 176)';
    }
    /*小按钮切换图片*/
  for(var i=0;i<btn.length;i++){
    ( function(i){
        btn[i].onclick = function(){
         ban.style.left = i * -1519 +'px';
         index = i;
         change();
     } 
    } 
    )
    (i)}
    /*鼠标移入移出停止轮播 */
     ban.onmouseover = function() {
         clearInterval(timer);
     }
     ban.onmouseout = function() {
          one();
     }
 