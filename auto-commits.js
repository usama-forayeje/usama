const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const repoPath = "C:/Users/HP/Desktop/new-project"; 
const startDate = new Date();
startDate.setDate(startDate.getDate() - 200); 

process.chdir(repoPath);

for (let i = 0; i < 200; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    const shouldCommitToday = Math.random() > 0.3; 
    if (!shouldCommitToday) {
        console.log(`No commits on ${currentDate.toISOString().split('T')[0]}`);
        continue; 
    }

    const commitsToday = Math.floor(Math.random() * 5) + 1;

    for (let j = 0; j < commitsToday; j++) {
        const formattedDate = currentDate.toISOString().split('T')[0];
        const commitMessage = `Commit on ${formattedDate} (#${j + 1})`;

        fs.appendFileSync('test.txt', `Commit on ${formattedDate}\n`);
        execSync('git add .');
        execSync(`git commit -m "${commitMessage}" --date="${formattedDate}T12:00:00"`);
        console.log(`Commit #${j + 1} on ${formattedDate}`);
    }
}

execSync('git push origin main');
console.log("All commits have been pushed!");
