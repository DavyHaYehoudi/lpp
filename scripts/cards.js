import { recipes } from "../data/recipes.js";
import { getOptionsList } from "./optionsList.js";
import { processRecipe } from "./processRecipe.js";
import { searchRecipes } from "./searchGeneral.js";
import { formatRecipeCount } from "./utils.js";

export const cardsList = (filterCriteria = {}, limit = 10) => {
  const $recipesNumberFind = document.querySelector("#recipesNumberFind");
  const $cards = document.querySelector("#cards");

  let filteredRecipes;

  if (
    filterCriteria?.searchGeneral &&
    filterCriteria.searchGeneral.length >= 3
  ) {
    filteredRecipes = searchRecipes(filterCriteria.searchGeneral, recipes);
    $recipesNumberFind.textContent = `${formatRecipeCount(
      filteredRecipes.length
    )} recette${filteredRecipes.length > 1 ? "s" : ""}`;
  } else {
    filteredRecipes = [...recipes];
    $recipesNumberFind.textContent = `${limit} recettes`;
  }

  $cards.innerHTML = "";
  const slicedRecipes = filterCriteria.searchGeneral
    ? filteredRecipes
    : filteredRecipes.slice(0, limit);

  const options = {
    ingredients: [],
    appliance: [],
    ustensils: [],
  };

  slicedRecipes.forEach((item) => processRecipe(item, options));

  getOptionsList(options);
};
