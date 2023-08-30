var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");
var error3 = document.getElementById("error3");
var error4 = document.getElementById("error4");
var error5 = document.getElementById("error5");
var error6 = document.getElementById("error6");

function validate(){

    var flag1 = false;
    var flag2 = false;
    var flag3 = false;
    var flag4 = false;
    var flag5 = false;
    var flag6 = false;

    var name = document.forms['register']['name'].value;
    if(name.length < 5){
        document.getElementById("error1").innerHTML = "Name must be longer than 5 characters!";
        document.getElementById("error1").style.display = 'block';
    } else {
        document.getElementById("error1").style.display = 'none';
        flag1 = true;
    }
    
    var number = document.forms['register']['phone_number'].value;
    flag2 = checkNumber(number);

    var address = document.forms['register']['address'].value;
    if(address.length < 8){
        document.getElementById("error3").innerHTML = "Address must be longer than 8 characters!";
        document.getElementById("error3").style.display = 'block';
    } else {
        document.getElementById("error3").style.display = 'none';
        flag3 = true;
    }

    var email = document.forms['register']['email'].value;
    flag4 = checkEmail(email);

    var prdct = document.forms['register']['prdct_type'].value;
    if(prdct == "Select Product"){
        document.getElementById("error5").innerHTML = "Please select a product";
        document.getElementById("error5").style.display = 'block';
    } else{
        document.getElementById("error5").style.display = 'none';
        flag5 = true;
    } 

    var qty = document.forms['register']['qty'].value;

    if(qty < 1){
        document.getElementById("error6").innerHTML = "Please input a valid quantity";
        document.getElementById("error6").style.display = 'block';
    } else if (qty > 50){
        document.getElementById("error6").innerHTML = "Order quantity cannot be more than 50";
        document.getElementById("error6").style.display = 'block';
    } else {
        document.getElementById("error6").style.display = 'none';
        flag6 = true;
    }

    if(flag1 && flag2 && flag3 && flag4 && flag5 && flag6){
        document.forms['register'].reset();
        alert("Order Successful!");
    }

}

function checkEmail(email){

    var len = email.length;
    if(email.length < 8){
        document.getElementById("error4").innerHTML = "Email must be longer than 8 characters!";
        document.getElementById("error4").style.display = 'block';
        return false;
    } else if (!(checkEmailRequiredSymbols(email))){
        document.getElementById("error4").innerHTML = "Please input email in the correct format";
        document.getElementById("error4").style.display = 'block';
        return false;
    } else {
        document.getElementById("error4").style.display = 'none';
        return true;
    }

}

function checkEmailRequiredSymbols(email){

    var len = email.length;

    if(!(email.includes("@")) || !(email.includes("."))){
        return false;
    }
    if(email.indexOf("@") < 1 || email.indexOf("@") >= len-1){
        return false;
    }
    if(email.indexOf(".") < 1 || email.indexOf(".") >= len-1){
        return false;
    }
    if(email.indexOf(".") <= email.indexOf("@")+2){
        return false;
    }

    for(let i = 0; i<email.indexOf("@"); i++){
        if(!isAN(email[i])){
            return false;
        }
    }

    for(let i = email.indexOf("@")+1; i<email.indexOf("."); i++){
        if(!isAN(email[i])){
            return false;
        }
    }

    for(let i = email.indexOf(".")+1; i<len; i++){
        if(!isAN(email[i])){
            return false;
        }
    }

    return true;
}

function isAN(char){
    var alpha = false;
    var numer = false;

    if(isNaN(char)){
        numer = true;
    }

    var ascii_val = char.charCodeAt();
    if((ascii_val >= 65 && ascii_val <= 90) || (ascii_val >= 97 && ascii_val <= 122)){
        alpha = true;
    }

    return alpha && numer;
}

function checkNumber(number){

    if(number.length < 4){
        document.getElementById("error2").innerHTML = "Phone number must be longer than 4 characters!";
        document.getElementById("error2").style.display = 'block';
        return false;
    }

    var len = number.length;
    var flag = true;
    for (let i = 0; i<len; i++){
        if(isNaN(number[i])){
            flag = false;
            break;
        }
    }

    if(!flag){
        document.getElementById("error2").innerHTML = "Phone number must be numerical";
        document.getElementById("error2").style.display = 'block';
        return false;
    } else {
        document.getElementById("error2").style.display = 'none';
        return true;
    }
}