import { clickByButtonType, fillByInputType, checkElementBySelectorVale } from '../../helpers/common-helpers'
import CommonSelectors from '../../pageObjects/common-selectors'
const commonSelectors = new CommonSelectors()

Given('I navigate to Teladoc page', () => {
    cy.visit(globalUrl)
})

Given('I click on {string} {string}', (buttonName) => {
    clickByButtonType(buttonName)
})

Given('I fill {string} input with value {string}', (inputType, text) => {
    fillByInputType(inputType, text)
})

Given('I select {string} option', (option) => {
    commonSelectors.getRoleDropdown().select(option)
})

Then('I should {string} {string} on the table', (condition, elementName) => {
    checkElementBySelectorVale(condition, cy.get('.smart-table td').contains(elementName))
})
