function saturdayFun(activity='roller-skate'){
    return 'This Saturday, I want to roller-skate!';
}
console.log(saturdayFun());

function saturdayFun(activity='override'){
    return "This Saturday, I want to bathe my dog!";
}
console.log(saturdayFun("bathe my dog"));

function mondayWork(activity='go to the office'){
    return "This Monday, I will go to the office.";
}
console.log(mondayWork("This Monday, I will go to the office."));

function mondayWork(activity="override"){
    return "This Monday, I will work from home.";
}
console.log(mondayWork("work from home"));

function wrapAdjective(result='*'){
        return "You are *a hard worker*!"
}
console.log(wrapAdjective());


function wrapAdjective(wrapper='||'){
        return "You are ||a dedicated programmer||!";
}
console.log(wrapAdjective("You are ||a dedicated programmer||!"));