import { recipes } from "../data/recipes.js";
import { getOptionsList } from "./optionsList.js";
import { processRecipe } from "./processRecipe.js";
import { searchRecipes } from "./searchRecipes.js";
import { customListOptions } from "./tags.js";
import { formatRecipeCount } from "./utils.js";

export const cardsList = (filterCriteria = {}) => {
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

  $cards.innerHTML = ""; //Effacer le contenu précédent

  // Construction des options pour la recherche avancée
  const options = {
    ingredients: [],
    appliance: [],
    ustensils: [],
  };

  if (filteredRecipes.length === 0) {
    const newP = document.createElement("p");
    newP.classList.add("notFound");
    $cards.classList.add("notFound");
    newP.innerText = `Aucune recette ne contient ${filterCriteria?.searchGeneral}, vous pouvez chercher "tartes aux pommes", "poisson" etc.`;
    $cards.appendChild(newP);
  }
  filteredRecipes.forEach((item) => processRecipe(item, options));

  getOptionsList(options);
  customListOptions();
};
