const AI = document.getElementById("AI")
const navbarItems = document.getElementsByClassName("navItem")
const navLinks = document.getElementsByClassName("navbarLink")
var time = 0
function typeWord(str) {
    time += str.length * 100
    var letterCount = 0
    var type = setInterval(() => {
        AI.style.color = "white"
        letterCount++
        AI.innerHTML = str.slice(0, letterCount)
        if (letterCount === str.length) {
            clearInterval(type)
            letterCount = 0
        }
    }, 100)
}
function Delete(str) {
    var letterCount = str.length
    var type = setInterval(() => {
        letterCount--
        AI.innerHTML = str.slice(0, letterCount)
        if (letterCount === 0) {
            clearInterval(type)
            AI.style.color = "transparent"
            AI.innerHTML = "a"
        }
    }, 100)
}
function typeDelete(str) {
    typeWord(str)
    setTimeout(() => {
        Delete(str)
    }, 1000 + str.length * 100)
    time += 1000 + str.length * 100
}
typeDelete("Hello there!")
setTimeout(() => {
    time = 0
    typeWord("What would you like to know about me?")
    setTimeout(() => {
        for (let i = 0; i < navbarItems.length; i++) {
            setTimeout(() => {
                navbarItems[i].style.animation = "fade 0.4 linear"
                navbarItems[i].style.background = "white"
                navbarItems[i].addEventListener("mouseover", function() {
                    this.style.background = "gray"
                    navLinks[i].style.color = "white"
                })
                navbarItems[i].addEventListener("mouseout", function() {
                    this.style.background = "white"
                    navLinks[i].style.color = "black"
                })
            }, i * 400);
        }
    }, time);
}, time + 1000);