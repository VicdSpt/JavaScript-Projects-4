const answers = [
  "Trust the cosmic whispers.",
  "My sources say no.",
  "Outlook good.",
  "A resounding affirmative, it is.",
  "Visions in the crystal ball say 'aye.'",
  "Reply hazy, try again.",
  "Concentrate and ask again.",
  "The sands of fate yet to settle.",
  "Without a doubt.",
  "Destiny has etched a solid 'yes.'",
  "The mists of time obscure the answer.",
  "Yes - definitely.",
  "Dark clouds cast doubt on it.",
  "It is certain.",
  "The oracles concur with a 'yes.'",
  "Don’t count on it.",
  "Fortune smiles upon your query.",
  "Better not tell you now.",
  "As I see it, yes.",
  "The omens speak of shadows.",
  "Patience, young seeker, ask in time.",
  "Most likely.",
  "Aye, the winds blow true.",
  "My ethereal sources murmur 'nay.'",
  "My reply is no.",
  "Yes.",
  "In the realm of certainty, it dwells.",
  "Ask again later.",
  "The stars align in your favor.",
  "Outlook not so good.",
  "You may rely on it.",
  "The runes spell skepticism.",
  "Signs point to yes.",
  "The odds appear in your favor.",
  "Cannot predict now.",
  "Very doubtful.",
];

const ballImage = document.getElementById("ball");
const answerText = document.getElementById("answer");

const generateAnswer = () => {
  const randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
};

const shakeBall = () => {
  let rotation = Math.floor(Math.random() * 180) + 90;
  const rotateInterval = setInterval(() => {
    rotation += Math.floor(Math.random() * 10) + 30;
    ballImage.style.transform = `rotate(${rotation}deg)`;
    if (rotation >= 360) {
      clearInterval(rotateInterval);
      setTimeout(() => {
        showAnswer();
        ballImage.style.transform = "rotate(0deg)";
      }, 1000);
    }
  }, 10);
};

const showAnswer = () => {
  const answer = generateAnswer();
  answerText.textContent = answer;
};

ballImage.addEventListener("click", () => {
  answerText.textContent = "";
  shakeBall();
});
