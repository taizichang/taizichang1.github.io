window.onload = function()
{
var oCanv = document.getElementsByClassName('canv')[0];

for(var i=0;i<36;i++){

var oDiv = document.createElement('div');
      oDiv.className = 'son';
      oDiv.style.transform='rotateY('+i*10+'deg) rotateZ(45deg) translateX(30px)';
      oCanv.appendChild(oDiv);
}
}