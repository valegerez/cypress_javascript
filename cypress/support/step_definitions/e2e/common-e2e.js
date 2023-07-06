import { clickByButtonType, fillByInputType, checkElementBySelector } from '../../helpers/common-helpers-e2e'
import BasicSelectors from '../../pageObjects/basicSelectors'
const basicSelectors = new BasicSelectors()

Given('I click on {string} {string}', (buttonName) => {
    clickByButtonType(buttonName)
})

Given('I fill {string} input with value {string}', (inputType, text) => {
    fillByInputType(inputType, text)
})

Given('I select {string} option', (option) => {
    basicSelectors.getRoleDropdown().select(option)
})

Then('I should see {string} on the table', (elementName) => {
    var tableCells = document.querySelectorAll('.smart-table td');
    var isTextPresent = false;
    for (var i = 0; i < tableCells.length; i++) {
      var cell = tableCells[i];
      if (cell.textContent.trim() === elementName) {
        isTextPresent = true;
        break;
      }
    }
    if (isTextPresent) {
      console.log("'ValeTest111' is present in the table.");
    } else {
      console.log("'ValeTest111' is not found in the table.");
    }
})
