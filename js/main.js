window.addEventListener('load', () => {
    // randomize typing speed
    let speed = Math.random() * 600;
    if (document.readyState == 'complete') {
        let stacks = ['Web Developer', 'Mobile Deeloper', 'Game Developer', 'iOT Engineer', 'Web3 Developer', 'Data Scientist', 'Software Engineer'];
        let stackContainer = document.getElementById('special-stack');
        let charIndex = 0;
        let stackIndex = 0;

        setInterval(() => {
            if (stackIndex < stacks.length) {
                if (charIndex < stacks[stackIndex].length) {
                    stackContainer.innerHTML += stacks[stackIndex][charIndex];
                    charIndex++;
                } else {
                    // wait for three seconds
                    setTimeout(() => {
                        stackContainer.innerHTML = "";
                        charIndex = 0;
                        stackIndex++;
                    }, 3000);
                }
            } else {
                stackIndex = 0;
                charIndex = 0;
            }

        }, speed);
    }
})

let contact = document.getElementById("contact");
let portfolio = document.getElementById("works");
let popup = document.getElementById("pop-up");

function openContactContainer() {
    contact.style.display = "flex";
}

function closeContactContainer() {
    contact.style.display = "none";
}

function openPortfolio() {
    portfolio.style.display = "block";
}

function closePortfolio() {
    portfolio.style.display = "none";
}

function showAvailability() {
    popup.style.display = "flex";

    setTimeout(() => {
        popup.style.display = "none"
    }, "5000")
}