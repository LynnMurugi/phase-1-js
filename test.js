// gradeGenerator.js
// gradeGenerator.js

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getGrade(marks) {
    const marksNum = parseInt(marks, 10);

    if (isNaN(marksNum) || marksNum < 0 || marksNum > 100) {
        console.log("Invalid marks. Please enter a number between 0 and 100.");
        return;
    }

    let grade;

    if (marksNum > 79) {
        grade = 'A';
    } else if (marksNum >= 60) {
        grade = 'B';
    } else if (marksNum >= 49) {
        grade = 'C';
    } else if (marksNum >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    console.log(`The grade for marks ${marksNum} is ${grade}.`);
}

rl.question('Enter student marks (0 - 100): ', (answer) => {
    getGrade(answer);
    rl.close();
});




