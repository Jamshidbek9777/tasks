const horse = document.querySelector("#horse");
const horseRemove = document.querySelector("#h-svg");
const donkey = document.querySelector("#donkey");
const donkeyRemove = document.querySelector("#d-svg");
const cat = document.querySelector(".cat");
const catRemove = document.querySelector("#c-svg");

horseRemove.onclick = () => {
  horse.style.cssText = `
    display:none;
    `;
};
donkeyRemove.onclick = () => {
  donkey.style.cssText = `
    display:none;
    `;
};
catRemove.onclick = () => {
  cat.style.cssText = `
    display:none;
    `;
};
