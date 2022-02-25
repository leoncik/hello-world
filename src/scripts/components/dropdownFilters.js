const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
// const textFields = document.querySelectorAll('.text-field');
// const searchOptions = document.querySelectorAll('.search-options >*');

// Open / close functions
const openDropdown = (element, placeholder) => {
    let currentList = document.querySelector(`.${element}__list`);
    let currentTextField = document.querySelector(`.${element}__text-field`);
    let currentTrigger = document.querySelector(
        `.${element}__dropdown-trigger`
    );
    let currentLabel = document.querySelector(`.${element}__label`);
    let currentOption = document.querySelector(`.${element}`);
    let currentDropdownArrow = document.querySelector(
        `.${element} .dropdown-arrow`
    );
    currentList.classList.add('show');
    currentTextField.classList.add('show');
    currentTextField.setAttribute('placeholder', placeholder);
    currentTrigger.classList.add('hide');
    currentLabel.classList.add(`${element}__label_expanded`);
    currentOption.classList.add('active-option');
    currentDropdownArrow.classList.toggle('dropdown-arrow_rotate');
    currentTextField.focus();
};

const closeDropdown = (element) => {
    let currentList = document.querySelector(`.${element}__list`);
    let currentTextField = document.querySelector(`.${element}__text-field`);
    let currentTrigger = document.querySelector(
        `.${element}__dropdown-trigger`
    );
    let currentLabel = document.querySelector(`.${element}__label`);
    let currentOption = document.querySelector(`.${element}`);
    let currentDropdownArrow = document.querySelector(
        `.${element} .dropdown-arrow`
    );
    currentList.classList.remove('show');
    currentTextField.classList.remove('show');
    currentTextField.value = '';
    currentLabel.classList.remove(`${element}__label_expanded`);
    currentOption.classList.remove('active-option');
    currentDropdownArrow.classList.toggle('dropdown-arrow_rotate');
    currentTrigger.classList.remove('hide');
};

// Enable dropdown
export const enableDropdown = () => {
    // Open dropdown
    for (const iterator of dropdownTriggers) {
        iterator.addEventListener('click', (e) => {
            e.preventDefault();
            switch (e.target.className) {
                case 'ingredients__dropdown-trigger dropdown-trigger':
                    openDropdown('ingredients', 'Rechercher un ingrédient');
                    break;

                case 'appliance__dropdown-trigger dropdown-trigger':
                    openDropdown('appliance', 'Rechercher un appareil');
                    break;

                case 'utensils__dropdown-trigger dropdown-trigger':
                    openDropdown('utensils', 'Rechercher un ustensile');
                    break;

                default:
                    break;
            }
        });
    }

    // Close dropdown
    // ! Needs refactor
    document.addEventListener('click', (e) => {
        // ingredients
        let specifiedElementIngredients =
            document.querySelector('.ingredients');
        let specifiedElementLabelIngredients = document.querySelector(
            '.ingredients__label'
        );
        let isClickInsideIngredients = specifiedElementIngredients.contains(
            e.target
        );
        let isClickInsideLabelIngredients =
            specifiedElementLabelIngredients.contains(e.target);
        // appliance
        let specifiedElementAppliance = document.querySelector('.appliance');
        let specifiedElementLabelAppliance =
            document.querySelector('.appliance__label');
        let isClickInsideAppliance = specifiedElementAppliance.contains(
            e.target
        );
        let isClickInsideLabelAppliance =
            specifiedElementLabelAppliance.contains(e.target);
        // utensils
        let specifiedElementUtensils = document.querySelector('.utensils');
        let specifiedElementLabel = document.querySelector('.utensils__label');
        let isClickInsideUtensils = specifiedElementUtensils.contains(e.target);
        let isClickInsideLabelUtensils = specifiedElementLabel.contains(
            e.target
        );

        /* Close ingredients dropdown if clicked outside container and if container is active */
        if (
            !isClickInsideIngredients &&
            specifiedElementIngredients.classList.contains('active-option')
        ) {
            closeDropdown('ingredients');
            console.log('fermeture ingrédients');
            /* Close ingredients dropdown if clicked on label and if label is expanded */
        } else if (
            isClickInsideLabelIngredients &&
            e.target.classList.contains('ingredients__label_expanded')
        ) {
            closeDropdown('ingredients');
            console.log('fermeture ingredients via label');
            /* Repetition for appliance and utensils... */
        } else if (
            !isClickInsideAppliance &&
            specifiedElementAppliance.classList.contains('active-option')
        ) {
            closeDropdown('appliance');
            console.log('fermeture appareils');
        } else if (
            isClickInsideLabelAppliance &&
            e.target.classList.contains('appliance__label_expanded')
        ) {
            closeDropdown('appliance');
            console.log('fermeture appareils via label');
        } else if (
            !isClickInsideUtensils &&
            specifiedElementUtensils.classList.contains('active-option')
        ) {
            closeDropdown('utensils');
            console.log('fermeture ustensiles');
        } else if (
            isClickInsideLabelUtensils &&
            e.target.classList.contains('utensils__label_expanded')
        ) {
            closeDropdown('utensils');
            console.log('fermeture ustensiles via label');
        }
    });
};

export const enableSelectFilter = () => {
    let dropdownOptions = document.querySelectorAll('.search-options li');
    for (const iterator of dropdownOptions) {
        iterator.addEventListener('click', () => {
            console.log("L'option X a été sélectionnée");
        });
    }
};
