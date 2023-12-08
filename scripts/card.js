export const card = (
    image,
    name,
    time,
    description,
    ingredient,
    quantity,
    unit
  ) => {
    console.log('card');
    return `
      <article class="card">
        <div class="top">
          <img src="./images/${image}" alt="${name}" />
          <span class="time">${time}</span>
        </div>
        <h2>${name}</h2>
        <h3>recette</h3>
        <p class="text-recipe recipe">${description}</p>
        <h4>ingrédients</h4>
        // <ul>
        //   <li>
        //     <p class="text-recipe ingredient">${ingredient}</p>
        //     ${quantity ? `<p class="text-recipe quantity">${quantity}</p>` : ''}
        //     ${unit ? `<p class="text-recipe unit">${unit}</p>` : ''}
        //   </li>
        // </ul>
      </article>
    `;
  };
  