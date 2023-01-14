const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotes = [ "If you want something you never had, you have to do something you've never done.",
    "Take a moment to relax.",
    "Everything is going to be Ok.",
    "Take what you have and use it to create what you want.",
    "The way you speak to yourself matters.",
    "Keep going… everything comes to you at the right time.",
    "Believe in yourself and your capabilities.",
    "If it's meant to be, it will be."
]
button.addEventListener ("click", 
function () {
    let randomQuoter = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuoter;
})