// Make new button
const newBtn = document.createElement("button");
newBtn.textContent = "Click Me";
document.body.prepend(newBtn);

newBtn.addEventListener("click", showMessage);

function showMessage() {
  alert("Nice message");
}

// Show text area message
const message = document.querySelector("#message");
const messageBtn = document.querySelector(".show-btn");

messageBtn.addEventListener("click", function (e) {
  alert(message.value);
});

// Change div's background color on mouse enter and revert on mouse leave
const randomDiv = document.querySelector(".random-div");

randomDiv.addEventListener("mouseenter", function (e) {
  randomDiv.style.background = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
});

randomDiv.addEventListener("mouseout", function (e) {
  randomDiv.style.background = `white`;
});

// Change paragraph text color
const randomPara = document.querySelector(".random-p");

randomPara.addEventListener("click", function (e) {
  randomPara.style.color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
});

// Random color function
function randomColor() {
  return Math.floor(Math.random() * 255);
}

// Add HTML element to an empty div
const emptyDiv = document.querySelector(".empty-div");
const emptyBtn = document.querySelector(".empty-btn");

emptyBtn.addEventListener("click", function (e) {
  let myName = "Lauren";
  emptyDiv.innerHTML = `<span>${myName}</span>`;
});

// Show friends when clicked
const list = document.querySelector("ul");
const friends = [
  "Bob1",
  "Bob2",
  "Bob3",
  "Bob4",
  "Bob5",
  "Bob6",
  "Bob7",
  "Bob8",
  "Bob9",
  "Bob10",
];
const listBtn = document.querySelector(".list-btn");
let count = 0;

listBtn.addEventListener("click", function (e) {
  let li = document.createElement("li");

  li.textContent = friends[count++];

  if (count > friends.length) {
    return;
  } else {
    list.appendChild(li);
  }
});
