//★ ハンター名を保存してページ遷移する関数
function btnClick(){
let indata = document.getElementById("hunterName");
let hunterName=indata.value;
localStorage.setItem('hunterName', hunterName);
window.location.href = '62-1-2.html';}
