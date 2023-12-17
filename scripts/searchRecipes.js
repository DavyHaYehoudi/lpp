import { cardsList } from "./cards.js";

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
export const handleSearchGeneralInput = () => {
  const $searchTerm = document.getElementById("search-bar");
  $searchTerm.addEventListener("input", function () {
    const searchTerm = $searchTerm.value;
    cardsList({ searchGeneral: searchTerm });
  });
};

export const searchRecipes = (query, recipes, tagName) => {
  const results = [];

  // Convertir la requête en minuscules pour une recherche insensible à la casse
  const queryLower = query.toLowerCase();

  // Filtrer les recettes qui correspondent à la requête dans le titre, les ingrédients ou la description
  recipes.forEach((recipe) => {
    const { name, ingredients, description, appliance, ustensils } = recipe;
    const recipeLower = name.toLowerCase();
    const ingredientsLower = ingredients.map((ing) =>
      ing.ingredient.toLowerCase()
    );
    const descriptionLower = description.toLowerCase();
    const applianceLower = appliance.toLowerCase();
    const ustensilsLower = ustensils.map((ust) => ust.toLowerCase());

    //Recherche par tag
    if (
      tagName &&
      (ingredientsLower.some((ing) => ing.includes(tagName.toLowerCase())) ||
        applianceLower === tagName.toLowerCase() ||
        ustensilsLower.some((ust) => ust.includes(tagName.toLowerCase())))
    ) {
      results.push(recipe);
    }
    // Recherche générale
    else if (
      !tagName &&
      (recipeLower.includes(queryLower) ||
        ingredientsLower.some((ing) => ing.includes(queryLower)) ||
        descriptionLower.includes(queryLower))
    ) {
      results.push(recipe);
    }
  });

  return results;
};
