export const forms = document.querySelectorAll("form");

forms.forEach((form) => {
    // console.log("forms");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
