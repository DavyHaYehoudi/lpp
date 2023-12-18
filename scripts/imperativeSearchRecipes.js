export const imperativeSearchRecipes = (query, recipes, tagName) => {
  const results = [];

  for (let i = 0; i < recipes.length; i++) {
    const { name, ingredients, description, appliance, ustensils } = recipes[i];
    const recipeLower = name.toLowerCase();
    const ingredientsLower = ingredients.map((ing) =>
      ing.ingredient.toLowerCase()
    );
    const descriptionLower = description.toLowerCase();
    const applianceLower = appliance.toLowerCase();
    const ustensilsLower = ustensils.map((ust) => ust.toLowerCase());

    let tagMatch = false;

    if (tagName) {
      // Recherche par tag dans les ingrédients
      for (let j = 0; j < ingredientsLower.length; j++) {
        if (ingredientsLower[j].includes(tagName.toLowerCase())) {
          tagMatch = true;
          break;
        }
      }

      // Recherche par tag dans les ustensiles
      if (!tagMatch) {
        for (let j = 0; j < ustensilsLower.length; j++) {
          if (ustensilsLower[j].includes(tagName.toLowerCase())) {
            tagMatch = true;
            break;
          }
        }
      }

      // Recherche par tag dans l'appareil
      if (!tagMatch && applianceLower === tagName.toLowerCase()) {
        tagMatch = true;
      }
    }

    // Condition de recherche générale
    if (
      (tagName && tagMatch) ||
      (!tagName &&
        (recipeLower.includes(query.toLowerCase()) ||
          ingredientsLower.includes(query.toLowerCase()) ||
          descriptionLower.includes(query.toLowerCase())))
    ) {
      results.push(recipes[i]);
    }
  }

  return results;
};
