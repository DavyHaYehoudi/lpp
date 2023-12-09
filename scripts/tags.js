// Sélection d'une option et affichage
const customLists = document.querySelectorAll(".custom-listbox");
const tagList = document.getElementById("tags");

customLists.forEach((list) => {
  const options = list.querySelectorAll(".options li");

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const dataName = option.getAttribute("data-name");
      const ulId = option.getAttribute("data-section-id");

      const $selectedItem = document.querySelector(
        `#${ulId} > div.listbox-content > ul.selectedItem`
      );
      const $tags = document.getElementById("tags");

      // Créer un nouvel li dans la listbox
      const newLiListbox = createLi(dataName, ulId);

      $selectedItem.appendChild(newLiListbox);

      // Créer un nouvel li dans le #tags
      const newLiTags = createLi(dataName, ulId);
      const deleteButton = createDeleteButton(newLiListbox, newLiTags);
      newLiTags.appendChild(deleteButton);

      $tags.appendChild(newLiTags);
    });
  });
});

function createLi(dataName, sectionId) {
  // Créer un nouvel li
  const newLi = document.createElement("li");
  newLi.textContent = dataName;

  // Ajouter les attributs data au nouvel li
  newLi.setAttribute("data-name", dataName);
  newLi.setAttribute("data-section-id", sectionId);

  return newLi;
}

function createDeleteButton(liListbox, liTags) {
  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  deleteButton.addEventListener("click", () => {
    // Supprimer le li parent dans la listbox
    liListbox.remove();
    // Supprimer le li parent dans les tags
    liTags.remove();
  });

  return deleteButton;
}
