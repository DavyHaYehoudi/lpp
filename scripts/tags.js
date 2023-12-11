import { createDeleteButton, createLi } from "./utils.js";

// Sélection d'une option et affichage
const customLists = document.querySelectorAll(".custom-listbox");

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


