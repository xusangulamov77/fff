const id = document.getElementById("advice-id");
const quote = document.getElementById("quote");
const btn = document.getElementById("btn");

const getAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      id.innerHTML = data.slip.id;
      quote.innerHTML = "''" + data.slip.advice + "''";
    })
    .catch((err) => {
      quote.innerHTML = err.message;
    });
};

btn.addEventListener("click", getAdvice);
