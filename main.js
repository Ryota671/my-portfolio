const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");
const button3 = document.getElementById("button-3");
const button4 = document.getElementById("button-4");

const alertMessage1 = function () {
  alert("×...いつか行ってみたい中央アジアの秘境。");
};

button1.onclick = alertMessage1;

const alertMessage2 = function () {
  alert("×…昔何度か行きました。");
};

button2.onclick = alertMessage2;

const alertMessage3 = function () {
  alert("正解!!2018年のイスラエルで撮影しました!");
};
button3.onclick = alertMessage3;

const alertMessage4 = function () {
  alert("おしい!!中東という点では会ってます!");
};
button4.onclick = alertMessage4;
