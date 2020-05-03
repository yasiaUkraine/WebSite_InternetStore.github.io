'use strict'


try{
    window.addEventListener("load", create_table, true);
}catch(e){}
var inputValue=document.getElementsByClassName("b-content_choose");
var bannerLeft=document.getElementById('b-ad_bannerLeft');
var tabletSort=document.getElementsByClassName("b-sort_tablet");
var spanSort=document.getElementById("b-sort_wrapperTablet");
var cross=document.getElementsByClassName('redCross');
try{
  bannerLeft.addEventListener("click", addSuit, false);  
}catch(e){}

try{
    inputValue[0].addEventListener("click", changeChecked, false);
    
}catch(e){}
var bodyProduct=document.getElementById('start-content');
var bodyOffer=document.getElementById('blockOffer');

try{
    var too=document.getElementById('id-menu');
var tool=document.getElementById('buttonBag1');
var tool2=document.getElementById('buttonBag2');
tool.addEventListener('click',addProduct, false);
tool2.addEventListener('click',addProduct, false);
bodyProduct.addEventListener('click',setItem, false);
bodyOffer.addEventListener('click',setItem, false);

  
} catch(e){
    
}
try{
     tabletSort[0].addEventListener('click',chooseFilter, false);
    spanSort.addEventListener('click',showTabletFilter, false);
    cross[0].addEventListener('mouseover',closeTabletFilter, false);
}catch(e){}


function showMenu(){
    if(document.documentElement.clientWidth<=500){
        too.style.height='auto';
        too.style.borderBottom='1px solid gray';
        too.style.marginTop='10px';
    }
    
}
function closeMenu(){
    too.style.height='auto';
    too.style.borderBottom='none';
        too.style.marginTop='10px';

}
var flag=false;
function showSearch(){
    if(document.documentElement.clientWidth<850){
        let tab=document.getElementsByClassName('b-menu_blockSearchTablet');
        tab[0].classList.toggle('b-menu_blockSearchTablet_M');
        let s=document.getElementById('searchTablet');
        s.classList.toggle('showS');
        s.classList.toggle('b-menu_search_M');
        
        flag=true;
    }
    else{
        let tab=document.getElementsByClassName('b-menu_blockSearchTablet');
        tab[0].classList.toggle('b-menu_blockSearchTablet_M');
        let s=document.getElementById('searchTablet');
        s.classList.toggle('showS');
        flag=false;
    }
 
    }
    

function create_table(){
    try{
        var elem=document.getElementById('start-content');
        elem.innerHTML=" ";
    }catch(e){
       
        }

     let k=0;
    
        for(let i=0; i<arr_product.length;i++){
            var divs=document.createElement('div');
            divs.classList.add('b-product_wrapper');
            divs.id=arr_product[i].id;
            var img=document.createElement('div');
            img.classList.add('b-product_foto');
             img.style.background=arr_product[i].thumbnail+",rgba(0, 0, 0, 0.5)";
            img.style.backgroundPosition='centre';
            img.style.backgroundRepeat='no-repeat';
            img.style.backgroundSize='cover';
            var name=document.createElement('p');
            name.classList.add('b-offer_name');
            name.innerText=arr_product[i].title;
            var price=document.createElement('p');
            price.classList.add('b-offer_priece');
          var a=document.createElement('a');
            a.href='item.html';
            a.title=arr_product[i].title;
             if(arr_product[i].discountedPrice==undefined){
             price.innerText=arr_product[i].price.toFixed(2);
            }else{
               price.innerText=value_LB+arr_product[i].discountedPrice.toFixed(2); 
            }
            if(arr_product[i].hasNew==true){
                var newProduct=document.createElement('div');
                newProduct.classList.add('b-offer_fotoNew');
                newProduct.innerText=value_New;
                a.appendChild(newProduct);
            }
            var viewProduct=document.createElement('p');
                viewProduct.classList.add('b-offer_hidden');
                viewProduct.innerText=value_View;
                a.appendChild(viewProduct);
            img.appendChild(a);
            divs.appendChild(img);
            divs.appendChild(name);
            divs.appendChild(price);
            try{
                elem.appendChild(divs);
            }catch(e){
                
            }
        }
}

var slideIndex = 1;
var slideIndex1 = 0;
var slideIndex2 = 0;
showSlides(slideIndex);
sliderMain1(slideIndex1);
sliderMain2(slideIndex2);

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("b-content_slider_mySlides");
  var elements = document.getElementsByClassName("b-content_slider_elements");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < elements.length; i++) {
    elements[i].className = elements[i].className.replace(" active", "");
  }
    try{
         slides[slideIndex-1].style.display = "block";
  elements[slideIndex-1].className += " active";
    }catch(e){
        
    }
 
}
        
function plusSlidesLeft(n) {
  sliderMain1(slideIndex1 += n);
}
function plusSlidesRight(n) {
  sliderMain2(slideIndex2 += n);
}
function sliderMain1(n){
    let arr=getLeftOffer();
    createOfferItem(arr, 'sliderContainer1');
    var i;
  var slides = document.querySelectorAll("#sliderContainer1 > .b-offer_wrapper");
    var elem=document.getElementById('sliderContainer1')
    
  if (n > slides.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
    try{
         slides[slideIndex1-1].style.display = "block";
        elem.setAttribute("value", slides[slideIndex1-1].id);
    }catch(e){
        
    }
        calculateDiscount();
}
function sliderMain2(n){
    let arr=getRightOffer();
    createOfferItem(arr, 'sliderContainer2');
    
    var i;
  var slides = document.querySelectorAll("#sliderContainer2 > .b-offer_wrapper");
 var elem=document.getElementById('sliderContainer2')

  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
    try{
         slides[slideIndex2-1].style.display = "block";
        elem.setAttribute("value", slides[slideIndex2-1].id);
    }catch(e){
        
    }
        calculateDiscount();
}
function createOfferItem(arr, s){
    try{
        var elem=document.getElementById(s);
        elem.innerHTML=" ";
    }catch(e){
        
        }

     let k=0;
        for(let i=0; i<arr.length;i++){
            var divs=document.createElement('div');
            divs.classList.add('b-offer_wrapper');
            divs.id=arr[i].id;
            var img=document.createElement('div');
            img.classList.add('b-offer_foto');
             img.style.background=arr[i].thumbnail+",rgba(0, 0, 0, 0.5)";
            img.style.backgroundPosition='centre';
            img.style.backgroundRepeat='no-repeat';
            img.style.backgroundSize='cover';
            var name=document.createElement('p');
            name.classList.add('b-offer_name');
            name.innerText=arr[i].title;
            var price=document.createElement('p');
            price.classList.add('b-offer_priece');
          var a=document.createElement('a');
            a.href='item.html';
            a.title=arr[i].title;
            
             if(arr[i].discountedPrice==undefined){
             price.innerText=arr[i].price.toFixed(2);
            }else{
                price.innerText=value_LB+arr[i].discountedPrice.toFixed(2);
            }
            if(arr[i].hasNew==true){
                var newProduct=document.createElement('div');
                newProduct.classList.add('b-offer_fotoNew');
                newProduct.innerText=value_New;
                a.appendChild(newProduct);
            }
            var viewProduct=document.createElement('p');
                viewProduct.classList.add('b-offer_hidden');
                viewProduct.innerText=value_View;
                a.appendChild(viewProduct);
            img.appendChild(a);
            divs.appendChild(img);
            divs.appendChild(name);
            divs.appendChild(price);
            try{
                elem.appendChild(divs);
            }catch(e){
                
            }
        }
}
function getLeftOffer(){
    let arr=[];
    for(let i=0; i<bestOffer.left.length;i++){
        for(let j=0; j<arr_product.length;j++){
            if(arr_product[j].id==bestOffer.left[i]){
                arr.push(arr_product[j]);
            }
        }
    }
    return arr;
}
function getRightOffer(){
    let arr=[];
    for(let i=0; i<bestOffer.right.length;i++){
        for(let j=0; j<arr_product.length;j++){
            if(arr_product[j].id==bestOffer.right[i]){
                arr.push(arr_product[j]);
            }
        }
    }
    return arr;
}

function calculateDiscount(){
    var result=0;
    let old=document.getElementsByClassName('b-offer_oldPrice');
    let news=document.getElementsByClassName('b-offer_newPrice');
    let firstPrice,secondPrice;
    try{
        firstPrice=document.getElementById('sliderContainer1').getAttribute('value');
        secondPrice=document.getElementById('sliderContainer2').getAttribute('value');
    }catch(e){}

    for(let i=0; i<arr_product.length;i++){
        if(arr_product[i].id==firstPrice||arr_product[i].id==secondPrice){
            if(arr_product[i].discountedPrice!=undefined){
                result+=arr_product[i].discountedPrice;
            }else{
                result+=arr_product[i].price;
            }
            
        }
    }
    try{
        old[0].innerText=value_LB+result.toFixed(2);
        news[0].innerText=value_LB+(result-discountCommon).toFixed(2); 
    }catch(e){
        
        }
    
}

        
function setItem(e){
    var id;
    if(e.target.parentNode.tagName=="DIV"){
        id=e.target.parentNode.parentNode.id;
    }else{
        if(e.target.parentNode.tagName=="A"){
            id=e.target.parentNode.parentNode.parentNode.id;
        }
    }
    for(let i=0; i<arr_product.length;i++){
        if(id==arr_product[i].id){
            var key=itemId;
            let value=JSON.stringify(arr_product[i]);
            localStorage.setItem(key,value);
        }
    }
}
function getItem(){
    var value=localStorage.getItem(itemId);
    var obj=JSON.parse(value);
    if(obj!=null){
        object_Value=obj;
    }
    showItem(object_Value);
}
function showItem(value){
    
    if(value instanceof Product){
        console.log("Hello");
    }
    let slides = document.getElementsByClassName("b-content_slider_picture");
    let elements = document.getElementsByClassName("b-content_slider_elements");
    let title = document.getElementsByClassName("b-content_desriptionTitle");
    let description = document.getElementsByClassName("b-content_desriptionText_cursive");
    let price = document.getElementsByClassName("b-content_desriptionText_price");
    let size = document.getElementById('SizeId');
    let color = document.getElementById('ColorId');
    for(let i=0; i<slides.length;i++){
        slides[i].src=value.preview[i];
    }
    for(let i=0; i<elements.length;i++){
        elements[i].src=value.preview[i];
    }
    title[0].innerText=value.title;
    description[0].innerText=value.description;
   
    if(value.discountedPrice==undefined){
            price[0].innerText=value_LB+value.price;
    }else{
         price[0].innerText=value_LB+value.discountedPrice;
    }
    for(let j=0; j<value.sizes.length; j++){
        let div=document.createElement('div');
        div.classList.add('b-content_choose_Input');
        let input=document.createElement('input');
        input.type="radio";
        input.id=valueInputSize+(j+1);
        input.value=value.sizes[j];
        input.name="radio";
        if(j==0){
            input.checked = true;
        }
        let label=document.createElement('label');
        label.for=valueInputSize+(j+1);
        label.innerText=value.sizes[j];
        div.appendChild(input);
        div.appendChild(label);
        try{
            size.appendChild(div);
        }catch(e){}
    }
    for(let j=0; j<value.colors.length; j++){
        let div=document.createElement('div');
        div.classList.add('b-content_choose_Input');
        let input=document.createElement('input');
        input.type="radio";
        input.name="radio2";
        if(j==0){
            input.checked = true;
        }
        input.id=valueInputColor+(j+1);
        input.value=value.colors[j];
        let label=document.createElement('label');
        label.for=valueInputColor+(j+1);
        label.innerText=value.colors[j];
        div.appendChild(input);
        div.appendChild(label);
        try{
           color.appendChild(div);
        }catch(e){}
    }
}
  function changeChecked(e){
      let check=document.getElementById(e.target.previousSibling.id);
      check.checked=true;
      
  } 

function create_grid(arr, len){
    try{
        var elem=document.getElementById('b-magazine_item');
       elem.innerHTML='';
        elem.addEventListener('click',setItem, false);
    }catch(e){
       
        }

     let k=2;
    
        for(let i=0; i<len;i++){
            if(i==4||i==3||i==2){
            var ad=document.createElement('div');
            ad.classList.add('b-magazine_ad');
                elem.appendChild(ad);
                ad.id=idP+i;
                let p1=document.createElement('p');
                p1.classList.add('b-magazine_adBold');
                p1.innerHTML=phraseBold;
                let p2=document.createElement('p');
                p2.classList.add('b-magazine_adCursive');
                p2.innerText=phraseCursive;
                ad.appendChild(p1);
                ad.appendChild(p2);
            }
            
            var divs=document.createElement('div');
            divs.classList.add('b-magazine_wrapper');
            divs.id=arr[i].id;
            var img=document.createElement('div');
            img.classList.add('b-product_foto');
            img.style.background=arr[i].thumbnail+",rgba(0, 0, 0, 0.5)";
            img.style.backgroundPosition='centre';
            img.style.backgroundRepeat='no-repeat';
            img.style.backgroundSize='cover';
            var name=document.createElement('p');
            name.classList.add('b-offer_name');
            name.innerText=arr[i].title;
            var price=document.createElement('p');
            price.classList.add('b-offer_priece');
          var a=document.createElement('a');
            a.href='item.html';
            a.title=arr[i].title;
            if(arr[i].discountedPrice!=undefined && arr[i].price!=undefined && arr[i].discountedPrice!=arr[i].price){
                let old=document.createElement('a');
                old.innerText=value_LB+arr[i].price.toFixed(2)+"\u00A0\u00A0";
                old.classList.add('b-catalog_oldPrice');
                let news=document.createElement('a');
                news.innerText=value_LB+arr[i].discountedPrice.toFixed(2);
                price.appendChild(old);
                price.appendChild(news);
            }else{
                if(arr[i].discountedPrice==undefined){
                    price.innerText=value_LB+arr[i].price.toFixed(2);
                }else{
                    price.innerText=value_LB+arr[i].discountedPrice.toFixed(2);
                }
            }
             
            
            if(arr[i].hasNew==true){
                var newProduct=document.createElement('div');
                newProduct.classList.add('b-offer_fotoNew');
                newProduct.innerText=value_New;
                a.appendChild(newProduct);
            }
            var viewProduct=document.createElement('p');
                viewProduct.classList.add('b-offer_hidden');
                viewProduct.innerText=value_View;
                a.appendChild(viewProduct);
            img.appendChild(a);
            divs.appendChild(img);
            divs.appendChild(name);
            divs.appendChild(price);
            try{
                elem.appendChild(divs);
            }catch(e){
                console.log();
            }
        }
}

function addSuit(e){
    let value=JSON.stringify(arr_product[arr_product.length-1]);
    localStorage.setItem(itemId,value);
}
        
function showSort(){
    var elemDiv=document.getElementsByClassName("b-sort_wrapper");
    for(let i=0; i<elemDiv.length; i++){
        var elemSelect = elemDiv[i].getElementsByTagName("select")[0];
        var title=document.createElement("DIV");
        title.setAttribute("class", "b-sort_wrapperTitle");
        title.innerText = massSortName[i];
        title.id=massSortName[i];
        if("Price range"==massSortName[i]){
            title.style.borderRight='none';
        }
        elemDiv[i].appendChild(title);
        var lidtDiv=document.createElement("DIV");
        lidtDiv.setAttribute("class", "b-sort_selectOption b-sort_selectHide");
        for (let j = 0; j < elemSelect.length; j++) {
            var option = document.createElement("DIV");
            option.innerText =elemSelect.options[j].innerText;
            option.addEventListener("click", function(e) {
     
        var sel = this.parentNode.parentNode.getElementsByTagName("select")[0];
                if(this.parentNode.parentNode.childNodes[3].id=='Fashion'){
                    filterFashion(this.innerHTML);
                }
                if(this.parentNode.parentNode.childNodes[3].id=='Price range'){
                    filterPrice(this.innerHTML);
                }
        var wrapper = this.parentNode.previousSibling;
        for (let i = 0; i < sel.length; i++) {
          if (sel.options[i].innerHTML == this.innerHTML && this.innerHTML!='Not selected') {
              sel.selectedIndex = i;
              wrapper.classList.add('b-sort_wrapperNew');
              wrapper.innerHTML='';
              var chosse=document.createElement('p');
              chosse.classList.add('b-sort_wrapperTitleSmall');
              chosse.innerText=wrapper.id;
              var chosse2=document.createElement('p');
              chosse2.classList.add('b-sort_wrapperTitleChoose');
              chosse2.innerText=this.innerText;
              wrapper.appendChild(chosse);
              wrapper.appendChild(chosse2);
              var changes = this.parentNode.getElementsByClassName("b-sort_titlechoose");
            for (let k = 0; k < changes.length; k++) {
              changes[k].removeAttribute("class");
            }
            this.setAttribute("class", "b-sort_titlechoose");
            break;
          }else{

              wrapper.innerHTML='';
               wrapper.classList.remove('b-sort_wrapperNew');
              var changes = this.parentNode.getElementsByClassName("b-sort_titlechoose");
            for (let k = 0; k < changes.length; k++) {
              changes[k].removeAttribute("class");
            }
              var chosse=document.createElement('p');
              chosse.innerText=wrapper.id;
               wrapper.appendChild(chosse);
          }
        }
        wrapper.click();
    });
            lidtDiv.appendChild(option);
        }
        elemDiv[i].appendChild(lidtDiv);
        title.addEventListener("mouseover", function(e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("b-sort_selectHide");
  });
    }
}
 document.addEventListener("click", closeAllSelect);
function closeAllSelect(elmnt) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("b-sort_selectOption");
  y = document.getElementsByClassName("b-sort_wrapperTitle");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } 
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("b-sort_selectHide");
    }
  }
}
 var check=false;       
function showMore(){
    var elem=document.getElementById('b-magazine');
    var but=document.getElementsByClassName('b-magazine_button');
    
    if(check==false){
         but[0].innerText=showTextLess;
        check=true;
        create_grid(arr_product, arr_product.length);
       
    }else{
        but[0].innerText=showTextMore ;
        check=false;
        create_grid(arr_product, arr_product.length-visionItem);
    }
    
}
        
function showSortTablet(){
    
    var elemWrapper=document.getElementById('b-sort_wrapperTablet');
   
    for(let i=0; i<massSortName.length;i++){
        var a=document.createElement('a');
        a.id=massSortName[i];
        if(i!=massSortName.length-1){
            a.innerText=massSortName[i]+", ";
        }else{
            a.innerText=massSortName[i];
        }
        try{
           elemWrapper.appendChild(a);  
        }catch(e){}
       

    }
    var tablet=document.getElementsByClassName('b-sort_tablet');
    var arrUL=document.querySelectorAll('.b-sort_tablet ul');
    for(let j=0; j<arrUL.length;j++){
        arrUL[j].id="ul"+j;
        var arrLi=document.querySelectorAll('#'+arrUL[j].id+' > li');
        for(let i=0; i<arrLi.length;i++){
            if(i==0){
                arrLi[i].classList.add('b-sort_black');
            }
            arrLi[i].classList.add('b-sort_gray');
        }
        
    }

}
function chooseFilter(e){
    var choose;
    try{
      var massLi=document.querySelector('#'+e.target.parentNode.id).children;  
    }catch(e){}
    
    var mass=document.querySelectorAll('#b-sort_wrapperTablet > a');
    let k=e.target.parentNode.id[e.target.parentNode.id.length-1];
    if(e.target.tagName=='LI' && e.target.innerText!='Not selected'){
    choose=e.target.innerText;
    var elem=massSortName[k];
    if(massSortName[k]==mass[k].id){ 
        mass[k].innerText=choose+', ';
        for(let i=0;i<massLi.length;i++){
            if(massLi[i].classList.contains('b-sort_red')){
                massLi[i].classList.remove('b-sort_red');
            }
        }
        massLi[1].classList.remove('b-sort_black');
        mass[k].classList.add('b-sort_red');
        e.target.classList.add('b-sort_red');
        }
    }else{
        if(e.target.tagName=='LI'){
            mass[k].innerText=mass[k].id+', ';
            mass[k].classList.remove('b-sort_red');
            massLi[1].classList.add('b-sort_black');
            for(let i=0; i<massLi.length;i++){
                if(massLi[i].classList.contains('b-sort_red')){
                massLi[i].classList.remove('b-sort_red');
                }
            }
        }
    }
}
        function showTabletFilter(){
            let tabletSort=document.getElementsByClassName("b-sort_tablet");
            tabletSort[0].style.display='flex';
            let cross=document.getElementsByClassName('redCross');
            cross[0].classList.remove('hide');
            cross[0].classList.add('show');
        }
        function closeTabletFilter(){
            let tabletSort=document.getElementsByClassName("b-sort_tablet");
            tabletSort[0].style.display='none';     
            let cross=document.getElementsByClassName('redCross');
            
            cross[0].classList.remove('show');
            cross[0].classList.add('hide');

        }
    var flagW=false, flagM=false;
   function filterWoman(){
       
       var arr_filter=[]
       for(let i=0; i<arr_product.length;i++){
           if(arr_product[i].category== 'women'){
               arr_filter.push(arr_product[i]);
           }
       }
       if(flagW==false){
           flagW=true; 
           create_grid(arr_filter,arr_filter.length);
            var elem=document.getElementById('women');
            elem.classList.add('colorWoman');
            var elem2=document.getElementById('man');
            elem2.classList.remove('colorWoman');
       }else{
           flagW=false; 
           create_grid(arr_product, arr_product.length-visionItem);
           var elem=document.getElementById('women');
            elem.classList.remove('colorWoman');
       }
      
   }
    function filterMan(){
       var arr_filter=[]
       for(let i=0; i<arr_product.length;i++){
           if(arr_product[i].category== 'men'){
               arr_filter.push(arr_product[i]);
           }
       }
        if(flagM==false){
            flagM=true;
            create_grid(arr_filter, arr_filter.length);
            var elem=document.getElementById('man');
            elem.classList.add('colorWoman');
            var elem2=document.getElementById('women');
            elem2.classList.remove('colorWoman');
        }else{
            flagM=false;
            create_grid(arr_product, arr_product.length-visionItem);
            var elem=document.getElementById('man');
            elem.classList.remove('colorWoman');
        }
       
   }
    var flagDate=false;
    function filterDate(){
        if(flagDate==false){
            var arr_filter=[];
            arr_filter=arr_product.slice().sort(function(x,y){
                if(x.dateAdded<y.dateAdded){
                    return 1;
                }
                if(x.dateAdded>y.dateAdded){
                    return -1;
                }
                if(x.dateAdded==y.dateAdded){
                    return 0;
                }
            });
           
            create_grid(arr_filter, arr_filter.length);
            flagDate=true;
        }else{
            create_grid(arr_product, arr_product.length-visionItem);
            flagDate=false;
        }
         
    }
    function filterFashion(s){
        var arr_filter=[]
       for(let i=0; i<arr_product.length;i++){
           if(arr_product[i].fashion== s){
               arr_filter.push(arr_product[i]);
           }
       }
        if(s!='Not selected'){
            if(arr_filter.length==0){
                showMessSort();
            }else{
                create_grid(arr_filter,arr_filter.length);
            }
            
        }else{
            create_grid(arr_product, arr_product.length-visionItem);
        }
        
    }
function filterPrice(s){
    let arr_filter=[];
    let k=-1;
    for( let i=0; i<arr_price.length;i++){
        if(arr_price[i]==s){
           k=i; 
        }
    }
    if(k==0){
        for(let i=0; i<arr_product.length;i++){
            if(arr_product[i].discountedPrice<90){
                arr_filter.push(arr_product[i]);
            }
        }
    }
    if(k==1){
        for(let i=0; i<arr_product.length;i++){
            if(arr_product[i].discountedPrice>100 && arr_product[i].discountedPrice<299){
                arr_filter.push(arr_product[i]);
            }
        }
    }
    if(k==2){
        for(let i=0; i<arr_product.length;i++){
            if(arr_product[i].discountedPrice>300){
                arr_filter.push(arr_product[i]);
            }
        }
    }
    if(s!='Not selected'){
            if(arr_filter.length==0){
                showMessSort();
            }else{
                create_grid(arr_filter, arr_filter.length);
            }
            
        }else{
            create_grid(arr_product, arr_product.length-visionItem);
        }
}
function showMessSort(){
    let value=document.getElementById('b-magazine_item');
    value.innerHTML='';
    let answer=document.createElement('div');
    answer.classList.add('b-bag_answer');
    let a=document.createElement('a');
    a.href='catalog.html';
    let p=document.createElement('p');
    p.classList.add("b-bag_answerText");
    p.innerText=answerSort;
    a.appendChild(p);
    answer.appendChild(a);
    try{
        value.appendChild(answer);
    }catch(e){
        
    }
}