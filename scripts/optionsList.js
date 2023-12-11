import { createLi } from "./utils.js";

const sections = {
  ingredients: "#ingredient_listBox > div.listbox-content > ul.options",
  appliance: "#appliance_listBox > div.listbox-content > ul.options",
  ustensils: "#ustensils_listBox > div.listbox-content > ul.options",
};

export const getOptionsList = (options) => {
//   console.log('options:', options)
  for (const [key, selector] of Object.entries(sections)) {
    const $optionsList = document.querySelector(selector);
    const uniqueOptions = [...new Set(options[key])];
    console.log('uniqueOptions:', uniqueOptions)

    uniqueOptions.forEach((option) => {
      const newLiOption = createLi(option, key + "_listBox");
      $optionsList.appendChild(newLiOption);
    });
  }
};
