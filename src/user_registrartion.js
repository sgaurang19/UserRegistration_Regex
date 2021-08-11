// UC1 : Valid First name
function checkName(name1){
    var regexName = /^[A-Z ][a-z]{2,30}$/;
    var result = regexName.test(name1);
    if(result == 1){
        console.log("Valid Name");
    }else{
        console.log("Please Enter Valid name");
    }
}

var firstName = "Gaurang";
checkName(firstName);