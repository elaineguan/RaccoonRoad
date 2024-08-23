const storyData = {
    start: {
        image: 'images/start.JPG',
        text: 'Meet Taro, a raccoon who recently landed his first full-time job as a barista at a milk tea shop! He just recieved his first paycheck and wonders how he should use it.',
        options: [
            { text: 'Continue', next: 'suki' },
        ]
    },
    suki: {
        image: 'images/suki.JPG',
        text: 'At work, Taro meets Suki, a wise and experienced fox. Suki tells Taro about the 401(k) plan offered by their employer, explaining how it’s a smart way to save for the future.',
        options: [
            { text: "401(k)? What's that?", next: 'explaink' },
        ]
    },
    explaink: {
        image: 'images/explaink.JPG',
        text: 'Suki explains, "A 401(k) is a retirement savings plan where you can put some of your paycheck away before taxes. It grows over time, and our employer even matches some of the money you save!"',
        options: [
            { text: "Tell me more about 401(k)", next: 'morek' },
        ]
    },
    morek: {
        image: 'images/morek.jpg',
        text: '"When you contribute to a 401(k), you lower your taxable income, and the money grows tax-deferred, which means you don’t pay taxes until you withdraw it in retirement."',
        options: [
            { text: 'What happens when I take the money out?', next: 'takemoneyk' },
            { text: 'How much can I contribute a year?', next: 'contributek' },
            { text: 'What does it mean when my employer matches some of my contributions?', next: 'employerk' },
        ]
    },
    takemoneyk: {
        image: 'images/takemoneyk.jpg',
        text: '"When you withdraw from your 401(k), it’s taxed as regular income. But be careful—if you take money out before age 59½, there’s usually a 10% penalty, and you have to pay tax on it too. Anything else you’d like to know?"',
        options: [
            { text: 'How much can I contribute a year?', next: 'contributek' },
            { text: 'What does it mean when my employer matches some of my contributions?', next: 'employerk' },
            { text: 'Nope, I got it!', next: 'later' },
        ]
    },
    contributek: {
        image: 'images/contributek.jpg',
        text: '"For 2024, you can contribute up to $23,000. If you’re 50 or older, you can add an extra $7,500 in catch-up contributions, making the total $30,500. Anything else?"',
        options: [
            { text: 'What happens when I take the money out?', next: 'takemoneyk' },
            { text: 'What does it mean when my employer matches some of my contributions?', next: 'employerk' },
            { text: 'Nope, I got it!', next: 'later' },
        ] 
    },
    employerk: {
        image: 'images/employerk.jpg',
        text: "\"If your employer offers a match, they will contribute a certain amount based on what you put in, up to a specified limit. For example, if they match 50% of your contributions up to 6% of your salary, and you contribute 6%, they’ll add an extra 3% of your salary to your 401(k). Any other questions?\"",        
        options: [
            { text: 'What happens when I take the money out?', next: 'takemoneyk' },
            { text: 'How much can I contribute per year?', next: 'contributek' },
            { text: 'Nope, I got it!', next: 'later' },
        ] 
    },

    later: {
        image: 'images/later.jpg',
        text: "Later, Taro meets another coworker, a hamster named Momo who loves to talk about investing. Momo tells Taro about another way to save for retirement: the Roth IRA.",
        options: [
            { text: "Roth IRA? What's that?", next: 'rothiraexplain' },
        ] 
    },
    rothiraexplain: {
        image: 'images/rothiraexplain.jpg',
        text: "\"A Roth IRA is a retirement savings account that you fund with after-tax dollars, meaning you've already paid taxes on the money you contribute. You have a broad range of investment options, and your money grows tax-free, so you don’t pay taxes when you take it out in retirement.\"",
        options: [
            { text: 'What if I need the money before retirement?', next: 'takemoneyroth' },
            { text: 'How much can I contribute?', next: 'contributeroth' },
            { text: "Can I contribute to a Roth IRA if I have a 401(k)?", next: 'both' },
        ] 
    },

    takemoneyroth: {
        image: 'images/takemoneyroth.jpg',
        text: "\"You can take out your contributions anytime without penalty. But remember, the 5-year rule applies to your earnings—they should stay in until you’re at least 59½ and the account has been open for five years to avoid penalties and taxes. Any more questions? \"",
        options: [
            { text: 'How much can I contribute?', next: 'contributeroth' },
            { text: "Can I contribute to a Roth IRA if I have a 401(k)?", next: 'both' },
            { text: 'Nope, I understand!', next: 'laterroth' },
        ] 
    },

    contributeroth: {
        image: 'images/contributeroth.jpg',
        text: "\"For 2024, you can contribute up to $6,500 to a Roth IRA. If you’re 50 or older, you can add an extra $1,000 in catch-up contributions, making the total $7,500. Do you have any other questions?\"",
        options: [
            { text: 'What if I need the money before retirement?', next: 'takemoneyroth' },
            { text: "Can I contribute to a Roth IRA if I have a 401(k)?", next: 'both' },
            { text: 'Nope, I understand!', next: 'laterroth' },
        ] 
    },
    both: {
        image: 'images/both.jpg',
        text: "\"Yes, you can contribute to both a 401(k) and a Roth IRA. There are income limits that might prevent you from directly contributing to a Roth IRA if you earn too much, but you can use a strategy called a backdoor Roth IRA. Does that make sense?\"",
        options: [
            { text: 'How much can I contribute?', next: 'contributeroth' },
            { text: 'What if I need the money before retirement?', next: 'takemoneyroth' },
            { text: 'I understand!', next: 'laterroth' },
        ] 
    },
    
    laterroth: {
        image: 'images/laterroth.jpg',
        text: 'Taro thinks carefully about what Suki and Momo have told him. "The 401(k) gives me an immediate tax break and free money from my employer, but the Roth IRA grows tax-free, and I won’t have to pay taxes when I retire. Which one should I choose?"',
        options: [
            { text: 'Can I do both?', next: 'prioritization' },
        ]
    },

    prioritization: {
        image: 'images/prioritization.jpg',
        text: "Taro tells Suki and Momo, \"I'd like to contribute to both my 401(k) and my Roth IRA. How should I prioritize?\"",        
        options: [
        { text: 'Continue', next: 'suki2' },
        ]
    },

    suki2: {
        image: 'images/suki2.jpg',
        text: "\"Absolutely, Taro! Everyone’s situation is different, but here’s a general strategy. Start by contributing enough to your 401(k) to get the full employer match. That’s essentially free money, and you don’t want to leave it on the table!\"",        options: [
            { text: 'What next?', next: 'momo2' },
        ]
    },
    momo2: {
        image: 'images/momo2.jpg',
        text: "\"After that, focus on maxing out your Roth IRA. The benefit of tax-free growth and withdrawals in retirement is particularly powerful, especially while you’re young. The earlier you start, the more time your investments have to grow\"",        options: [
        { text: 'What if I still have money left to invest after that?', next: 'continue' },
        ]
    },

    continue: {
        image: 'images/continue.jpg',
        text: "\"If you’ve got more to contribute, go back to your 401(k) and increase your contributions. Aim to hit the annual contribution limit. This not only helps grow your retirement savings but also further reduces your taxable income, giving you a tax break now.\"",        options: [
        { text: 'I understand!', next: 'brokerage' },
        ]
    },

    brokerage: {
        image: 'images/brokerage.jpg',
        text: "\"And if you’re really in good shape and max out both your 401(k) and Roth IRA, you might consider putting any extra savings into a taxable brokerage account. This gives you more flexibility with your investments and doesn’t have the same restrictions on withdrawals as retirement accounts do.\"",        options: [
        { text: 'Continue', next: 'more' },
        ]
    },

    more: {
        image: 'images/more.jpg',
        text: "\"Remember, though, everyone has different financial goals and needs. It’s important to assess your situation—like your income, tax bracket, and retirement goals—when deciding how to allocate your contributions. It’s a good idea to revisit your plan periodically as your circumstances change. What works now might need tweaking in a few years.\"",
        options: [
        { text: 'Got it! How do I open a Roth IRA?', next: 'getstartedr' },
        { text: 'Sounds good! How do I start with my 410(k)?', next: 'getstartedk1' },

        ]
    },

    getstartedr: {
        image: 'images/getstartedr.png',
        text: '"Starting a Roth IRA is straightforward! First, choose a brokerage firm or financial institution. Look for one with low fees and a variety of investment options, like Charles Schwab or Fidelity. You can open the account online, which usually only takes a few minutes"',
        options: [
        { text: 'Continue', next: 'whatnextr' },
        ]
    },
    whatnextr: {
        image: 'images/whatnextr.jpg',
        text: '"Once your account is open, you’ll decide how to fund it—either by transferring money from your bank account or rolling over funds from another retirement account. After that, you can start choosing investments, like stocks, bonds, or mutual funds."',
        options: [ 
        { text: 'Continue', next: 'getstartedk' },
        ]
    },


    getstartedk: {
        image: 'images/getstartedk.jpg',
        text: '"As for a 401(k), since our employer offers one, you’ll need to enroll through our benefits portal or HR department. It’s usually a simple process where you choose your contribution amount and how you want the money invested."',
        options: [
        { text: 'Tell me more', next: 'whatnextk' },
        ]
    },
    whatnextk: {
        image: 'images/whatnextk.jpg',
        text: '"Your contributions will come directly out of your paycheck, so you won’t even have to think about it. Plus, many employers offer target-date funds that automatically adjust as you get closer to retirement, making it easier to manage. Be sure to review your plan’s investment options and fees, and don’t forget to take advantage of any employer match—it’s free money!"',
        options: [
        { text: 'Next', next: 'conclusion' },
        ]
    },

    getstartedk1: {
        image: 'images/getstartedk.jpg',
        text: '"To start with your 401(k), since our employer offers one, you’ll need to enroll through our benefits portal or HR department. It’s usually a simple process where you choose your contribution amount and how you want the money invested."',
        options: [
        { text: 'Tell me more', next: 'whatnextk1' },
        ]
    },
    whatnextk1: {
        image: 'images/whatnextk.jpg',
        text: '"Your contributions will come directly out of your paycheck, so you won’t even have to think about it. Plus, many employers offer target-date funds that automatically adjust as you get closer to retirement, making it easier to manage. Be sure to review your plan’s investment options and fees, and don’t forget to take advantage of any employer match—it’s free money!"',
        options: [
        { text: 'How do I open a Roth IRA?', next: 'getstartedr1' },
        ]
    },

    getstartedr1: {
        image: 'images/getstartedr.png',
        text: '"Starting a Roth IRA is also straightforward! First, choose a brokerage firm or financial institution. Look for one with low fees and a variety of investment options, like Charles Schwab or Fidelity. You can open the account online, which usually only takes a few minutes"',
        options: [
        { text: 'Continue', next: 'whatnextr1' },
        ]
    },
    whatnextr1: {
        image: 'images/whatnextr.jpg',
        text: '"Once your account is open, you’ll decide how to fund it—either by transferring money from your bank account or rolling over funds from another retirement account. After that, you can start choosing investments, like stocks, bonds, or mutual funds."',
        options: [
        { text: 'Continue', next: 'conclusion' },
        ]
    },

    conclusion: {
        image: 'images/conclusion.jpg',
        text: '"With guidance from Suki and Momo, Taro sets up a plan: he’ll contribute enough to his 401(k) to get the match, max out his Roth IRA, and then add any extra savings to his 401(k) or a taxable account."',
        options: [
        { text: 'Review 401(k)', next: 'reviewk' },
        { text: 'Review Roth IRA', next: 'reviewr' },
        { text: 'Finish', next: 'ending' },
        ]
    },
    reviewk: {
        image: 'images/reviewk.jpg',
        text: "A 401(k) is an employer-sponsored retirement account where you contribute pre-tax dollars, lowering your taxable income. Your contributions grow tax-deferred, and many employers offer matching contributions, which is free money you shouldn’t pass up. For 2024, you can contribute up to $23,000, with additional catch-up contributions if you're 50 or older. Withdrawals are taxed as regular income, with penalties for early withdrawals before age 59½.",
        options: [
        { text: 'Review Roth IRA', next: 'reviewr' },
        { text: 'Finish', next: 'ending' }
        ]
    },

    reviewr: {
        image: 'images/reviewr.jpg',
        text: "A Roth IRA is a retirement account funded with after-tax dollars, allowing your investments to grow tax-free, and withdrawals in retirement are tax-free too. You can contribute up to $6,500 annually in 2024, with higher limits if you're 50 or older, though income limits may apply. You can invest in a variety of assets, and while you can withdraw contributions anytime without penalties, earnings should stay in until at least 59½ to avoid taxes and penalties.",
        options: [
        { text: 'Review 401(k)', next: 'reviewk' },
        { text: 'Finish', next: 'ending' },
        ]
    },

    ending: {
        image: 'images/ending.jpg',
        text: "Thanks to the help of Suki and Momo, Taro feels confident and ready to take control of his financial future. With a solid plan in place, he knows he’s setting himself up for success. This is just the beginning of his journey toward financial freedom!",
        options: []
    
    }

};

function choose(option) {
    const currentPath = document.querySelector('#story-image').dataset.currentPath || 'start';
    const nextPath = storyData[currentPath].options[option - 1].next;
    updateStory(nextPath);
}

function updateStory(path) {
    const story = storyData[path];
    document.querySelector('#story-image').src = story.image;
    document.querySelector('#story-text').innerText = story.text;  // Update the text
    document.querySelector('#story-image').dataset.currentPath = path;

    const choicesDiv = document.querySelector('#choices');
    choicesDiv.innerHTML = ''; // Clear previous options

    if (story.options.length === 0) {
        // Hide choices and show restart button if story ends
        choicesDiv.style.display = 'none';
        document.querySelector('#restart').style.display = 'block';
    } else {
        // Show choices and hide restart button if story continues
        choicesDiv.style.display = 'block';
        document.querySelector('#restart').style.display = 'none';

        story.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.onclick = () => choose(index + 1);
            choicesDiv.appendChild(button);
        });

        // Add "Back" image button at the top left of the screen
const backButton = document.createElement('img');
backButton.src = 'images/back.png';
backButton.style.cursor = 'pointer';
backButton.style.position = 'fixed';
backButton.style.top = '10px'; // Place the button at the top of the screen
backButton.style.left = '10px'; // Place the button at the left of the screen
backButton.style.width = '50px'; // Make the image smaller
backButton.style.zIndex = '1000'; // Ensure the button stays on top of other elements
backButton.onclick = () => {
    const currentPath = document.querySelector('#story-image').dataset.currentPath;
    const previousPath = Object.keys(storyData).find(key => storyData[key].options.some(option => option.next === currentPath));
    updateStory(previousPath);
};

// Add "Home" image button next to the back button
const homeButton = document.createElement('img');
homeButton.src = 'images/home.png';
homeButton.style.cursor = 'pointer';
homeButton.style.position = 'fixed';
homeButton.style.top = '10px'; // Place the button at the top of the screen
homeButton.style.left = '80px'; // Place the button 50px to the right of the back button
homeButton.style.width = '50px'; // Make the image smaller
homeButton.onclick = () => {
    goToHome();
};

// Remove any existing back button before adding a new one
const existingBackButton = document.querySelector('img[src="images/back.png"]');
if (existingBackButton) {
    existingBackButton.remove();
}

document.body.appendChild(backButton); // Add the back button to the body element
document.body.appendChild(homeButton); // Add the home button to the body element
    }
}


function restartStory() {
    // Reset to the start of the story
    document.querySelector('#story-image').dataset.currentPath = 'start';
    updateStory('start');
}

function goToHome() {
    // Clear the current path and reset to the initial screen
    document.querySelector('#story-image').dataset.currentPath = 'start';
    document.querySelector('#story-text').innerText = "Join Taro the raccoon on a journey to learn about smart saving and retirement plan to make decisions that set you up for a financially free and successful future!";
    document.querySelector('#story-image').src = 'images/coverpage.png';

    // Show the "Play" button again and hide restart options
    document.querySelector('#choices').innerHTML = '<button onclick="updateStory(\'start\')">Play</button>';
    document.querySelector('#choices').style.display = 'block';
    document.querySelector('#restart').style.display = 'none';
}

