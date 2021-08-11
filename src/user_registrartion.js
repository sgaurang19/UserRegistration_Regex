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

//UC2 : Valid Last Name
var lastName = "Shirsat";
checkName(lastName);

// UC3 : Valid Email

function checkEmail(em){
    var regexEmail = /^([a-zA-Z0-9._]+)(@)([a-zA-Z0-9]+)(.)([a-zA-Z]+)([.]+?)([a-zA-Z]+?)$/;
    var result = regexEmail.test(em);
    if(result == 1){
        console.log("Valid Email");
    }else{
        console.log("Please Enter Valid Email");
    }
}
var email = "abc.xyz@bl.co.in";
checkEmail(email);

//UC4 : Valid Mobile 
function checkMobile(mob){
    var regexMob = /^[9][1][ ][6-9][0-9]{9}$/;
    var result = regexMob.test(mob);
    if(result == 1){
        console.log("Valid Mobile");
    }else{
        console.log("Please Enter Valid Mobile");
    }
}

var mob = "91 9919819801";
checkMobile(mob);