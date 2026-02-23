class LoginPage {

  visit() {
    cy.visit('https://www.saucedemo.com/')
  }

  inputUsername(username) {
    cy.get('#user-name').clear().type(username)
  }

  inputPassword(password) {
    cy.get('#password').clear().type(password)
  }

  clickLogin() {
    cy.get('#login-button').click()
  }

  login(username, password) {
    this.inputUsername(username)
    this.inputPassword(password)
    this.clickLogin()
  }

  getErrorMessage() {
    return cy.get('[data-test="error"]')
  }

  validateLoginSuccess() {
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
  }

}

export default new LoginPage()
