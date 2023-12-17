import { recipes } from "../data/recipes.js";
import { searchRecipes } from "./searchRecipes.js";
import { formatRecipeCount, updateRecipes } from "./utils.js";

export const cardsList = (filterCriteria = {}) => {
  localStorage.clear();
  const $recipesNumberFind = document.querySelector("#recipesNumberFind");
  const $cards = document.querySelector("#cards");
  $cards.classList.remove("notFound");
  let filteredRecipes;

  if (
    //Si un terme est passé dans la barre de recherche
    filterCriteria?.searchGeneral &&
    filterCriteria.searchGeneral.length >= 3
  ) {
    filteredRecipes = searchRecipes(filterCriteria.searchGeneral, recipes);
    $recipesNumberFind.textContent = `${formatRecipeCount(
      filteredRecipes.length
    )} recette${filteredRecipes.length > 1 ? "s" : ""}`;
  } else {
    //Sinon, affichage par défaut
    filteredRecipes = [...recipes];
    $recipesNumberFind.textContent = `${filteredRecipes.length} recettes`;
  }

  const criteria = filterCriteria?.searchGeneral;
  if (criteria) {
    localStorage.setItem("searchCriteria", criteria);
  }
  updateRecipes(filteredRecipes, criteria);
};
