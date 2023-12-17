import { cardsList } from "./cards.js";

cardsList();

// export const handleSearchGeneralInput = () => {
//   const searchTerm = document.getElementById("search-bar").value;
//   cardsList({ searchGeneral: searchTerm });
// };

// export const setupSearchEvent = () => {
//   const $searchForm = document.getElementById("searchGeneralForm");
//   $searchForm.addEventListener("submit", function () {
//     handleSearchGeneralInput();
//   });
// };
const handleSearchGeneralInput = () => {
    const $searchTerm = document.getElementById("search-bar");
    const $tags = document.getElementById("tags");
    const $selectedItem = document.querySelectorAll(".selectedItem");
    const $searchInputOption = document.querySelectorAll(".search-bar-select");
    $searchTerm.addEventListener("input", function () {
      const searchTerm = $searchTerm.value;
      //Suppression de tous les tags actifs
      $tags.innerHTML = "";
      //Suppression de toutes les options sélectionnées dans la listBox
      Array.from($selectedItem).forEach((option) => (option.innerHTML = ""));
      //Effacer le contenu des champs de recherche avancée
      Array.from($searchInputOption).forEach((input) => (input.value = ""));
      //Lancement de la recherche principale
      cardsList({ searchGeneral: searchTerm });
    });
  };
  handleSearchGeneralInput()