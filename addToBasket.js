// Basic Supreme Bot - Chrome Extension
// @Author Nikesh Patel
// @Date Started: 3/21/2019

//Size Information: Index 0: Small, Index 1: Medium, Index 2: Large, Index 3: XLarge

//CheckOut Information
//Item information
var category = "bags"; //Category where item is located
var item_name = "Shoulder Bag"; //Desired item
var size = 1; //index for dropdownlist size
var color = "Black"; //Desired color of Item
var fullname = "John Doe";
var email = "John.Doe@yahoo.com";
var telephone = "1231231234";
var address = "4563 Earl Street";
var city = "Allen";
var zipcode = "75021";
var state = "TX";
var card = "1234190809384098239040209834";
var cardmonth = "05";
var cardyear = "2020";
var cvv = "000";

var submit = document.getElementById("myForm").submit;


submit.onclick = function() {
//  alert("The form was submitted");
   fullname = document.getElementById("fullname").value;
   telephone = document.getElementById("telephone").value;
   address = document.getElementById("address").value;
   zipcode = document.getElementById("zipcode").value;
   city = document.getElementById("city").value;
   state = document.getElementById("state").value;
   card = document.getElementById("cardnumber").value;
   cardmonth = document.getElementById("cardmonth").value;
   cardyear = document.getElementById("cardyear").value;
   cvv = document.getElementById("cardcvv").value;
}



//Where to execute the URL
var url = window.location.href;
var i;


//Pick Category
function pickCategory() {
  chrome.storage.sync.get('category', function(data) {
    var redirect = "https://www.supremenewyork.com/shop/all/jackets";
    var replace = redirect.replace("jackets",category);
    chrome.runtime.sendMessage({redirect: replace});
  });
}

//Pick Specific item
function pickItem() {
  chrome.storage.sync.get('item_name', function(data) {
      var items = document.getElementsByClassName('name-link');
      for(i = 0; i < items.length; i++) {
        if((items[i].innerHTML).includes(item_name)) {
          chrome.runtime.sendMessage({redirect: items[i].href});
          break;
        }
      }
      //Color of the item
      var items = document.getElementsByClassName('inner-article');
      var articleFound = false;
      for(i = 0; i < items.length; i++){
      if(items[i].innerHTML.includes(item_name) && items[i].innerHTML.includes(color)) {
        articleFound = true;
        chrome.runtime.sendMessage({redirect: items[i].firstChild.href});
        break;
      }
    }
  });
}

//Autofill Information
function autoFill() {
  document.getElementById('order_billing_name').value = fullname; //Fullname
  document.getElementById('order_email').value = email; //email
  document.getElementById('order_tel').value = telephone; //Phone number
  document.getElementById('bo').value = address; //Address
  document.getElementById('order_billing_zip').value = zipcode; //Zipcode
  document.getElementById('order_billing_city').value = city; //City
  document.getElementById('order_billing_state').value = state; //state
  document.getElementById('nnaerb').value = card; //Card number
  document.getElementById('credit_card_month').value = cardmonth; //Card month
  document.getElementById('credit_card_year').value = cardyear; //Cardyear
  document.getElementById('orcer').value = cvv; //CVV
  document.getElementsByClassName('iCheck-helper')[1].click(); //Checkbox
}

//If the url is shop/all the execution will occur

if(url == "https://www.supremenewyork.com/shop/all"){
    pickCategory();
}

//When the url is not on /shop/all it will locate the item and complete the CheckOut
//Process
if(url != "https://www.supremenewyork.com/shop/all") {
  pickItem(); //Execute pickItem function
  setTimeout(function(){
    document.getElementById('s').selectedIndex = size; //Size of Desired Item
  }, 500);
  setTimeout(function(){
    document.getElementsByName("commit")[0].click(); //Add to Cart
  }, 500);
  setTimeout(function(){
      document.getElementsByClassName('button checkout')[0].click(); //Direct to checkout
  }, 600);
  autoFill(); //Execute autofill function
}
