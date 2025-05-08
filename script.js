// ----GCSH
let container = document.querySelector(".container");

let btnHome = document.querySelector(".btn-home");
btnHome.addEventListener("click", () => {
  container.style.backgroundImage = "url('asssets/2.png')";
});

let btnTransactions = document.querySelector(".btn-transactions");
btnTransactions.addEventListener("click", () => {
  container.style.backgroundImage = "url('asssets/1.png')";
});

let btnProfile = document.querySelector(".btn-profile");
btnProfile.addEventListener("click", () => {
  container.style.backgroundImage = "url('asssets/3.png')";
});
