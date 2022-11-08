// console.log("Javascript Works!");
const messageElem = document.querySelector(".message");
const changeTextButtonElem = document.querySelector(".changeTextButton");
const userTextElem = document.querySelector(".userText");

console.log(messageElem);

messageElem.innerText = "Initial Text";

const changeText = () => {
  //   messageElem.innerText = "The Button was clicked! ";
  messageElem.innerText = userTextElem.value;
  userTextElem.value = "";
  userTextElem.focus();
};

// changeTextButtonElem.addEventListener("click", () => {
//   //   console.log("button was clicked");
//   //   messageElem.innerHTML = "the <b>button</b> was clicked";
//   messageElem.innerText = "the button was clicked";
// });

changeTextButtonElem.addEventListener("click", changeText);
//   console.log("button was clicked");
//   messageElem.innerHTML = "the <b>button</b> was clicked";
//   messageElem.innerText = "the button was clicked";

// const test = () =>{
//     console.log('Works');
// }

userTextElem.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    // messageElem.innerText = "Enter Key was pressed";
    changeText();
    // messageElem.innerText = userTextElem.value;
    // console.log("Enter Key was pressed!");
    // console.log(e);
  }
  //   messageElem.innerText = "Key up was pressed";
  //   messageElem.innerText = userTextElem.value;
  //   console.log("Keyup was pressed.");
  //   console.log(e);
});
