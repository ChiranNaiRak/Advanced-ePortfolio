/* template_7kjbf4h */

/* service_hjvbffu */

/* 1swhe1oiKo6UKF8Uq */

/* forms by default would refresh pages so to stop that, we use line 10 */
let contrastToggle = false; /* initially, itll be false */
let isModalOpen = false; /* when we first open the page, its gonna be false, modal is not open */
let scaleFactor = 1 / 20;

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay");
  const success = document.querySelector(".modal__successful");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_hjvbffu" /* service id */,
      "template_7kjbf4h" /* template id */,
      event.target,
      "1swhe1oiKo6UKF8Uq" /* user id */
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is currently unavailable. Please contact me directly at chiranrak@gmail.com"
      );
    });
}

/* In order to make it show up when we press the mail button, we target the body whereby we add a class which targets another class */

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal__open");
  }
  isModalOpen = true; /* so now when we click the button, isModalOpen is now true so it is open */
  document.body.classList += " modal__open";
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function moveBackground(event) {
  let shapes =
    document.querySelectorAll(
      ".shape"
    ); /* use queryselectorall to have them in an array, target every class with shape  */
  let x =
    event.clientX *
    scaleFactor; /* have to divide by 20 because if we translate too much, the shapes will move with the cursor */
  let y = event.clientY * scaleFactor;

  /* this gives us the mouse position in the console every time we move it */

  /* now we want to loop over everything in the shapes array whereby queryselectorall returns an array  */

  for (let i = 0; i < shapes.length; i++) {
    let isOdd = i % 2 !== 0;
    let boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px) rotate(${x * boolInt * 10}deg)`;
  }
}
