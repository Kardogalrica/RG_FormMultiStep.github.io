const wizard = document.querySelector('[data-multiform=wizard]')
const wizardItems = [...document.querySelectorAll('[data-multiform=wizard-Item]')]
const wizardForms = [...document.querySelectorAll('[data-multiform=form]')]

/* 
item-past
item-active */

function managerWizard(wizard, wizardItems,wizardForms) {
    /* Wizard Items Selecionado */
    let wizardItemSelected = wizardItems.filter((el) => Number(el.dataset.value) == Number(wizard.dataset.value))
    wizardItemSelected.forEach((el) => {
        el.classList.remove('item-past')
        el.classList.add('item-active')
    })


    /* wizard items já passados */
    let wizardItemsPass = wizardItems.filter((el) => Number(el.dataset.value) < Number(wizard.dataset.value))
    wizardItemsPass.forEach((el) => {
        el.classList.add('item-past')
        el.classList.remove('item-active')
    })

    /* wizard items não passados */
    let wizardItemsNotPass = wizardItems.filter((el) => Number(el.dataset.value) > Number(wizard.dataset.value))
    wizardItemsNotPass.forEach((el) => {
        el.classList.remove('item-past')
        el.classList.remove('item-active')
    })

    /* wizard form selecionado */
    let wizardFormSelect = wizardForms.filter((el) => Number(el.dataset.value) == Number(wizard.dataset.value))
    wizardFormSelect.forEach(el => {
        el.classList.remove('d-none')
    });

    /* wizard forms não selecionados */
    let wizardFormsNotSelect = wizardForms.filter((el) => Number(el.dataset.value) !== Number(wizard.dataset.value))
    wizardFormsNotSelect.forEach(el => {
        el.classList.add('d-none')
    });
}

managerWizard(wizard, wizardItems,wizardForms)

const observer = new MutationObserver(() => {
    managerWizard(wizard, wizardItems,wizardForms)
})


observer.observe(wizard, {
    attributes: true,
    attributeFilter: ['data-value']
})

function nextStep(maxvalue) {
    if(Number(document.querySelector('[data-multiform=wizard]').dataset.value) < maxvalue) {
        document.querySelector('[data-multiform=wizard]').dataset.value = Number(document.querySelector('[data-multiform=wizard]').dataset.value) + 1        
    }

}

function previouseStep() {
    if(Number(document.querySelector('[data-multiform=wizard]').dataset.value > 1)) {
        document.querySelector('[data-multiform=wizard]').dataset.value = Number(document.querySelector('[data-multiform=wizard]').dataset.value) - 1        
    }

}