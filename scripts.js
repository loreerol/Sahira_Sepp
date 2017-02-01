//displaying images on hover 
var defaultImg = document.getElementById('img-default');

var stillLifeImg = document.getElementById("img-still-life");

function removeHidden1(event){
    defaultImg.classList.add('hidden');
    stillLifeImg.classList.remove('hidden');
    console.log(event);
}
function replaceHidden1(event){
   stillLifeImg.classList.add('hidden');
    defaultImg.classList.remove('hidden');
}
document.getElementById("menu-still-life").addEventListener("mouseenter", removeHidden1);
document.getElementById("menu-still-life").addEventListener("mouseleave", replaceHidden1);


var portraitsImg = document.getElementById("img-portraits");

function removeHidden2(event){
    defaultImg.classList.add('hidden');
    portraitsImg.classList.remove('hidden');
    console.log(event);
}
function replaceHidden2(event){
   portraitsImg.classList.add('hidden');
    defaultImg.classList.remove('hidden');
}
document.getElementById("menu-portraits").addEventListener("mouseenter", removeHidden2);
document.getElementById("menu-portraits").addEventListener("mouseleave", replaceHidden2);

var weddingsImg = document.getElementById("img-weddings");

function removeHidden3(event){
    defaultImg.classList.add('hidden');
    weddingsImg.classList.remove('hidden');
    console.log(event);
}
function replaceHidden3(event){
   weddingsImg.classList.add('hidden');
    defaultImg.classList.remove('hidden');
}
document.getElementById("menu-weddings").addEventListener("mouseenter", removeHidden3);
document.getElementById("menu-weddings").addEventListener("mouseleave", replaceHidden3);

var performancesImg = document.getElementById("img-performances");

function removeHidden4(event){
    defaultImg.classList.add('hidden');
    performancesImg.classList.remove('hidden');
    console.log(event);
}
function replaceHidden4(event){
   performancesImg.classList.add('hidden');
    defaultImg.classList.remove('hidden');
}
document.getElementById("menu-performances").addEventListener("mouseenter", removeHidden4);
document.getElementById("menu-performances").addEventListener("mouseleave", replaceHidden4);