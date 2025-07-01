const inputs = document.querySelectorAll("input");
const btn = document.querySelector(".card__button");
const cardResultValue = document.querySelector(".card__resultValue");
const currentYear = new Date().getFullYear();

btn.addEventListener("click", () => {
  getItemsInputFromNodes();
});

function setDateOfBirth(input, index) {
  const year = document.querySelector("#year");
  const lengthDigits = year.value;
  let chick = true;

  const numberChick = new Map([
    [0, 31],
    [1, 12],
    [2, currentYear],
  ]);

  const maxValue = numberChick.get(index);

  if (input.value === "" || Number(input.value) > maxValue) {
    input.classList.add("card__input--error");

    chick = false;
  } else {
    input.classList.remove("card__input--error");
  }

  if (index === 2 && (lengthDigits.length < 4 || Number(lengthDigits) < 1900)) {
    year.classList.add("card__input--error");

    chick = false;
  }

  return chick;
}

function getItemsInputFromNodes() {
  let allVallid = true;

  inputs.forEach((inputItem, index) => {
    const valled = setDateOfBirth(inputItem, index);
    console.log(valled)
    if (!valled) {
      allVallid = false;
    }
  });

  if (allVallid) {
    const year = document.querySelector("#year").value;
    getResult(year);
  }
}

function getResult(yearOfBirth) {
  const yearBirth = currentYear - yearOfBirth;
  cardResultValue.textContent = yearBirth;
}

function chickMaxDigits() {
  inputs.forEach((item) => {
    item.addEventListener("keydown", (event) => {
      const lengthDigits = item.dataset.lengthdigits;
      const inputValue = String(item.value.length);

      const allowedKeys = [
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "Tab",
      ];

      if (inputValue >= lengthDigits && !allowedKeys.includes(event.key)) {
        event.preventDefault();
      }
    });
  });
}
chickMaxDigits();
