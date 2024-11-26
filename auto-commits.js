const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const repoPath = "C:/Users/HP/Desktop/new-project";
const startDate = new Date(2024, 4, 1); 

process.chdir(repoPath);

for (let i = 0; i < 30; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    const formattedDate = currentDate.toISOString().split('T')[0];
    const commitMessage = `Commit on ${formattedDate}`;

    fs.appendFileSync('test.txt', `Commit on ${formattedDate}\n`);
    execSync('git add .'); 
    execSync(`git commit -m "${commitMessage}" --date="${formattedDate}T12:00:00"`); 
    console.log(`Commit on ${formattedDate}`);

    execSync('git push origin main'); 
}

console.log("All commits have been pushed!");
