const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const h3value = document.getElementById("value");

const counter = (() => {
  let privateCounter = 0;
  const changeBy = (value) => {
    privateCounter += value;
  };
  return {
    increment: () => {
      changeBy(1);
    },
    decrement: () => {
      changeBy(-1);
    },
    value: () => {
      return privateCounter;
    },
  };
})();

const incrementEvent = () => {
  counter.increment();
  setValue();
};
const decrementEvent = () => {
  counter.decrement();
  setValue();
};

const setValue = () => {
  h3value.innerText = counter.value();
};

incrementBtn.addEventListener("click", incrementEvent);
decrementBtn.addEventListener("click", decrementEvent);
