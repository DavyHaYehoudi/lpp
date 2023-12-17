import { recipes } from "../data/recipes.js";
import { searchRecipes } from "./searchRecipes.js";
import { updateRecipes } from "./updateRecipes.js";

//Récupération des id des recettes affichées
const getSelectedIds = () => {
  const articles = document.querySelectorAll("#cards > article");
  return Array.from(articles, (article) => article.getAttribute("data-id"));
};

const filterByTag = (action, dataName, recipesSelectedId, storedCriteria) => {
  if (action === "add") {
    const searchResults = searchRecipes("tag", recipes, dataName);
    return searchResults.filter((item) =>
      recipesSelectedId.includes(String(item.id))
    );
  } else if (action === "delete") {
    //Inventaire des tags actifs après la suppression de l'un d'entre-eux
    const activeRecipeDataNames = Array.from(
      document.querySelectorAll("#tags li")
    )
      .map((tag) => tag.getAttribute("data-name"))
      .filter((name) => name !== dataName);

    //S'il reste encore au moins un tag après la suppression de l'un d'entre-eux
    if (activeRecipeDataNames.length > 0) {
      const searchResults = activeRecipeDataNames.map((name) =>
        searchRecipes("tag", recipes, name)
      );
      const commonResults = searchResults.reduce(
        (acc, currentArray) =>
          acc.filter((recipe) => currentArray.some((r) => r.id === recipe.id)),
        searchResults[0]
      );

      if (storedCriteria) {
        //Une recherche principale est à considérer
        const searchMain = searchRecipes(storedCriteria, recipes);
        return commonResults.filter((result) =>
          searchMain.some((sm) => sm.id === result.id)
        );
      } else {
        //Ce n'est qu'une recherche à partir des tags
        return commonResults;
      }
      //Suppression du dernier tag
    } else if (storedCriteria) {
      return searchRecipes(storedCriteria, recipes);
    } else {
      return [...recipes];
    }
  }
  return [];
};

export const searchByTag = (action, dataName) => {
  const recipesSelectedId = getSelectedIds();
  const storedCriteria = localStorage.getItem("searchCriteria");
  const filteredRecipes = filterByTag(
    action,
    dataName,
    recipesSelectedId,
    storedCriteria
  );
  updateRecipes(filteredRecipes);
};
