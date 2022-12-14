// import axios from "axios";
// import axios from 'axios';
// console.log("Javascript Works!");
const message1Elem = document.querySelector(".message1");
const message2Elem = document.querySelector(".message2");
const userText1Elem = document.querySelector(".userText1");
const userText2Elem = document.querySelector(".userText2");
const changeText1ButtonElem = document.querySelector(".changeText1Button");
const changeText2ButtonElem = document.querySelector(".changeText2Button");
const toggleAnswerButtonElem = document.querySelector(".toggleAnswerButton");

const answerElem = document.querySelector(".answer");

// Flashcards

toggleAnswerButtonElem.addEventListener("click", () => {
  console.log("toggle");
  answerElem.classList.toggle("hidden");
  // buttonSituation.innerText = "Clicked";
});
//DOM JS TEXT
userText1Elem.focus();

console.log(message1Elem);

// message1Elem.innerText = "Initial Text";

// One
const changeText1 = () => {
  //   messageElem.innerText = "The Button was clicked! ";
  message1Elem.innerText = userText1Elem.value;
  userText1Elem.value = "";
  userText2Elem.focus();
};

// changeTextButtonElem.addEventListener("click", () => {
//   //   console.log("button was clicked");
//   //   messageElem.innerHTML = "the <b>button</b> was clicked";
//   messageElem.innerText = "the button was clicked";
// });

changeText1ButtonElem.addEventListener("click", changeText1);
//   console.log("button was clicked");
//   messageElem.innerHTML = "the <b>button</b> was clicked";
//   messageElem.innerText = "the button was clicked";

// const test = () =>{
//     console.log('Works');
// }

userText1Elem.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    // messageElem.innerText = "Enter Key was pressed";
    changeText1();
    // messageElem.innerText = userTextElem.value;
    // console.log("Enter Key was pressed!");
    // console.log(e);
  }
  //   messageElem.innerText = "Key up was pressed";
  //   messageElem.innerText = userTextElem.value;
  //   console.log("Keyup was pressed.");
  //   console.log(e);
});

// Two
const changeText2 = () => {
  //   messageElem.innerText = "The Button was clicked! ";
  message2Elem.innerText = userText2Elem.value;
  userText2Elem.value = "";
  userText1Elem.focus();
};

// changeTextButtonElem.addEventListener("click", () => {
//   //   console.log("button was clicked");
//   //   messageElem.innerHTML = "the <b>button</b> was clicked";
//   messageElem.innerText = "the button was clicked";
// });

changeText2ButtonElem.addEventListener("click", changeText2);
//   console.log("button was clicked");
//   messageElem.innerHTML = "the <b>button</b> was clicked";
//   messageElem.innerText = "the button was clicked";

// const test = () =>{
//     console.log('Works');
// }

userText2Elem.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    // messageElem.innerText = "Enter Key was pressed";
    changeText2();
    // messageElem.innerText = userTextElem.value;
    // console.log("Enter Key was pressed!");
    // console.log(e);
  }
  //   messageElem.innerText = "Key up was pressed";
  //   messageElem.innerText = userTextElem.value;
  //   console.log("Keyup was pressed.");
  //   console.log(e);
});

// const scores = [
//   {
//     user: "EJT",
//     score: "01842",
//   },
//   {
//     user: "PPB",
//     score: "01812",
//   },
//   {
//     user: "EJT",
//     score: "01482",
//   },
//   {
//     user: "KZF",
//     score: "02346",
//   },
// ];

(async () => {
  const urlAPI = "https://testapi.tkserv.eu/scores";

  const response = await fetch(urlAPI);
  const scoreData = await response.json();
  console.log(scoreData);
  // return scoreData;
  const User = document.querySelector(".user");
  User.innerText = scoreData
    .map((score) => {
      const scoreData = `${score.user} -- ${score.score}
      `;
      console.log(scoreData);
      return scoreData;
    })
    .join("");
})();
// // const Score = document.querySelector(".score");

// Scores

// const getFullScoreInformation = (score) => {
//   return [score.user, score.score].join(" ");
// };
// User.innerText = scores.map(getFullScoreInformation);
