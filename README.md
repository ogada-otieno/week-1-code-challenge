# WEEK 1 CODE CHALLENGE

## Installation / Project Setup
In order to get user input using Node.js, it's necessary to use "prompt-sync".
prompt-sync module is a function that creates prompting functions, so we call it in order to get the actual prompting function

1. Make sure you have Node and NPM installed
2. Run this command in the terminal
```bash
npm install prompt-sync
```

## Challenge 1: Student Grade Generator (Toy Problem)
This is a function that prompts the user to input student marks. The input are between 0 and 100. 
Below are the bands for the grades. In the event that a person inputs a value outside the range, they are notified that it is not valid.

***A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.***


## Challenge 2: Speed Detector (Toy Problem)
The program takes as input the speed of a car e.g 80. If the speed is less than 70, it prints “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it gives the driver one demerit point and prints the total number of demerit points.

For example, if the speed is 80, it prints: “Points: 2”. If the driver gets more than 12 points, the function prints: “License suspended”.
The assumption is that each 5 speed units represents 1 unit, and this is translated to 1 speed unit being equivalent to 0.2 demerit points. For context, if the speed is 131, the points are 12.2.


## Challenge 3: Net Salary Calculator (Toy Problem)
This is a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. It then calculates the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
NB: KRA, NHIF, and NSSF values used are provided in the links below.
Presently, the parameters used are:
1. NSSF
2. NHIF
3. Insurance premium
4. Insurance relief
5. Allowable pension fund contribution
6. Taxable income
7. PAYE 

https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.  

https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye

## Author & License
Author: Rodgers Ogada

### License
1. [License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
2. [License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
