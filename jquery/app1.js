// Create new btn

const newBtn = $("<button>Click me</button>");

$("body").prepend(newBtn);

newBtn.click(function (e) {
  alert("clicked");
});

// Show text area message
const message = $("#message");
const messageBtn = $(".show-btn");

messageBtn.click(function (e) {
  alert(message.val());
});

// Change div's background color on mouse enter and revert on mouse leave
const randomDiv = $(".random-div");

randomDiv.mouseenter(function (e) {
  randomDiv.css({
    backgroundColor: `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`,
  });
});

randomDiv.mouseleave(function (e) {
  randomDiv.css({
    backgroundColor: "white",
  });
});

// Change paragraph text color
const randomPara = $(".random-p");

randomPara.click(function (e) {
  randomPara.css({
    color: `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`,
  });
});

// Random color function
function randomColor() {
  return Math.floor(Math.random() * 255);
}

// Add HTML element to an empty div
const emptyDiv = $(".empty-div");
const emptyBtn = $(".empty-btn");

emptyBtn.click(function (e) {
  let myName = "Lauren";
  emptyDiv.html(`<span>${myName}</span>`);
});

// Show friends when clicked
const list = $("ul");
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
const listBtn = $(".list-btn");
let count = 0;

listBtn.click(function (e) {
  let li = $(`<li>${friends[count++]}</li>`);

  if (count > friends.length) {
    return;
  } else {
    list.append(li);
  }
});
