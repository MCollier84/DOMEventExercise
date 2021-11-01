// DOM Event Exercise 10/29/2021

// 1a
document.querySelector(`button`);
const button1 = document.querySelector(`button`);
// console.dir(button1);
console.log(button1);

// 1b
button1.onclick = () => {
    alert(`Cool! You can hear/understand a hummingbird and ants`);
  }

// 2a
document.querySelector(`h3`);
const h3 = document.querySelector(`h3`);
console.log(h3);
// console.dir(h3);

// 2b
h3.addEventListener(`mouseover`, () => {
    alert(`OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one.`);
  });
// console.log(h3);

// 3a
document.querySelector(`text`);
const text = document.querySelector(`text`);
console.log(text);

// 3b
form.addEventListener(`submit`, f => {
  f.preventDefault();
  const insert = form.elements.quote.value;
  alert(insert);
  form.elements.quote.value = ``;
  console.dir(insert);
  console.log(insert);
});
