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
    let uniqueOptions = [...new Set(options[key])];

    //Ne pas proposer les options déjà sélectionnées
    if (activeOptionDataNames.length > 0) {
      uniqueOptions = uniqueOptions.filter((option) =>
        activeOptionDataNames.every((name) => name.toLowerCase() !== option.toLowerCase())
      );
    }

    $optionsList.innerHTML = "";
    const uniqueOptionsSorted = uniqueOptions.sort();
    uniqueOptionsSorted.forEach((option) => {
      const newLiOption = createLi(option, key + "_listBox");
      $optionsList.appendChild(newLiOption);
    });
  }
};
