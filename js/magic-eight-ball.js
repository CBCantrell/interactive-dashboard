// Put your JavaScript code in this file

let answers = [
    "Absolutely. What could possibly go wrong?",
    "Nope. Pretend you never asked.",
    "My sources say no. My sources are also imaginary.",
    "Yes, but you're going to regret asking.",
    "That sounds like a future-you problem.",
    "Let's pretend the Wi-Fi went out before you asked that.",
    "Sure. I wasn't planning on having a peaceful day anyway.",
    "No. And frankly, I'm concerned that you asked.",
    "I could answer that, but plausible deniability seems wiser.",
    "Do it. I want to see how this ends."
];

function displayAnswer()
{
    let index = Math.floor(Math.random() * answers.length);
    var answer = document.getElementById("circle");
    answer.innerHTML = answers[index];
    answer.style.display = "flex";
}

var ball = document.getElementById("ball");

ball.addEventListener("mousedown", function()
{

    if (document.getElementById("question").value == "")
    {
        alert("Please ask a question first.");
    }

    else
    {
        displayAnswer();
    }
});

var reset = document.getElementById("reset");

reset.addEventListener("click", function()
{
    var circle = document.getElementById("circle");
    circle.style.display = "none";

});
