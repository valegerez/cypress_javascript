import CommonSelectors from '../../support/pageObjects/commonSelectors'
const commonSelectors = new CommonSelectors()

export const checkElementBySelectorVale = (condition, selector) => {
    condition === 'see' ? selector.should('be.visible') : selector.should('not.exist')
}
  
export const clickByButtonType = (buttonName) => {
    let element
    switch (buttonName) {
        case 'Add User':
            element = commonSelectors.getAddUserButton()
            break
        case 'Save':
            element = commonSelectors.getSaveButton()
            break
        case 'Delete':
            element = commonSelectors.getDeleteButton()
            break
        case 'OK':
            element = commonSelectors.getOkButton()
            break
    }
    element.click({ force: true })
}

export const fillByInputType = (inputType, text) => {
    let element
    switch (inputType) {
        case 'First Name':
            element = commonSelectors.getFirstNameInput()
            break
        case 'Last Name':
            element = commonSelectors.getLastNameInput()
            break
        case 'User Name':
            element = commonSelectors.getUserNameInput()
            break
        case 'Password':
            element = commonSelectors.getPasswordInput()
            break
        case 'Email':
            element = commonSelectors.getEmailInput()
            break
        case 'Cell Phone':
            element = commonSelectors.getCellPhoneInput()
            break
    }
    element.clear().type(text)
}