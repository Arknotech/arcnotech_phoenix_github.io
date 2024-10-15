function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (userChoice === computerChoice) {
        result = `It's a draw! You both chose ${userChoice}.`;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = `You win! ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} beats ${computerChoice}.`;
    } else {
        result = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${userChoice}.`;
    }

    document.getElementById('result').innerText = result;
}
