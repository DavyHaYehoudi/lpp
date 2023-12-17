import { card } from "./card.js";
const $cards = document.querySelector("#cards");

export const processRecipe = (item, options) => {
  const {id, image, name, time, description, ingredients, appliance, ustensils } =
    item;

  const ingredientList = ingredients.map(
    ({ ingredient, quantity = "", unit = "" }) => ({
      ingredient,
      quantity,
      unit,
    })
  );

  const ingredientsData = ingredientList.reduce(
    (acc, { ingredient, quantity, unit }) => {
      acc.ingredients.push(ingredient);
      acc.quantities.push(quantity);
      acc.units.push(unit);
      return acc;
    },
    { ingredients: [], quantities: [], units: [] }
  );

  $cards.innerHTML += card(
    id,
    image,
    name,
    time,
    description,
    ingredientsData.ingredients,
    ingredientsData.quantities,
    ingredientsData.units
  );

  ingredients.forEach(( {ingredient} ) => {
    options.ingredients.push(ingredient);
  });

  options.appliance.push(appliance);

  ustensils.forEach((ust ) => {
    options.ustensils.push(ust);
  });
};
