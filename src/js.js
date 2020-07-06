function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var time = hours+":"+mins+":"+secs
    var tims = document.getElementById("time");
     tims.innerHTML;
     tims.innerHTML = time;}

function passwordValid() {
    var n2 = document.getElementById('password1');
    var n3 = document.getElementById('password2');
if(n3.value == n2.value) {return true;}else{
var pass = document.getElementById("checkpassword");
var errorp = "✓ Пароли не совпадают";
     pass.innerHTML;
     pass.innerHTML = errorp;    
     n2.style.border = "1px solid red";
     n2.style.color = "red";
     n3.style.border = "1px solid red";
     n3.style.color = "red";
     }
    return false;}


function loading(page){
  var load = document.getElementById('load');
  var dev = document.getElementsByTagName("dev");
  var pa = document.getElementById(page);
    
    load.style.display = "block";
    dev[0].style.display = "none";
    dev[1].style.display = "none";
    dev[2].style.display = "none";
    dev[3].style.display = "none";
    dev[4].style.display = "none";
    pa.style.display = "block";
setTimeout(function() { 
load.style.display = "none";}, 1000);}

function textValid(txt){
var tex = document.getElementById(txt);    
if(tex.value.length > 3 && tex.value.length <1000){
return true;}
var pass = document.getElementById("checkmsg");
var errorp = "Проверьте количество символов";
     pass.innerHTML;
     pass.innerHTML = errorp;    
     tex.style.border = "1px solid red";
     tex.style.color = "red";
return false;}


function openModal(id){
var ids = document.getElementById(id);    
ids.style.display = "block"; }

function closeModal(id){
var ids = document.getElementById(id);   
ids.style.display = "none";    }





setInterval(printTime, 1000);