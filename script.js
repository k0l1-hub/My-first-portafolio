const cat = document.getElementById("cat");
const half = 32;
const email = document.getElementById("email");
const discord = document.getElementById("discord");

let leftX = 50;
let topY = 50;

let x = leftX;
let y = topY;

window.addEventListener("mousemove", (event) => {
    x = event.clientX;
    y = event.clientY;
})


let down = ["-64px -128px", "-128px -128px", "-192px -128px", "-256px -128px", "-320px -128px", "-384px -128px"];
let up = ["-64px -192px", "-128px -192px", "-192px -192px", "-256px -192px", "-320px -192px", "-384px -192px"];
let left = ["-64px -256px", "-128px -256px", "-192px -256px", "-256px -256px", "-320px -256px", "-384px -256px"];
let right = ["-64px -320px", "-128px -320px", "-192px -320px", "-256px -320px", "-320px -320px", "-384px -320px"];
let n = ["-0px -0px", "-384px -384px"];

let catPo = {
    "up":0,
    "down":0,
    "left":0,
    "right":0
}

setInterval(() => {
    console.log(`${leftX} and ${topY} cat, ${x} and ${y} mouse`);
    if (y != topY) {
        if (topY > y) {
            topY -= 1
            if (catPo["up"]==5) {
                catPo["up"]=0
                cat.style.backgroundPosition = up[catPo["up"]]
            } else {
                cat.style.backgroundPosition = up[catPo["up"]]
                catPo["up"]+=1
            }
        } else {
            topY += 1
            if (catPo["down"]==5) {
                catPo["down"]=0
                cat.style.backgroundPosition = down[catPo["down"]]
            } else {
                cat.style.backgroundPosition = down[catPo["down"]]
                catPo["down"]+=1
            }
        }
        cat.style.top = `${topY-half}px`;
    }

    if (x != leftX) {
        if (leftX > x) {
            leftX -= 1
            if (catPo["left"]==5) {
                catPo["left"]=0
                cat.style.backgroundPosition = left[catPo["left"]]
            } else {
                cat.style.backgroundPosition = left[catPo["left"]]
                catPo["left"]+=1
            }
        } else {
            leftX += 1
            if (catPo["right"]==5) {
                catPo["right"]=0
                cat.style.backgroundPosition = right[catPo["right"]]
            } else {
                cat.style.backgroundPosition = right[catPo["right"]]
                catPo["right"]+=1
            }
        }
        cat.style.left = `${leftX-half}px`;
    }

    if (x == leftX && y == topY) {
        cat.style.backgroundPosition = n[0];
    }
}, 50)

discord.addEventListener("click", () => {
    navigator.clipboard.writeText("@pablolaea");
    discord.innerText = "Discord user copied!";
    discord.style.backgroundColor = "lightgreen";
    setTimeout(() => {
        discord.innerText = "My discord!";
        discord.style.backgroundColor = "rgb(163, 255, 255)";
    }, 700)
})

email.addEventListener("click", () => {
    navigator.clipboard.writeText("enderman9054@gmail.com");
    email.innerText = "Email copied!";
    email.style.backgroundColor = "lightgreen";
    setTimeout(() => {
        email.innerText = "My Email!";
        email.style.backgroundColor = "rgb(163, 255, 255)";
    }, 700)
})
