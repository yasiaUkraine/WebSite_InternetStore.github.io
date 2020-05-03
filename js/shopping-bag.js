'use strict'

try{
   window.addEventListener("load", showBag, true); 
}catch(e){
    
}

var elem=document.getElementById('b-bag');
try{
    elem.addEventListener("mouseover",getToItemFromBag , false);

}catch(e){}
var button=document.getElementsByClassName("b-content_button");
try{
    button[0].addEventListener("click",addItemToBag , false);
}catch(e){}
function addProduct(e){
    let elem=document.getElementById('sliderContainer1');
    let elem2=document.getElementById('sliderContainer2');

    let s1=elem.getAttribute('value');
    let s2=elem2.getAttribute('value');

    for(let i=0; i<arr_product.length; i++){
        if(arr_product[i].id==s1 | arr_product[i].id==s2){
            let k=new ChooseProduct(arr_product[i], arr_product[i].colors[0],arr_product[i].sizes[0]);
            addToBag(k);
        }
    }
}
function addToBag(elem){
    let obj=new Product(elem);
    let key=elem.obj.id;
    if(localStorage.getItem(key)){
        let elem=localStorage.getItem(key);
        var elems=JSON.parse(elem);
        if(objectEquals(elems.obj,obj.obj)){
            elems.count+=1;
            obj.count=elems.count;
        }else{
            obj.obj.obj.id+=obj.obj.color+obj.obj.size;
            key=obj.obj.obj.id;
        }
    }
    let value=JSON.stringify(obj);
    localStorage.setItem(key,value);
}

function objectEquals(obj1, obj2){
    
   return JSON.stringify(obj1)===JSON.stringify(obj2);
  
}
function takeFromBag(){
        for (let i = 0; i < localStorage.length; i++) {
                if(localStorage.key(i)!=itemId){
                    let key=localStorage.key(i);
                    let value=localStorage.getItem(key);
                    let obj=JSON.parse(value);
                    arr_bag.push(obj);
                }
        }
}
 

function deleteFromBag(elem){

    localStorage.removeItem(elem);
    arr_bag=[];
    takeFromBag();
    showBag();
}
function clearBag(){
        calculatePrice();
    localStorage.clear();
}
function buyProduct(){
    if(arr_bag.length==0){
        showMessage(answer_Clear);
    }else{
        showMessage(answer_Buy);
    }
      arr_bag=[];
    clearBag();
}
function clearProduct(){
    showMessage(answer_Clear);
    arr_bag=[];
    clearBag();
}
function showMessage(k){
      try{
        elem.innerHTML=" ";
    }catch(e){
        
    }
    let value=document.getElementById('b-bag');
    let answer=document.createElement('div');
    answer.classList.add('b-bag_answer');
    let a=document.createElement('a');
    a.href='catalog.html';
    let p=document.createElement('p');
    p.classList.add("b-bag_answerText");
    p.innerText=k;
    a.appendChild(p);
    answer.appendChild(a);
    try{
        value.appendChild(answer);
    }catch(e){
        
    }
    
}
function chechDiscount(){
    let k=0, n=0;
    for(let i=0; i<bestOffer.left.length;i++){
        for(let j=0; j<arr_bag.length; j++){
            if(arr_bag[j].obj.obj.id.includes(bestOffer.left[i])){
            k++;
        }
    }
    
}
for(let i=0; i<bestOffer.right.length;i++){
    for(let j=0; j<arr_bag.length; j++){
        if(arr_bag[j].obj.obj.id.includes(bestOffer.right[i])){
            n++;
        }
    }
}
    if(k>0 && n>0){
        return true;
    }else{
        return false;
    }
    
}
function showBag(){
    arr_bag=[];
    takeFromBag();
    calculatePrice();
     try{
        elem.innerHTML=" ";
         elem.addEventListener("click", chooseAction,false);
    }catch(e){
        
    }
    if(arr_bag.length==0){
        showMessage(answer_Clear);
    }
    for(let i=0; i<arr_bag.length;i++){
        let divs=document.createElement('div');
        divs.classList.add('b-bag_element');
        divs.id=arr_bag[i].obj.obj.id;
        
        let img=document.createElement('div');
        img.classList.add('b-bag_elementPicture');
        img.style.background=arr_bag[i].obj.obj.thumbnail+",rgba(0, 0, 0, 0.5)";
        img.style.backgroundPosition='centre';
        img.style.backgroundRepeat='no-repeat';
        img.style.backgroundSize='cover';
        let a=document.createElement('a');
        a.href='item.html';
        a.title="Link on product";
        if(arr_bag[i].obj.obj.hasNew==true){
            var newProduct=document.createElement('div');
            newProduct.classList.add('b-offer_fotoNew');
            newProduct.innerText=value_New;
            a.appendChild(newProduct);
        }
            var viewProduct=document.createElement('p');
            viewProduct.classList.add('b-offer_hidden');
            viewProduct.innerText=value_ViewBag;
            a.appendChild(viewProduct); 
        img.appendChild(a);
        
        let info=document.createElement('div');
        info.classList.add('b-bag_elementInfo');
        let div1=document.createElement('div');
        let div2=document.createElement('div');
        let div3=document.createElement('div');
        div1.classList.add('b-bag_elementInfo_title');
        div2.classList.add('b-bag_elementInfo_description');
        div3.classList.add('b-bag_elementInfo_remove');
        
        let pName=document.createElement('p');
        let pPrice=document.createElement('p');
        pName.classList.add('b-bag_elementInfo_titleName');
        pPrice.classList.add('b-bag_elementInfo_titlePrice');
        pName.innerText=arr_bag[i].obj.obj.title;
        
        if(arr_bag[i].obj.obj.discountedPrice==undefined){
             pPrice.innerText=value_LB+arr_bag[i].obj.obj.price.toFixed(2);
        }else{
            pPrice.innerText=value_LB+arr_bag[i].obj.obj.discountedPrice.toFixed(2);
        }
        div1.appendChild(pName);
        div1.appendChild(pPrice);
        
        let pColor=document.createElement('p');
        let pSize=document.createElement('p');
        let pCount=document.createElement('p');
        pColor.classList.add('b-bag_elementInfo_descriptionText');
        pSize.classList.add('b-bag_elementInfo_descriptionText');
        pCount.classList.add('b-bag_elementInfo_descriptionText');
        pColor.innerText=value_Color+arr_bag[i].obj.color;
        pSize.innerText=value_Size+arr_bag[i].obj.size;
        pCount.innerText=value_Quantity;
        let butMin=document.createElement('button');
        let butPlus=document.createElement('button');
        butMin.classList.add('b-bag_elementInfo_descriptionButton');
        butPlus.classList.add('b-bag_elementInfo_descriptionButton');
        butMin.innerText='-';
        butPlus.innerText='+';
        let label=document.createElement('label');
        label.innerText=arr_bag[i].count;
        pCount.appendChild(butMin);
        pCount.appendChild(label);
        pCount.appendChild(butPlus);
        div2.appendChild(pColor);
        div2.appendChild(pSize);
        div2.appendChild(pCount);
        
        let remove=document.createElement('p');
        remove.classList.add('b-bag_elementInfo_removeText');
        remove.innerText=value_Remove;
        div3.appendChild(remove);
        
        info.appendChild(div1);
        info.appendChild(div2);
        info.appendChild(div3);
        
        divs.appendChild(img);
        divs.appendChild(info);
         try{
             elem.appendChild(divs);
            }catch(e){
                
            }
    }

    
}
function chooseAction(e){
    if(e.target.innerText=="+"){
      let k=e.target.parentNode.parentNode.parentNode.parentNode.id;
        addCount(k);
    }
    if(e.target.innerText=="-"){
    let k=e.target.parentNode.parentNode.parentNode.parentNode.id;
        deleteCount(k);
    }
    if(e.target.innerText==value_Remove){
        deleteFromBag(e.target.parentNode.parentNode.parentNode.id);
    }
}
function addCount(k){
    let value=localStorage.getItem(k);
    let element=JSON.parse(value);
    element.count+=1;
    let new_value=JSON.stringify(element);
    localStorage.setItem(k,new_value);
    showBag();
}
function deleteCount(k){
    let value=localStorage.getItem(k);
    let element=JSON.parse(value);
    element.count-=1;
    if(element.count==0){
        showBag();
        deleteFromBag(k);
        
    }else{
        let new_value=JSON.stringify(element);
        localStorage.setItem(k,new_value);
        showBag();
    }
    
}
function calculatePrice(){
    let result=0;
    let count=0;
    let dis=document.getElementsByClassName("b-link_thirdDiscount");
    for(let i=0; i<arr_bag.length; i++){
        if(arr_bag[i].obj.obj.discountedPrice==undefined){
            result+=arr_bag[i].obj.obj.price*arr_bag[i].count;
            count+=arr_bag[i].count;
        }else{
            result+=arr_bag[i].obj.obj.discountedPrice*arr_bag[i].count;
            count+=arr_bag[i].count;
        }
        
    }
    try{
       if(chechDiscount()==true){
        result-=discount.discount;
        dis[0].style.visibility='visible';
    }else{
        dis[0].style.visibility='hidden';
        } 
    }catch(e){
        
        }
    
    let elem=document.getElementsByClassName("b-link_thirdPrice");
    let s=totalCost(result.toFixed(2));
    try{
        elem[0].innerText=s;
    }catch(e){}
    
    let s2;
    let elem2=document.getElementById("b-header_bag");
    if(result==0){
         s2=bagResult("", count);
    }else{
         s2=bagResult(result.toFixed(2), count);
    }
    
    elem2.innerText=s2;
}

function addItemToBag(e){
    let elem=document.getElementsByClassName("b-content_desriptionTitle");
    let size = document.getElementsByName('radio');
    let valueS, valueC;
    for(let j=0; j<size.length; j++){
        if(size[j].checked==true){
            valueS=size[j].value;
        }
    }
    let color = document.getElementsByName('radio2');
    for(let j=0; j<color.length; j++){
        if(color[j].checked==true){
            valueC=color[j].value;
        }
    }
    for(let i=0; i<arr_product.length; i++){
        
        if(arr_product[i].title==elem[0].innerText){
            let obj=new ChooseProduct(arr_product[i],valueC,valueS);
            addToBag(obj);
        }
    }
    calculatePrice();
}
function getToItemFromBag (e){
    if(e.target.tagName=='A'){
       let id= e.target.parentNode.parentNode.id;
        for(let i=0; i<arr_bag.length;i++){
            if(arr_bag[i].obj.obj.id==id){
            let key=itemId;
            let value=JSON.stringify(arr_bag[i].obj.obj);
            localStorage.setItem(key,value);
            }
        }
    }
}