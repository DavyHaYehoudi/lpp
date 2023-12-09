export const card = (
  image,
  name,
  time,
  description,
  ingredients,
  quantities,
  units
) => {
  const ingredientList = ingredients.map((ingredient, index) => {
    const quantity = quantities[index] || "";
    const unit = units[index] || "";
    return `
        <li>
          <p class="text-recipe ingredient">${ingredient}</p>
          ${quantity ? `<p><span class="text-recipe quantity">${quantity}</span>` : ""}
          ${unit ? `<span class="text-recipe unit">${unit}</span></p>` : ""}
        </li>
      `;
  });

  return `
      <article class="card">
        <div class="top">
          <img src="./images/${image}" alt="${name}" />
          <span class="time">${time}min</span>
        </div>
        <div class="body">
        <h2>${name}</h2>
        <h3>recette</h3>
        <p class="text-recipe recipe">${description}</p>
        <h4>ingrédients</h4>
        <ul>${ingredientList.join("")}</ul>
        </div>
      </article>
    `;
};
