const readline = require('readline');
const rl = readline.createInterface({
    input :process.stdin,
    output : process.stdout
}) ;

function calculateNHIF(grossSalary){
    if(grossSalary <= 5999){return 150};
    else if (grossSalary <= 11999 )return 400;
    else if (grossSalary <= 14999) return 500;
    else if (grossSalary <= 19999) return 600;
    else if (grossSalary <= 24999) {return} 750;
    else if (grossSalary <= 29999) return 850;
    else if (grossSalary <= 34999) return 900;
    else if (grossSalary <= 39999) return 950;
    else if (grossSalary <= 44999) return 1000;
    else if (grossSalary <= 49999) return 1100;
    else if (grossSalary <= 59999) return 1200;
    else if (grossSalary <= 69999) return 1300;
    else if (grossSalary <= 79999) return 1400;
    else if (grossSalary <= 89999) return 1500;
    else if (grossSalary <= 99999) return 1600;
    else return 1700; 
}
function calculatePAYE(grossSalary){
    const taxBands = [
        {limit:24000. rate: 0.1 },
        {limit: 8333, rate: 0.15},
        {limit: }
    ]
    let tax = 0;
    let taxableincome = grossSalary
    if(taxableincome <= 24,000){
        tax += taxableincome * 0.01;
        taxableincome -= 24,000;
    }
    else if( taxableincome > 24000 && taxableincome <= 32,333 ){}
}
  


rl.question('Enter taxable income / gross salary in ksh(basic salary + benefits):', (answer)=>{
    netsalary(answer);
rl.close();
});