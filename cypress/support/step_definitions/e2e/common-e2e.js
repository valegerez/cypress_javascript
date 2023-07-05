import { clickByButtonType, fillByInputType, checkElementBySelector } from '../../helpers/common-helpers-e2e'
import BasicSelectors from '../../support/pageObjects/basicSelectors'
const basicSelectors = new BasicSelectors()

Given('I click on {string} {string}', (buttonName) => {
    clickByButtonType(buttonName)
})

Given('I fill {string} input with value {string}', (inputType, text) => {
    fillByInputType(inputType, text)
})

Given('I select {string} option', () => {
    //something
})

Then('I should {string} {string} on the table', (condition, element) => {
    checkElementBySelector(condition, element)
})

