import { recipes } from "../data/recipes.js";
import { getOptionsList } from "./optionsList.js";
import { processRecipe } from "./processRecipe.js";
import { searchRecipes } from "./searchRecipes.js";
import { customListOptions } from "./tags.js";
import { formatRecipeCount } from "./utils.js";

export const cardsList = (filterCriteria = {}, limit = 10) => {
  const $recipesNumberFind = document.querySelector("#recipesNumberFind");
  const $cards = document.querySelector("#cards");

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
    $recipesNumberFind.textContent = `${limit} recettes`;
  }

  $cards.innerHTML = ""; //Effacer le contenu précédent

  //Limitation du nombre de recettes à afficher
  const slicedRecipes = filterCriteria.searchGeneral
    ? filteredRecipes
    : filteredRecipes.slice(0, limit);

  // Construction des options pour la recherche avancée
  const options = {
    ingredients: [],
    appliance: [],
    ustensils: [],
  };

  slicedRecipes.forEach((item) => processRecipe(item, options));

  getOptionsList(options);
  customListOptions()
};
