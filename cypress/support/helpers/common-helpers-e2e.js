import BasicSelectors from '../../support/pageObjects/basicSelectors'
const basicSelectors = new BasicSelectors()

export const checkElementBySelector = (condition, selector) => {
    condition === 'see' ? selector.should('be.visible') : selector.should('not.exist')
}

export const clickByButtonType = (buttonName) => {
    let element
    switch (buttonName) {
        case 'Add User':
            element = basicSelectors.getAddUserButton()
            break
        case 'Save':
            element = basicSelectors.getSaveButton()
            break
        case 'Delete':
            element = basicSelectors.getDeleteButton()
            break
        case 'OK':
            element = basicSelectors.getOkButton()
            break
    }
    element.click({ force: true })
}

export const fillByInputType = (inputType, text) => {
    let element
    switch (inputType) {
        case 'First Name':
            element = basicSelectors.getFirstNameInput()
            break
        case 'Last Name':
            element = basicSelectors.getLastNameInput()
            break
        case 'User Name':
            element = basicSelectors.getUserNameInput()
            break
        case 'Password':
            element = basicSelectors.getPasswordInput()
            break
        case 'Email':
            element = basicSelectors.getEmailInput()
            break
        case 'Cell Phone':
            element = basicSelectors.getCellPhoneInput()
            break
    }
    element.clear().type(text)
}