'use strict'
var objButton=document.getElementById("button_Add");
objButton.addEventListener("click", showPop, true);
function showPop(){
    let body=document.getElementsByTagName('body')[0];
    let but1=document.createElement('button');
    but1.innerText="go to shopping bag";
    let but2=document.createElement('button');
    but2.innerText="keep shopping";
    let divs=document.createElement('div');
    divs.classList.add('form');
    let a= document.createElement('a');
    a.href="shopping-bag.html";
    a.appendChild(but1);
    but1.className='newBut';
    but2.className='newBut';
    but2.addEventListener('click', close, false);
    divs.appendChild(a);
    divs.appendChild(but2);
    divs.style.display="flex";
    divs.id="block";
    body.appendChild(divs);
}
function close(){
    let obj=document.getElementById('block');
    obj.style.display='none';
}