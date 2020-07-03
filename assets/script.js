
function generate(){

    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "1234567890";
    var punctuation = "!@#$%^&*()"

    var lowercaseInput= document.getElementById("lowercase");
   
    var uppercaseInput= document.getElementById("uppercase");
    var punctuationInput= doucment.getElementById("punctuation");
    var numbersInput= document.getElementById("numbers");
    var passlength= doucment.getElementById("text").value;

    var userpassword= "";
    var passwordCharSet= "";

    if (lowercaseInput.checked) {
        passwordCharSet += lowercase;
    }
    if (uppercaseInput.checked) {
        passwordCharSet += uppercase;
    }
    if (punctuationInput.checked) {
        passwordCharSet += punctuation;
    }
    if (numbersInput.checked) {
        passwordCharSet += numbers;
    }
    
    for (var i = 0; i < passlength; i++) {
    userpassword += passwordCharSet.charAt(Math.floor(Math.random() * passwordCharSet.length -1));    
    }

    document.getElementById("display").value= userpassword;
    document.getElementById("length").innerHTML = ("Length(8-128): ");
    document.getElementById("text").oninput = function(){
        if (document.getElementById("text").value >7){
            doucment.getElementById("length").innerHTML = "length:" +document.getElementById("text").value;
}
else{
    document.getElementById("length").innerHTML="Length: 8";
}
    }
}
function copyPassword(){
    doucment.getElementById("display").select();
    document.execCommand("copy");
}