//Author: Yel Mangok John <Yel-Mangok>

const membership = prompt("Enter membership type ( basic or premier):").toLowerCase();
const trainer = prompt("Do you want a personal trainer (yes or No):").toLowerCase();


let price = 0;
let trainerFee = 0;

if (membership === "basic" || membership === "premier") {

    if (membership === "basic") {
        price = 20;

    } else {
        price = 30;
    }

    if (trainer === "yes") {
        if (membership === "basic") {
            trainerFee = 10;
        } else {
            trainerFee = 0;
        }
    } else if (trainer === "no") {
        trainerFee = 0;
    } else {
        alert("Invalid trainer input.....");
    }

    const totalCost = price + trainerFee;
    alert("Total membership cost is: $" + totalCost + "USD.");
} else {
    alert("Invalid membership typeof.");
}


/*
---------------------------------------
Desktop Test
---------------------------------------

membership = basic      trainer = no
price = 20
trainerFee = 0
totalCost = 20

=> Total membership cost: $20
---------------------------------------

---------------------------------------
membership = basic      trainer = yes
price = 20
trainerFee = 10
totalCost = 30

=> Total membership cost: $30
---------------------------------------

---------------------------------------
membership = premium    trainer = no
price = 35
trainerFee = 0
totalCost = 35

=> Total membership cost: $35
---------------------------------------

---------------------------------------
membership = premium    trainer = yes
price = 35
trainerFee = 0   (trainer included for premium)
totalCost = 35

=> Total membership cost: $35
---------------------------------------

---------------------------------------
membership = gold       trainer = yes

=> Invalid membership type.
---------------------------------------

---------------------------------------
membership = basic      trainer = maybe

=> Invalid trainer option.
---------------------------------------
*/





