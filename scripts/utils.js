import { getOptionsList } from "./optionsList.js";
import { processRecipe } from "./processRecipe.js";
import { searchByTag } from "./searchByTag.js";
import { customListOptions } from "./tags.js";

export function createLi(dataName, sectionId, tag) {
  const newLi = document.createElement("li");
  newLi.textContent = dataName;
  newLi.setAttribute("data-name", dataName);
  newLi.setAttribute("data-section-id", sectionId);
  if (tag) {
    searchByTag("add", dataName);
  }
  return newLi;
}

export function createDeleteButton(liListbox, liTags, option, dataName, ulId) {
  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  deleteButton.addEventListener("click", () => {
    // Supprimer l'option sélectionnée
    liListbox.remove();
    // Supprimer le tag
    liTags.remove();

    //Rajout dans la liste des options
    option.classList.remove("hidden");
    searchByTag("delete", dataName);
  });

  return deleteButton;
}

export const formatRecipeCount = (count) => String(count).padStart(2, "0");

export const updateRecipes = (filteredRecipes, criteria) => {
  const $recipesNumberFind = document.querySelector("#recipesNumberFind");
  const options = {
    ingredients: [],
    appliance: [],
    ustensils: [],
  };
  const $cards = document.getElementById("cards");
  $cards.innerHTML = "";

  // Afficher les recettes filtrées
  filteredRecipes.forEach((recipe) => processRecipe(recipe, options));

  //Aucune trouvaille
  if (filteredRecipes.length === 0) {
    const newP = document.createElement("p");
    newP.classList.add("notFound");
    $cards.classList.add("notFound");
    if (criteria) {
      newP.innerText = `Aucune recette ne contient ${criteria}, vous pouvez chercher "tartes aux pommes", "poisson" etc.`;
    }
    $cards.appendChild(newP);
  }
  //Nombre de recettes trouvées
  $recipesNumberFind.textContent = `${formatRecipeCount(
    filteredRecipes.length
  )} recette${filteredRecipes.length > 1 ? "s" : ""}`;
  //listing des options compatibles
  getOptionsList(options);
  customListOptions();
};
