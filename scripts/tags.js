import { createDeleteButton, createLi } from "./utils.js";

export const customListOptions = () => {
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
        const $searchInputOption = document.getElementById(
          "search_bar_ustensils"
        );
        $searchInputOption.value = ""; //Efface le contenu du champ de recherche avancé
        const $tags = document.getElementById("tags");

        // Créer un nouvel li dans la listbox
        const newLiListbox = createLi(dataName, ulId);

        $selectedItem.appendChild(newLiListbox);
        option.classList.add("hidden");

        // Créer un nouvel li dans le #tags
        const newLiTags = createLi(dataName, ulId);

        const $options = document.querySelector(
          `#${ulId} > div.listbox-content > .options`
        );
        const deleteButton = createDeleteButton(
          newLiListbox,
          newLiTags,
          $options
        );
        newLiTags.appendChild(deleteButton);

        $tags.appendChild(newLiTags);
      });
    });
  });
};
