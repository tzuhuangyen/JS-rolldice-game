"use strict";
const player0E1 = document.querySelector(".player--0");
//score--0&1是擲骰的數
const player1E1 = document.querySelector(".player--1");
const score0E1 = document.querySelector("#score--0");
const score1E1 = document.getElementById("score--1");
//累積的分數
const current0E1 = document.getElementById("current--0");
const current1E1 = document.getElementById("current--1");
//中間區塊
const diceE1 = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

const init = function () {
  //兩人的大分數使用array呈現
  scores = [0, 0];
  //累積分數預設為０
  currentScore = 0;
  //預設玩家為０號開始
  //activePlayer是一個變數，用來追蹤當前的玩家是哪位。當遊戲開始時，預設的  activePlayer  是 0，代表第一位玩
  activePlayer = 0;
  //預設遊戲開始
  playing = true;
  //預設分數為０

  score0E1.textContent = 0;
  score1E1.textContent = 0;
  current0E1.textContent = 0;
  current1E1.textContent = 0;
  //骰子預設為隱藏
  diceE1.classList.add("hidden");
  player0E1.classList.remove("player--winner");
  player1E1.classList.remove("player--winner");
  player0E1.classList.add("player--active");
  player1E1.classList.remove("player--active");
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0E1.classList.toggle("player--active");
  player1E1.classList.toggle("player--active");
};

//rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    //1.generating a random nmber
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2.display dice
    diceE1.classList.remove("hidden");
    diceE1.src = `dice-${dice}.png`;

    //3.if dice ==1 add dice to current or switch to other player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      //當有玩家獲勝時 遊戲就結束 所有按鈕都不執行
      playing = false;
      diceE1.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {
  init();
});
