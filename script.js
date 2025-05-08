// ----GCSH
let body = document.querySelector("body");

let btnHome = document.querySelector(".btn-home");
btnHome.addEventListener("click", () => {
  body.style.backgroundImage = "url('asssets/2.png')";
});

let btnTransactions = document.querySelector(".btn-transactions");
btnTransactions.addEventListener("click", () => {
  body.style.backgroundImage = "url('asssets/1.png')";
});

let btnProfile = document.querySelector(".btn-profile");
btnProfile.addEventListener("click", () => {
  body.style.backgroundImage = "url('asssets/3.png')";
});
