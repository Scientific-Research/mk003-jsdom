// console.log("Javascript Works!");
const message1Elem = document.querySelector(".message1");
const message2Elem = document.querySelector(".message2");

const changeText1ButtonElem = document.querySelector(".changeText1Button");
const changeText2ButtonElem = document.querySelector(".changeText2Button");

const userText1Elem = document.querySelector(".userText1");
const userText2Elem = document.querySelector(".userText2");

userText1Elem.focus();

console.log(message1Elem);

// message1Elem.innerText = "Initial Text";

const changeText = () => {
  //   messageElem.innerText = "The Button was clicked! ";
  message1Elem.innerText = userText1Elem.value;
  userText1Elem.value = "";
  userText1Elem.focus();
};

// changeTextButtonElem.addEventListener("click", () => {
//   //   console.log("button was clicked");
//   //   messageElem.innerHTML = "the <b>button</b> was clicked";
//   messageElem.innerText = "the button was clicked";
// });

changeText1ButtonElem.addEventListener("click", changeText);
//   console.log("button was clicked");
//   messageElem.innerHTML = "the <b>button</b> was clicked";
//   messageElem.innerText = "the button was clicked";

// const test = () =>{
//     console.log('Works');
// }

userText1Elem.addEventListener("keypress", (e) => {
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
