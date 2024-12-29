let fa_bars = document.getElementsByClassName("fa-bars");
let drop_down = document.querySelector(".drop_down");

fa_bars[0].addEventListener("click", () => {
  fa_bars[0].classList.toggle("fa-xmark");
  drop_down.classList.toggle("drop");
  let drop = document.querySelector(".drop");
  if (drop_down.contains(drop)) {
    drop.innerHTML = `
        <a href="#one">Home</a>
        <a href="#two">About</a>
        <a href="#three">Skills</a>
        <a href="#four">Education</a>
        <a href="#five">Contact</a>
      `;
  } else {
    drop_down.innerHTML = "";
  }
});
