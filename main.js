var fullname = "John Doe";
var email = "johndoe@yahoo.com";
var telephone = "1231231231";
var address = "2321 earl Dr";
var city = "plano";
var zipcode = "12345";
var state = "TX";
var card = "1234190809384098239040209834";
var cardmonth = "05";
var cardyear = "2020";
var cvv = "000";

document.getElementById('order_billing_name').value = fullname;
document.getElementById('order_email').value = email;
document.getElementById('order_tel').value = telephone;
document.getElementById('bo').value = address;
document.getElementById('order_billing_zip').value = zipcode;
document.getElementById('order_billing_city').value = city;
document.getElementById('order_billing_state').value = state;
document.getElementById('nnaerb').value = card;
document.getElementById('credit_card_month').value = cardmonth;
document.getElementById('credit_card_year').value = cardyear;
document.getElementById('orcer').value = cvv;
document.getElementsByClassName('iCheck-helper')[1].click();
document.getElementsByName("commit")[0].click();
