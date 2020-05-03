'use strict'
var arr_product=window.catalog.slice();
var discount=window.bestOffer;

var object_Value=arr_product[arr_product.length-1];
var itemId="ForItem";
var value_New="NEW";
var value_View="View item";
var value_ViewBag="Edit item";
var key_Size="UK";
var key_Color="C";
var key_both="UKC";
var value_Color="Color: ";
var value_Size="Size: ";
var value_Quantity="Quantity: ";
var value_Remove="Remove item";
var value_LB="\u00A3";
var valueInputSize='radio-size';
var valueInputColor='radio-color';
var answer_Clear="Your shopping bag is empty. Use Catalog to add new items";
var answer_Buy="Thank you for your purchase";
var phraseBold="Last weekend <a>extra 50%</a> off on all reduced boots and shoulder bags";
var phraseCursive="This offer is valid in-store and online. Prices displayed reflect this additional discount. This offer ends at 11:59 GMT on March 1st 2019";
var idP="phrase";
var massSortName=["Fashion","Product type","Color","Brand","Size","Price range"];
var discountCommon=15;
var showTextMore="Show more";
var showTextLess="Show less";
var answerSort="No results were found for your request.";
var arr_bag=[];
class Product{
    constructor(obj) {
      this.obj = obj;
      this.count=1;
      this.condition=false;
    }
}
class ChooseProduct{
    constructor(obj, color, size) {
      this.obj = obj;
      this.color=color;
      this.size=size;
      this.index=arr_product.indexOf(obj);
    }
}

function totalPrice(p){
    return `${'Total price: \u00A3'}${p}`;
}
function totalCost(p){
    return `${'Total cost: \u00A3'}${p}`;
}
function bagResult(p, count){
    return `${'Bag '}${p}${' ('}${count}${')'}`;
}