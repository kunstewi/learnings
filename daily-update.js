#!/usr/bin/env node

/**
 * Daily Study Update - Super Simple!
 * 
 * Just run: node daily-update.js
 * 
 * This script will:
 * 1. Ask what you studied today
 * 2. Ask how many questions you completed
 * 3. Update progress.json
 * 4. Show your updated progress
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const progressFile = path.join(__dirname, 'progress.json');

// Topic shortcuts for easier typing
const shortcuts = {
    'js': '02-js',
    'javascript': '02-js',
    'html': '01-html-css',
    'css': '01-html-css',
    'node': '03-node-express',
    'express': '03-node-express',
    'db': '04-databases',
    'database': '04-databases',
    'react': '05-react',
    'ts': '07-typescript',
    'typescript': '07-typescript',
    'next': '11-next-js',
    'nextjs': '11-next-js',
    'docker': '12-docker',
    'k8s': '21-kubernetes',
    'kubernetes': '21-kubernetes',
    'os': '25-operating-systems',
    'networks': '26-computer-networks',
    'tailwind': '06-tailwind',
    'prisma': '08-postgres-prisma',
};

function loadProgress() {
    if (!fs.existsSync(progressFile)) {
        console.error('❌ progress.json not found!');
        process.exit(1);
    }
    return JSON.parse(fs.readFileSync(progressFile, 'utf8'));
}

function saveProgress(progress) {
    fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2));
}

function main() {
    const progress = loadProgress();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('\n🎯 DAILY STUDY UPDATE\n');
    console.log('Quick shortcuts: js, react, node, ts, docker, k8s, os, networks, etc.\n');

    rl.question('What did you study today? ', topicInput => {
        const topicLower = topicInput.toLowerCase().trim();
        const topic = shortcuts[topicLower] || topicInput.trim();

        if (!progress[topic]) {
            console.log(`\n❌ Topic "${topic}" not found!`);
            console.log('\nDid you mean one of these?');
            Object.keys(progress).slice(0, 10).forEach(t => console.log(`  - ${t}`));
            rl.close();
            return;
        }

        console.log(`\n📚 ${topic}`);
        console.log(`   Current progress: ${progress[topic].completed} completed, ${progress[topic].inProgress} in progress\n`);

        rl.question('How many questions did you complete today? ', completed => {
            const completedNum = parseInt(completed) || 0;

            rl.question('How many are you currently working on? (press Enter to skip) ', inProgress => {
                const inProgressNum = inProgress ? parseInt(inProgress) : progress[topic].inProgress;

                const oldCompleted = progress[topic].completed;
                const oldInProgress = progress[topic].inProgress;

                progress[topic].completed = oldCompleted + completedNum;
                progress[topic].inProgress = inProgressNum;

                console.log('\n✨ UPDATED!\n');
                console.log(`   ${topic}:`);
                console.log(`   ✅ Completed: ${oldCompleted} → ${progress[topic].completed} (+${completedNum})`);
                console.log(`   🔄 In Progress: ${oldInProgress} → ${progress[topic].inProgress}`);

                saveProgress(progress);
                console.log('\n💾 Progress saved to progress.json\n');

                rl.close();

                // Show full progress
                console.log('📊 Running progress tracker...\n');
                const { execSync } = require('child_process');
                try {
                    execSync('node study-tracker.js', { stdio: 'inherit' });
                } catch (e) {
                    console.log('(Install study-tracker.js to see full progress)');
                }

                console.log('\n🎉 Great work today! Keep it up!\n');
            });
        });
    });
}

main();
