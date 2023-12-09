// Ouverture de la listbox
function toggleListbox(sectionId) {
  const $target = document.querySelector(
    `#${sectionId} > div.listbox-content `
  );
  const $arrow = document.querySelector(
    `#${sectionId} > div.listbox-header > i `
  );
  if ($target && $arrow) {
    $target.classList.toggle("display-block");
    $arrow.classList.toggle("open");
  }
}

const listboxHeaders = document.querySelectorAll(".listbox-header");

listboxHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const sectionId = header.dataset.sectionId;
    toggleListbox(sectionId);
  });
});

// Sélection d'une option et ajout de tag
// const options = document.querySelectorAll("#ustensils_listBox .options li");
const customLists = document.querySelectorAll('.custom-listbox');

customLists.forEach(list => {
    const options = list.querySelectorAll('.options li');

    options.forEach(option => {
        option.addEventListener('click', () => {
            const dataName = option.getAttribute('data-name');
            const ulId = option.getAttribute('data-section-id');

            const $selectedItem = document.querySelector(`#${ulId} > div.listbox-content > ul.selectedItem`);

            const newLi = document.createElement('li');

            newLi.textContent = dataName;

            $selectedItem.appendChild(newLi);
        });
    });
});
