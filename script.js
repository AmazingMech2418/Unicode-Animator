var colors = ["red","orange","yellow","green","blue","purple"];var p="p";
function style () {
document.getElementsByTagName(p)[document.getElementsByTagName(p).length-1].style.color = colors[Math.floor(Math.random()*colors.length)];
 document.getElementsByTagName(p)[document.getElementsByTagName(p).length-1].style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
document.getElementsByTagName(p)[document.getElementsByTagName(p).length-1].style.fontSize = Math.floor(Math.random()*200)+"px";
}

function getChars() {var i=1;while (String.fromCharCode(i)!==String.fromCharCode(333333333333333333333333333333)) {i++;} var arr = [];for(var a = 0; a<i; a++) {arr.push(String.fromCharCode(a+1));} return arr.join();}var chars = getChars();var eee; var i = 0; function go() {document.body.innerHTML += '<p></p>';  document.getElementsByTagName(p)[document.getElementsByTagName(p).length-1].innerHTML=chars[i]; document.getElementsByTagName(p)[document.getElementsByTagName(p).length-1].style.position = "absolute";document.getElementsByTagName(p)[document.getElementsByTagName(p).length-1].style.left = Math.floor((Math.random() * 1000) + 1)+"px";
 document.getElementsByTagName(p)[document.getElementsByTagName(p).length-1].style.top = Math.floor((Math.random() * 1000) + 1)+"px";style(); i++} setInterval(go,10);
