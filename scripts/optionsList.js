import { createLi } from "./utils.js";

const sections = {
  ingredients: "#ingredients_listBox > div.listbox-content > ul.options",
  appliance: "#appliance_listBox > div.listbox-content > ul.options",
  ustensils: "#ustensils_listBox > div.listbox-content > ul.options",
};

export const getOptionsList = (options) => {
  const activeOptionDataNames = Array.from(
    document.querySelectorAll(".selectedItem li")
  ).map((tag) => tag.getAttribute("data-name"));

  for (const [key, selector] of Object.entries(sections)) {
    const $optionsList = document.querySelector(selector);
    //Filtre des noms dupliqués dont simplement l'orthographe diffère
    let uniqueOptions = [
      ...new Set(options[key].map((option) => option.toLowerCase())),
    ];

    //Ne pas proposer les options déjà sélectionnées
    if (activeOptionDataNames.length > 0) {
      uniqueOptions = uniqueOptions.filter((option) =>
        activeOptionDataNames.every((name) => name.toLowerCase() !== option)
      );
    }

    $optionsList.innerHTML = "";
    const uniqueOptionsSorted = uniqueOptions.sort();
    uniqueOptionsSorted.forEach((option) => {
      const capitalizedOption =
        option.charAt(0).toUpperCase() + option.slice(1);
      const newLiOption = createLi(capitalizedOption, key + "_listBox");
      $optionsList.appendChild(newLiOption);
    });
  }
};
