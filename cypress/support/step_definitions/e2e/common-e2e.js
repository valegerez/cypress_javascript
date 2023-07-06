import { clickByButtonType, fillByInputType, checkElementBySelectorVale } from '../../helpers/common-helpers-e2e'
import CommonSelectors from '../../pageObjects/commonSelectors'
const commonSelectors = new CommonSelectors()

Given('I navigate to teladoc page', () => {
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
    const tableCellSelector = cy.get('.smart-table td')
    checkElementBySelectorVale(condition, tableCellSelector.contains(elementName))
})
