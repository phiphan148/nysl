// document.addEventListener("DOMContentLoaded", function() {
//     let currentDate = new Date();
//     let currentMonth = 1+ currentDate.getMonth();
//     if (currentMonth>1 && currentMonth<=4){
//         document.getElementById("season").value = 'Spring 2018';
//     } else if (currentMonth>4 && currentMonth <=8){
//         document.getElementById("season").value = 'Summer 2018';
//     } else if(currentMonth>8 && currentMonth <=10){
//         document.getElementById("season").value = 'Autumn 2018';
//     } else {
//         document.getElementById("season").value = 'Winter 2018';
//     }
// });
document.addEventListener("DOMContentLoaded", function() {
    let x = window.location.href.split('/').slice(-1).toString();
    console.log(x);
    let y = x.split('.')[0].charAt(0).toLocaleUpperCase()+x.split('.')[0].slice(1);
    console.log(y);
    let homemenu = document.getElementById('homemenu').textContent;
    console.log(homemenu);
    let aboutment = document.getElementById('aboutment').textContent;
    console.log(aboutment);
    let rulesmenu = document.getElementById('rulesmenu').textContent;
    console.log(rulesmenu);
    let schedulemenu = document.getElementById('schedulemenu').textContent;
    console.log(schedulemenu);
    let regismenu =document.getElementById('regismenu').textContent;
    console.log(regismenu);
    let contactmenu =document.getElementById('contactmenu').textContent;
    console.log(contactmenu);
    if(y=='Index'){
        document.getElementById('homesub').classList.add("title-color");
        document.getElementById('homemenu').classList.add("title-color");
    } else if (y==aboutment){
        document.getElementById('aboutment').classList.add("title-color");
        document.getElementById('aboutsub').classList.add("title-color");
    } else if (y==rulesmenu){
        document.getElementById('rulesmenu').classList.add("title-color");
        document.getElementById('rulessub').classList.add("title-color");
    } else if (y==schedulemenu){
        document.getElementById('schedulemenu').classList.add("title-color");
        document.getElementById('schedulesub').classList.add("title-color");
    } else if (y==regismenu){
        document.getElementById('regismenu').classList.add("title-color");
        // document.getElementById('regissub').classList.add("title-color");
    } else if (y==contactmenu){
        document.getElementById('contactmenu').classList.add("title-color");
        document.getElementById('contactsub').classList.add("title-color");
    }
    // switch (x=='registration.html'){
    //     case 0:
    //     document.getElementById('regis-menu').style.color="red";
    //     break;
    //     case 1:
    //     document.getElementById('home-menu').style.color="red";
    // }
});

function validationForm (){

    let firstname = document.getElementById("fname");
    
    let lastname = document.getElementById("lname");
    
    let DOB = document.getElementById("dob");
   
    let phone = document.getElementById("phone");
    
    let mail = document.getElementById("email");

    let signdate = document.getElementById("signDate");

    let x = validateFname(firstname);  
    x += validateLname(lastname);
    x += validateDOB(DOB);
    x += validateFone(phone);
    x += validateEmail(mail);
    x += validateSignDate(signdate);

    if (x == ""){
        return true;
    }
    // event.preventDefault();
    alert(x);
    return false;
}

function validateFname (ElementInput){
    if (/^[^\s]*[A-Za-z]*\s[A-Za-z]*$/.test(ElementInput.value)){
        return "";
    } else {
        return 'Please fill out your first name\n';
    }
}
function validateLname (ElementInput){
    if (/^[^\s]*[A-Za-z]+$/.test(ElementInput.value)){
        return "";
    } else {
        return 'Please fill out your last name\n';
    }
}
function validateDOB (ElementInput){
    var age = /^((0[1-9]|[12]\d|3[0-1])\/(0[1-9]|1[012])\/(19[0-9]{2}|20[0-9]{2}))$/;
    if (age.test(ElementInput.value)){
        let year = parseInt(ElementInput.value.slice(6));
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let yearDiff = currentYear - year;
        if (yearDiff>18){
            return "";
        }
        else {
            return 'You are underage. You cannot submit the form\n';
        }
    } else {
        return 'Please fill the DOB following DD/MM/YYYY format with the real age\n';
    }
}
function validateFone (ElementInput){
    if (/^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/.test(ElementInput.value)){
        return "";
    } else {
        return 'Phone number needs to be appear as 123-456-7890\n';
    }
}
function validateEmail (ElementInput){
    if (/[^\s]*[A-Za-z0-9-_]+@[a-z]+[.][a-z]*$/.test(ElementInput.value)){
        return "";
    } else {
        return 'Please fill valid email\n';
    }
}
function disabledChoosing(){
    let x = document.getElementsByName("size");
    for (i=0; i<x.length; i++){
        x[i].disabled = true;
    }
}
function enabledChoosing(){
    let y = document.getElementsByName("size");
    for (i=0; i<y.length; i++){
        y[i].disabled = false;
    }
}
function getFormattedDate(date) {
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    let month = (1+ date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    let year = date.getFullYear();
    let current = day + '/' + month  + '/' + year;
    return current;
  }
function changePlaceholder(){
    let date = document.getElementById('signDate').valueAsDate;
    date = new Date();
    let currentDate = getFormattedDate(date);
    document.getElementById("signDate").placeholder = currentDate;
}
function validateSignDate (ElementInput){
    if (/^((0[1-9]|[12]\d|3[0-1])\/(0[1-9]|1[012])\/20[0-9]{2})$/.test(ElementInput.value)){
        return "";
    } else {
        return 'Please fill out valid date in signing date section';
    }
}
// function checkuniform(ElementInput){
//     let x = document.getElementById('uniForm').checked;
//     let y = document.getElementsByName("size");
//     if (x==true){
//         for (i=0; i<x.length; i++){
//             x[i].disabled = true;
//         }
//     } else {
//         for (i=0; i<x.length; i++){
//             x[i].disabled = false;
//         }
//     }
// }