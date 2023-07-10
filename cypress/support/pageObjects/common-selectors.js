class CommonSelectors {
    getAddUserButton() {
        return cy.get('button[type=add]')
    }
    getSaveButton() {
        return cy.get('button[ng-click="save(user)"]')
    }
    getDeleteButton() {
        return cy.get('button .icon-remove').eq(2)
    }
    getOkButton() {
        return cy.get('.btn-primary')
    }
    getFirstNameInput() {
        return cy.get('input[name="FirstName"]')
    }
    getLastNameInput() {
        return cy.get('input[name="LastName"]')
    }
    getUserNameInput() {
        return cy.get('input[name="UserName"]')
    }
    getPasswordInput() {
        return cy.get('input[name="Password"]')
    }
    getEmailInput() {
        return cy.get('input[name="Email"]')
    }
    getCellPhoneInput() {
        return cy.get('input[name="Mobilephone"]')
    }
    getRoleDropdown() {
        return cy.get('select[name="RoleId"]')
    }
}
export default CommonSelectors