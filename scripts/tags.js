import { createDeleteButton, createLi } from "./utils.js";

export const customListOptions = () => {
  // Sélection d'une option et affichage
  const options = document.querySelectorAll(".options li");

  options.forEach((option) => {
    option.addEventListener("click", () => {
      //Récupération des attributs sur li
      const dataName = option.getAttribute("data-name");
      const ulId = option.getAttribute("data-section-id");

      //Noeuds du DOM
      const $tags = document.getElementById("tags");
      const $selectedItem = document.querySelector(
        `#${ulId} > div.listbox-content > ul.selectedItem`
      );

      // Créer un nouvel li dans la listbox
      const newLiListbox = createLi(dataName, ulId);
      $selectedItem.appendChild(newLiListbox);

      // Créer le nom du tag
      const newLiTags = createLi(dataName, ulId, "tag");

      //Créer le bouton delete du tag
      const deleteButton = createDeleteButton(
        newLiListbox,
        newLiTags,
        dataName
      );
      newLiTags.appendChild(deleteButton);
      //Ajouter le tag dans son espace dédié
      $tags.appendChild(newLiTags);
    });
  });
};
