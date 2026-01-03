#!/usr/bin/env node

/**
 * Quick Progress Update Script
 * 
 * Usage:
 *   node update-progress.js                    - Interactive mode
 *   node update-progress.js 02-js 50 10        - Quick mode: topic completed inProgress
 *   node update-progress.js 02-js +10          - Add 10 to completed
 *   node update-progress.js 02-js +10 +5       - Add 10 to completed, 5 to inProgress
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const progressFile = path.join(__dirname, 'progress.json');

// Load current progress
function loadProgress() {
    if (!fs.existsSync(progressFile)) {
        console.error('❌ progress.json not found!');
        process.exit(1);
    }
    return JSON.parse(fs.readFileSync(progressFile, 'utf8'));
}

// Save progress
function saveProgress(progress) {
    fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2));
    console.log('✅ Progress saved!\n');
}

// Quick update mode
function quickUpdate(topic, completed, inProgress) {
    const progress = loadProgress();

    if (!progress[topic]) {
        console.error(`❌ Topic "${topic}" not found!`);
        console.log('\nAvailable topics:');
        Object.keys(progress).forEach(t => console.log(`  - ${t}`));
        process.exit(1);
    }

    const oldCompleted = progress[topic].completed;
    const oldInProgress = progress[topic].inProgress;

    // Handle incremental updates (+10, +5, etc.)
    if (completed.startsWith('+')) {
        progress[topic].completed += parseInt(completed.substring(1));
    } else {
        progress[topic].completed = parseInt(completed);
    }

    if (inProgress) {
        if (inProgress.startsWith('+')) {
            progress[topic].inProgress += parseInt(inProgress.substring(1));
        } else {
            progress[topic].inProgress = parseInt(inProgress);
        }
    }

    console.log(`\n📊 Updated ${topic}:`);
    console.log(`   Completed: ${oldCompleted} → ${progress[topic].completed}`);
    console.log(`   In Progress: ${oldInProgress} → ${progress[topic].inProgress}`);

    saveProgress(progress);

    // Show progress tracker
    const { execSync } = require('child_process');
    try {
        execSync('node study-tracker.js', { stdio: 'inherit' });
    } catch (e) {
        // Ignore if study-tracker.js doesn't exist
    }
}

// Interactive mode
function interactiveUpdate() {
    const progress = loadProgress();
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('\n📝 QUICK PROGRESS UPDATE\n');
    console.log('Available topics:');
    const topics = Object.keys(progress);
    topics.forEach((topic, index) => {
        const current = progress[topic];
        console.log(`${String(index + 1).padStart(2)}. ${topic.padEnd(30)} (Done: ${current.completed}, In Progress: ${current.inProgress})`);
    });

    rl.question('\nEnter topic number (or topic name): ', answer => {
        let topic;
        const num = parseInt(answer);

        if (!isNaN(num) && num > 0 && num <= topics.length) {
            topic = topics[num - 1];
        } else {
            topic = answer.trim();
        }

        if (!progress[topic]) {
            console.log('❌ Invalid topic!');
            rl.close();
            return;
        }

        console.log(`\n📚 Updating: ${topic}`);
        console.log(`   Current - Completed: ${progress[topic].completed}, In Progress: ${progress[topic].inProgress}`);

        rl.question('\nQuestions completed today (or total, or +N to add): ', completed => {
            rl.question('Questions in progress (or +N to add, or press Enter to skip): ', inProgress => {
                const oldCompleted = progress[topic].completed;
                const oldInProgress = progress[topic].inProgress;

                // Handle completed
                if (completed) {
                    if (completed.startsWith('+')) {
                        progress[topic].completed += parseInt(completed.substring(1));
                    } else {
                        progress[topic].completed = parseInt(completed);
                    }
                }

                // Handle in progress
                if (inProgress) {
                    if (inProgress.startsWith('+')) {
                        progress[topic].inProgress += parseInt(inProgress.substring(1));
                    } else {
                        progress[topic].inProgress = parseInt(inProgress);
                    }
                }

                console.log(`\n✨ Updated ${topic}:`);
                console.log(`   Completed: ${oldCompleted} → ${progress[topic].completed}`);
                console.log(`   In Progress: ${oldInProgress} → ${progress[topic].inProgress}`);

                saveProgress(progress);
                rl.close();

                // Show progress tracker
                const { execSync } = require('child_process');
                try {
                    execSync('node study-tracker.js', { stdio: 'inherit' });
                } catch (e) {
                    // Ignore if study-tracker.js doesn't exist
                }
            });
        });
    });
}

// Main
const args = process.argv.slice(2);

if (args.length === 0) {
    // Interactive mode
    interactiveUpdate();
} else if (args[0] === 'help' || args[0] === '--help' || args[0] === '-h') {
    console.log(`
📊 Progress Update Tool

USAGE:
  node update-progress.js                        Interactive mode
  node update-progress.js <topic> <done> [prog]  Quick update
  node update-progress.js <topic> +N [+M]        Add N to done, M to progress

EXAMPLES:
  # Interactive mode (easiest)
  node update-progress.js

  # Set JavaScript to 50 completed, 10 in progress
  node update-progress.js 02-js 50 10

  # Add 10 to completed count for JavaScript
  node update-progress.js 02-js +10

  # Add 10 to completed, 5 to in-progress
  node update-progress.js 02-js +10 +5

  # Set only completed (leave in-progress unchanged)
  node update-progress.js 02-js 50

TIPS:
  - Use +N format to add to current count (easier for daily updates)
  - Use absolute numbers to set exact count
  - Topic names are case-sensitive
  - Progress is automatically saved to progress.json
  `);
} else if (args.length >= 2) {
    // Quick mode
    quickUpdate(args[0], args[1], args[2]);
} else {
    console.log('❌ Invalid arguments. Use --help for usage information.');
}
