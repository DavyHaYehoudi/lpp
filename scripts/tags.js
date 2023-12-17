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
      // const $searchInputOption = document.getElementById(
      //   `search_bar_${ulId.split("_")[0]}`
      // );
      const $selectedItem = document.querySelector(
        `#${ulId} > div.listbox-content > ul.selectedItem`
      );

      // Créer un nouvel li dans la listbox
      const newLiListbox = createLi(dataName, ulId);
      $selectedItem.appendChild(newLiListbox);
      option.classList.add("hidden");

      // Créer le nom du tag
      const newLiTags = createLi(dataName, ulId, "tag");

      //Créer le bouton delete du tag
      const deleteButton = createDeleteButton(
        newLiListbox,
        newLiTags,
        option,
        dataName,
        ulId
      );
      newLiTags.appendChild(deleteButton);
      //Ajouter le tag dans son espace dédié
      $tags.appendChild(newLiTags);

      //Efface le contenu du champ de recherche avancé
      // $searchInputOption.value = "";
    });
  });
};
