onst prompt = require('prompt-sync')();

let grossSalary = prompt('What is your monthly gross salary? ');
console.log(`The gross sallary inputted is: ${grossSalary}.`);

let personalTaxRelief = 2400; // personalTaxRelief p.m = KSh. 2400 (fixed) and only applies once

//let grossSalary = 30000;

// NHIF calculations
function NHIFDeductions(grossSalary) {
    if (grossSalary <= 5999 ) {
        return 150
    } else if (grossSalary <= 7999) {
        return 300
    } else if (grossSalary <= 11999) {
        return 400
    } else if (grossSalary <= 14999) {
        return 500
    } else if (grossSalary <= 19999) {
        return 600
    } else if (grossSalary <= 24999) {
        return 750
    } else if (grossSalary <= 29999) {
        return 850
    } else if (grossSalary <= 34999) {
        return 900
    } else if (grossSalary <= 39999) {
        return 950
    } else if (grossSalary <= 44999) {
        return 1000
    } else if (grossSalary <= 49999) {
        return 1100
    } else if (grossSalary <= 59999) {
        return 1200
    } else if (grossSalary <= 69999) {
        return 1300 
    } else if (grossSalary <= 79999) {
        return 1400 
    } else if (grossSalary <= 89999) {
        return 1500
    } else if (grossSalary <= 99999) {
        return 1600
    } else if (grossSalary >= 100000) {
        return 1700
    }
}

let NHIF = NHIFDeductions(grossSalary)
console.log(`NHIF: ${NHIF}.`);

// NSSF calculations using new rates

function NSSFDeductions(grossSalary) {
    if (grossSalary <=18000) {
        return grossSalary * 0.06
    } else if (grossSalary > 18000) {
        return 18000 * 0.06
    }
}
let NSSF = NSSFDeductions(grossSalary);
console.log(`NSSF deducted from your income at a rate of 6%: ${NSSF}.`);

// Calculating total insurance relief. 

let insurancePremium = prompt('What is your monthly insurance premium? ');
console.log(`The insurance premium inputted is: ${insurancePremium}.`);

//let insurancePremium = 1000;
//let NHIF = 300;
let insurance = parseInt(insurancePremium) + NHIF

function insuranceReliefCalculation (insurance) {
    //insurance = insurancePremium + NHIF

    if (insurance >= 0 && insurance < (100000 / 3)) {
        return insurance * 0.15;
    
    } else if (insurance >= (100000 / 3)) {
        return 5000;
    } 
    // else {
    //     return 0;
    // }
}

let insuranceRelief = insuranceReliefCalculation(insurance);
console.log(`Your insurance relief: ${insuranceRelief}`);

// Taxable income calculations
let taxableIncome = grossSalary - (NHIF + NSSF);
console.log(`Taxable income subject to PAYE calculations: ${taxableIncome}.`);

// PAYE calculations

function paye(taxableIncome) {
    let personalTaxRelief = 2400;
    if (taxableIncome <= 24000) {
        return 0
    } else if (taxableIncome >= 24001 && taxableIncome <= 32333) {
        return ((24000 * 0.10) + ((taxableIncome-24000) * 0.25) - (personalTaxRelief + insuranceRelief));
    } else {
        return (((24000 * 0.10) + (8333 *0.25) + ((taxableIncome - 32333) * 0.30)) - (personalTaxRelief + insuranceRelief))
        
    }
}
let PAYE = paye(taxableIncome)
console.log(`PAYE: ${PAYE}.`);

// Net salary calculation: 
function netSalary(grossSalary) {
    return (grossSalary - (NHIF + NSSF + PAYE))
}
let netIncome = netSalary(grossSalary);
console.log(`Your net salary: ${netIncome}.`);

